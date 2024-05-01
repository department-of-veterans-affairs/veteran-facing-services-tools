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

        const isFontAwesomeIcon = classValue && classValue.includes('fa-') || elementType(iconNode) === 'i';

        if (!isFontAwesomeIcon) return;

        context.report({
          node,
          message: MESSAGE,
        });

      },
    };
  },
};

