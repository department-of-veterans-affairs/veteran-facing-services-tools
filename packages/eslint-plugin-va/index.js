module.exports = {
  rules: {
    'proptypes-camel-cased': require('./rules/proptypes-camel-cased'),
    'enzyme-unmount': require('./rules/enzyme-unmount.js'),
    'use-resolved-path': require('./rules/use-resolved-path.js'),
    'resolved-path-on-required': require('./rules/resolved-path-on-required.js'),
    'axe-check-required': require('./rules/axe-e2e-tests.js'),
    'correct-apostrophe': require('./rules/correct-apostrophe'),
    'cypress-viewport-deprecated': require('./rules/cypress-viewport-deprecated.js'),
    'prefer-web-component-library': require('./rules/prefer-web-component-library'),
  },
  configs: {
    recommended: require('./configs/recommended'),
  },
};
