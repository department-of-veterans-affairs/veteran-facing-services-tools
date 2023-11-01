const jsxAstUtils = require('jsx-ast-utils');

const { elementType } = jsxAstUtils;

const MESSAGE =
  'The <va-button> Web Component should be used to instead of the button HTML element.';

module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
  },

  create(context) {
    return {
      JSXElement(node) {
        // Exit early if we aren't on a button
        if (elementType(node.openingElement) !== 'button') return;
        
        context.report({
          node,
          message:  MESSAGE,
        })
      },
    };
  },
};
