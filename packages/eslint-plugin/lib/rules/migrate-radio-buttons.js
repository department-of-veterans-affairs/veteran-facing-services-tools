const jsxAstUtils = require('jsx-ast-utils');
const { elementType } = jsxAstUtils;

const MESSAGE = 'The RadioButtons React component is deprecated. Please use the web component version at https://design.va.gov/storybook/?path=/docs/components-va-radio--default';

module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
  },
  
  create(context) {
      return {
        JSXOpeningElement(node) {
            // Exit early if we aren't on a RadioButtons component
            if (elementType(node) !== 'RadioButtons') return;
                
            context.report({
              node,
              message: MESSAGE,
            });
          },
      };
    }
};