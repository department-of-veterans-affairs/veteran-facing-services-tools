const jsxAstUtils = require('jsx-ast-utils');

const { elementType, getProp, getLiteralPropValue } = jsxAstUtils;

const MESSAGE =
  'The <va-button> Web Component should be used instead of the button HTML element. For more information, see Storybook: https://design.va.gov/storybook/?path=/docs/uswds-va-button--docs';

module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
  },

  create(context) {
    return {
      JSXElement(node) {
        const anchorNode = node.openingElement;
        const typeProp = getProp(anchorNode.attributes, 'type');
        
        // Only display if we are on a button or input with type button
        if (elementType(anchorNode) === 'button' || 
          (elementType(anchorNode) === 'input' && getLiteralPropValue(typeProp) === 'button')){
          
          context.report({
            node,
            message:  MESSAGE,
          })
        }
      },
    };
  },
};
