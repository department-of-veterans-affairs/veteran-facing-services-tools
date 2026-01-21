const jsxAstUtils = require('jsx-ast-utils');

const { elementType, getProp, getLiteralPropValue } = jsxAstUtils;

const MESSAGE = 'The new utility classes should be used instead.';

const oldToNew = {
  'vads-u-background-color': 'vads-bg-color-',
  'vads-u-color': 'vads-',
};

module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
  },

  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.name !== 'className') return;

        const classes = node.value.value;
        console.log(classes);

        if (!classes.includes('vads-u')) return;

        const [oldClass, value] = classes.split('--');
        console.log(value);

        const mapping = Object.entries(oldToNew).find(
          ([oldPrefix, newPrefix]) => oldPrefix === oldClass,
        );
        console.log(mapping);

        const newClass = `"${mapping[1]}${value}"`;

        context.report({
          node,
          message: MESSAGE,
          fix: fixer => {
            return [fixer.replaceText(node.value, newClass)].filter(i => !!i);
          },
        });
      },
    };
  },
};
