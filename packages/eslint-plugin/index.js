module.exports = {
  rules: {
    'proptypes-camel-cased': require('./lib/rules/proptypes-camel-cased'),
    'enzyme-unmount': require('./lib/rules/enzyme-unmount.js'),
    'use-resolved-path': require('./lib/rules/use-resolved-path.js'),
    'resolved-path-on-required': require('./lib/rules/resolved-path-on-required.js'),
    'no-cross-app-imports': require('./lib/rules/no-cross-app-imports'),
    'axe-check-required': require('./lib/rules/axe-e2e-tests.js'),
    'correct-apostrophe': require('./lib/rules/correct-apostrophe'),
    'cypress-viewport-deprecated': require('./lib/rules/cypress-viewport-deprecated.js'),
    'prefer-web-component-library': require('./lib/rules/prefer-web-component-library'),
    'prefer-telephone-component': require('./lib/rules/prefer-telephone-component'),
    'deprecated-classes': require('./lib/rules/deprecated-classes'),
  },
  configs: {
    recommended: require('./lib/config/recommended'),
  },
};
