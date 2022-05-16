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
    recommended: {
      plugins: ['va'],
      rules: {
        'va/proptypes-camel-cased': 2,
        'va/enzyme-unmount': 2,
        'va/use-resolved-path': [
          2,
          {
            aliases: [
              'applications',
              'platform',
              'site',
              '@@vap-svc',
              '@@profile',
            ],
          },
        ],
        'va/axe-check-required': 1,
        'va/correct-apostrophe': 1,
        'va/cypress-viewport-deprecated': 1,
        'va/prefer-web-component-library': 1,
      },
    },
  },
};
