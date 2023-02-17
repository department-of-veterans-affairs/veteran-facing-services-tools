const jsxAstUtils = require('jsx-ast-utils');
const { elementType } = jsxAstUtils;

const MESSAGE = 'The ExpandingGroup React component is deprecated. Please replace with a custom solution. Also note that the wizard pattern deprecated as well. See "Retrofit this pattern" for additional guidance if needed: https://design.va.gov/patterns/wizards#retrofit-this-pattern';

module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
  },
  
  create(context) {
      return {
        JSXOpeningElement(node) {
            // Exit early if we aren't on an ExpandingGroup component
            if (elementType(node) !== 'ExpandingGroup') return;
                
            context.report({
              node,
              message: MESSAGE,
            });
          },
      };
    }
};