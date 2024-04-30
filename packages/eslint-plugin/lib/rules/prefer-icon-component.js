const jsxAstUtils = require('jsx-ast-utils');

const { elementType, getProp, getLiteralPropValue } = jsxAstUtils;

const MESSAGE =
  'The <va-icon> Web Component should be used instead of Font Awesome. See: https://design.va.gov/about/developers/using-web-components#how-to-migrate-from-font-awesome-to-va-icon';

module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
  },

  create(context) {
    return {
      JSXElement(node) {
        const iconNode = node.openingElement;
        const classNameProp = getProp(iconNode.attributes, 'className');
        const classValue = getLiteralPropValue(classNameProp);

        // filter out font awesome classes
        const classNameClasses = classValue
          ?.split(' ')
          ?.filter(c => !c.includes('fa'))
          ?.join(' ');

        const ariaLabelProp = getProp(iconNode.attributes, 'aria-label');
        const ariaLabelText = getLiteralPropValue(ariaLabelProp);

        const roleProp = getProp(iconNode.attributes, 'role');
        const altProp = getProp(iconNode.attributes, 'alt');

        if (classValue && classValue.includes('fa-') 
        || elementType(iconNode) === 'i'){
          context.report({
            node,
            message:  MESSAGE,
            fix: fixer => {
              return [
                // replace the original element name with va-icon
                fixer.replaceText(iconNode.name, 'va-icon'),

                // add the size prop
                fixer.insertTextAfter(iconNode.name, ` size={4}`),

                //  add the icon prop
                fixer.insertTextAfter(iconNode.name, ` icon="see name mappings here https://design.va.gov/foundation/icons"`),

                // re-adding classes without font awesome classes
                classNameClasses && fixer.replaceText(classNameProp, `className="${classNameClasses}"`),

                // remove the className prop if there are no classes anymore
                classNameProp && !classNameClasses && fixer.remove(classNameProp),

                // replace aria-label with the srtext component prop
                ariaLabelProp && fixer.replaceText(ariaLabelProp, `srtext="${ariaLabelText}"`),

                // remove role - replaced by component internals
                roleProp && fixer.remove(roleProp),

                // remove alt - replaced by component internals
                altProp && fixer.remove(altProp),
              ].filter(i => !!i);
            }
          })
        }
      },
    };
  },
};

