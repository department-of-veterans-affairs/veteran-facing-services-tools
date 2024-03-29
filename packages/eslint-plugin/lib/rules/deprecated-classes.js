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
        /**
         * Deprecate green button
         */
        const className = getPropNode(node, 'className');
        if (
          className?.value?.value?.includes('va-button-primary') ||
          className?.value?.expression?.value?.includes('va-button-primary')
        ) {
          context.report({
            node,
            message:
              'The va-button-primary utility class is deprecated. Please visit https://design.va.gov/components/button/ for our guidance on buttons.',
          });
        }
      },
    };
  },
};
