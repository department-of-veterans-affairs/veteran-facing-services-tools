const jsxAstUtils = require('jsx-ast-utils');

const { elementType } = jsxAstUtils;

const MESSAGE =
  'The <va-table> Web Component should be used to instead of the table HTML element.';

module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
  },

  create(context) {
    return {
      JSXElement(node) {
        const anchorNode = node.openingElement;
        
        // Only display if we are on a table element
        if (elementType(anchorNode) === 'table'){
          
          context.report({
            node,
            message:  MESSAGE,
          })
        }
      },
    };
  },
};
