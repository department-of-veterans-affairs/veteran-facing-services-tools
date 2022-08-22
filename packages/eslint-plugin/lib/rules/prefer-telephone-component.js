// const { elementType, getProp, getPropValue } from 'jsx-ast-utils';
const jsxAstUtils = require('jsx-ast-utils');

const { elementType, getProp, getPropValue } = jsxAstUtils;

const MESSAGE =
  'The <va-telephone> Web Component should be used to display phone numbers.';

module.exports = {
  meta: {
    docs: {
      description:
        'Web Components are preferred over deprecated React component library components',
      category: 'Best Practices',
      recommended: false,
    },
    type: 'suggestion',
    fixable: 'code',
  },

  create(context) {
    return {
      JSXOpeningElement(node) {
        // Exit early if we aren't on an anchor link
        if (elementType(node) !== 'a') return;

        const hrefProp = getProp(node.attributes, 'href');
        const hrefValue = getPropValue(hrefProp);

        if (hrefValue.startsWith('tel:')) {
          const contact = hrefValue.substring('tel:'.length);
          console.log('CONTACT', contact);

          context.report({
            node,
            message: MESSAGE,
            fix: fixer => {
              // Replace the node name
              // and remove the `pattern` prop if it's there
              return [
                fixer.replaceText(node.name, 'va-telephone'),
                fixer.replaceText(hrefProp.name, 'contact'),
              ].filter(i => !!i);
            },
          });
        }
      },
    };
  },
};
