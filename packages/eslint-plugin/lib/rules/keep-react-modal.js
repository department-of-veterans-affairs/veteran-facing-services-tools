const jsxAstUtils = require('jsx-ast-utils');
const { elementType } = jsxAstUtils;

// this will only show in /platform/forms/save-in-progress and platform/user/authentication
const MESSAGE =
  'DO NOT MIGRATE this React Modal to the web component version.';


module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
  },
  
  create(context) {
      return {
        JSXOpeningElement(node) {
            // Exit early if we aren't on an Modal component
            if (elementType(node) !== 'Modal') return;
                
            context.report({
              node,
              message: MESSAGE,
            });
          },
      };
    }
};