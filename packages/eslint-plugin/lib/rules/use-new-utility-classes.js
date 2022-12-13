const MESSAGE = 'The new utility classes should be used instead.';

const oldToNew = {
  'vads-u-align-content': 'vads-align-content-',
  'vads-u-align-items': 'vads-align-items-',
  'vads-u-align-self': 'vads-align-self-',
  'vads-u-background-color': 'vads-bg-color-',
  'vads-u-border': 'vads-border-',
  'vads-u-border-top': 'vads-border-top-',
  'vads-u-border-bottom': 'vads-border-bottom-',
  'vads-u-border-right': 'vads-border-right-',
  'vads-u-border-left': 'vads-border-left-',
  'vads-u-border-style': 'vads-border-style-',
  'vads-u-border-color': 'vads-border-color-',
  'vads-u-color': 'vads-color-',
  'vads-u-display': 'vads-display-',
  'vads-u-flex': 'vads-flex-',
  'vads-u-flex-direction': 'vads-flex-direction-',
  'vads-u-flex-wrap': 'vads-flex-wrap-',
  'vads-u-font-family': 'vads-font-family-',
  'vads-u-font-size': 'vads-font-size-',
  'vads-u-font-style': 'vads-font-style-',
  'vads-u-font-weight': 'vads-font-weight-',
  'vads-u-height': 'vads-height-',
  'vads-u-justify-content': 'vads-justify-content-',
  'vads-u-line-height': 'vads-line-height-',
  'vads-u-margin': 'vads-margin-',
  'vads-u-margin-x': 'vads-margin-x-',
  'vads-u-margin-y': 'vads-margin-y-',
  'vads-u-margin-top': 'vads-margin-top-',
  'vads-u-margin-bottom': 'vads-margin-bottom-',
  'vads-u-margin-right': 'vads-margin-right-',
  'vads-u-margin-left': 'vads-margin-left-',
  'vads-u-max-height': 'vads-max-height-',
  'vads-u-max-width': 'vads-max-width-',
  'vads-u-measure': 'vads-measure-',
  'vads-u-min-height': 'vads-min-height-',
  'vads-u-min-width': 'vads-min-width-',
  'vads-u-order': 'vads-order-',
  'vads-u-padding': 'vads-padding-',
  'vads-u-padding-x': 'vads-padding-x-',
  'vads-u-padding-y': 'vads-padding-y-',
  'vads-u-padding-top': 'vads-padding-top-',
  'vads-u-padding-bottom': 'vads-padding-bottom-',
  'vads-u-padding-right': 'vads-padding-right-',
  'vads-u-padding-left': 'vads-padding-left-',
  'vads-u-position': 'vads-position-',
  'vads-u-text-align': 'vads-text-align-',
  'vads-u-text-decoration': 'vads-text-decoration-',
  'vads-u-visibility': 'vads-visibility-',
  'vads-u-width': 'vads-width-',
};

function getNewClass(errorClass) {
  const [oldClass, value] = errorClass.split('--');
  const newClass = `"${oldToNew[oldClass]}${value}"`;
  return newClass
}

function getErrorMessage(classes) {
  const classesArray = classes.split(" ");
  const firstErrorClass = classesArray.find(element => element.includes('vads-u'));
  const newClass = getNewClass(firstErrorClass);

  return newClass.includes('undefined') ? MESSAGE : `${MESSAGE} Try using ${newClass} instead of "${firstErrorClass}"`;
}

module.exports = {
  meta: {
    docs: {
      description: 'VA.gov Design System new classes',
      category: 'Best Practices',
    },
    type: 'suggestion',
  },

  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.name !== 'className') return;

        const classes = node.value.value;
        if (!classes.includes('vads-u')) return;

        const finalMessage = getErrorMessage(classes);
        
        context.report({
          node,
          message: finalMessage,
        });
        
      },
    };
  },
};
