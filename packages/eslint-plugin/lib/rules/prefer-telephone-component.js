const jsxAstUtils = require('jsx-ast-utils');

const { elementType, getProp, getLiteralPropValue } = jsxAstUtils;

const MESSAGE =
  'The <va-telephone> Web Component should be used to display phone numbers.';

module.exports = {
  meta: {
    docs: {
      description:
        'The telephone Web Component is preferred over anchor links with tel hrefs',
      category: 'Best Practices',
      recommended: false,
    },
    type: 'suggestion',
    fixable: 'code',
  },

  create(context) {
    return {
      JSXElement(node) {
        // Exit early if we aren't on an anchor link
        if (elementType(node.openingElement) !== 'a') return;

        const anchorNode = node.openingElement;

        const hrefProp = getProp(anchorNode.attributes, 'href');
        const hrefValue = getLiteralPropValue(hrefProp);

        if (hrefValue?.startsWith('tel:')) {
          const contact = hrefValue
            .substring('tel:'.length)
            .replace(/[^\d]/g, '');

          const ariaLabelProp = getProp(anchorNode.attributes, 'aria-label');

          context.report({
            node,
            message: MESSAGE,
            fix: fixer => {
              return [
                fixer.replaceText(anchorNode.name, 'va-telephone'),
                fixer.replaceText(hrefProp, `contact="${contact}"`),
                ariaLabelProp && fixer.remove(ariaLabelProp),
                // Remove the children
                ...node.children.map(c => fixer.remove(c)),
                // Add the self-closing slash
                fixer.insertTextBeforeRange(
                  [anchorNode.range[1] - 1, anchorNode.range[1]],
                  '/',
                ),
                // The component will be self-closing since it accepts no child content
                fixer.remove(node.closingElement),
              ].filter(i => !!i);
            },
          });
        }
      },
    };
  },
};
