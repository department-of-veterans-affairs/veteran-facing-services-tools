const jsxAstUtils = require('jsx-ast-utils');

const { elementType, getProp, getLiteralPropValue } = jsxAstUtils;

const MESSAGE =
  'The <va-telephone> contact prop should only contain digits and be 3, 5, 6, or 10 digits long. Consider the international prop if you want the number to begin with a 1.';

module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
  },

  create(context) {
    return {
      JSXOpeningElement(node) {
        // Exit early if we aren't on a telephone component
        if (elementType(node) !== 'va-telephone') return;

        const contactProp = getProp(node.attributes, 'contact');
        const contactValue = getLiteralPropValue(contactProp);

        // If contactValue is undefined then the first part of the expression will
        // fail, since undefined doesn't equal 3, 5, 6, or 10
        if (
          contactValue &&
          contactValue?.length !== 3 &&
          contactValue?.length !== 5 &&
          contactValue?.length !== 6 &&
          contactValue?.length !== 10
        ) {
          context.report({
            node,
            message: MESSAGE,
            fix: fixer => {
              // Strip hyphens if we can
              const contact = contactValue?.replace(/[^\d]/g, '');
              return [fixer.replaceText(contactProp, `contact="${contact}"`)];
            },
          });
        }
      },
    };
  },
};
