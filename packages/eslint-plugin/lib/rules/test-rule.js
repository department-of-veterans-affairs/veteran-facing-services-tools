const getPropNode = (node, propName) =>
  node.openingElement.attributes.find(n => n.name?.name === propName);

module.exports = {
  meta: {
    docs: {
      description: 'VA.gov Design System deprecated classes',
      category: 'Best Practices',
      recommended: false,
    },
    type: 'suggestion',
  },

  create(context) {
    return {
      JSXElement(node) {
        const className = getPropNode(node, 'className');
        if (
          className?.value?.value?.includes('test-class-value') ||
          className?.value?.expression?.value?.includes('test-class-value')
        ) {
          context.report({
            node,
            message: 'test...test...test..',
          });
        }
      },
    };
  },
};
