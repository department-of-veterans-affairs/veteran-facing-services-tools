module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {}, // need to add this
      'babel-module': {},
    },
  },
  plugins: [
    'cypress',
    'deprecate',
    'fp',
    'mocha',
    'react-hooks',
    'sonarjs',
    'unicorn',
    '@department-of-veterans-affairs',
  ],
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    commonjs: true,
    'cypress/globals': true,
    es2020: true,
    mocha: true,
  },
  rules: {
    /* || ESLint main rules || */
    camelcase: [2, { properties: 'always' }], // Override airbnb style.
    'no-unused-vars': [
      2,
      { args: 'after-used', argsIgnorePattern: '^_', vars: 'local' },
    ],
    'no-console': 2,
    'no-restricted-imports': ['error', 'raven', 'lodash/fp'],
    'prefer-rest-params': 2,
    'max-classes-per-file': 1,
    'prefer-promise-reject-errors': 1,
    'no-restricted-globals': 1,
    'no-else-return': 1,
    'prefer-object-spread': 1,
    'lines-between-class-members': 1,
    'prefer-destructuring': 1,
    'no-plusplus': 1,
    'no-undef-init': 1,
    'class-methods-use-this': 1,
    'global-require': 0,
    'no-negated-condition': 0,
    'no-underscore-dangle': 0,

    /* || fp plugin || */
    'fp/no-proxy': 2, // IE 11 has no polyfill for Proxy

    /* || mocha plugin || */
    'mocha/no-exclusive-tests': 2,

    /* || react-hooks plugin || */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    /* || react plugin || */
    'react/prefer-stateless-function': 2,
    'react/jsx-key': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-target-blank': 2,
    'react/no-danger': 2,
    'react/no-deprecated': 2,
    'react/no-direct-mutation-state': 2,
    'react/sort-prop-types': [1, { callbacksLast: true, requiredFirst: true }],
    'react/jsx-no-bind': [0, { ignoreRefs: true }],
    'react/jsx-fragments': 1,
    'react/jsx-closing-tag-location': 1,
    'react/state-in-constructor': 1,
    'react/no-unused-state': 1,
    'react/sort-comp': 1,
    'react/default-props-match-prop-types': 1,
    'react/static-property-placement': 1,
    'react/jsx-wrap-multilines': 1,
    'react/jsx-curly-brace-presence': 1,
    'react/no-access-state-in-setstate': 1,
    'react/no-string-refs': 1,
    'react/button-has-type': 1,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 1,
    'react/jsx-sort-props': [0, { callbacksLast: true, shorthandFirst: true }],
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/no-array-index-key': 0,
    'react/no-unescaped-entities': 0,
    'react/no-unused-prop-types': 0,
    'react/require-default-props': 0,
    'react/no-multi-comp': 0, // Leave organization to code reviewer discretion.

    /* || sonarJS plugin || */
    'sonarjs/no-all-duplicated-branches': 2,
    'sonarjs/no-element-overwrite': 2,
    'sonarjs/no-identical-conditions': 2,
    'sonarjs/no-one-iteration-loop': 2,
    'sonarjs/no-use-of-empty-return-value': 2,
    'sonarjs/no-collection-size-mischeck': 2,
    'sonarjs/no-redundant-jump': 2,
    'sonarjs/no-same-line-conditional': 2,
    'sonarjs/no-useless-catch': 2,
    'sonarjs/prefer-object-literal': 2,
    'sonarjs/prefer-single-boolean-return': 1,
    'sonarjs/prefer-while': 2,
    'sonarjs/no-extra-arguments': 2,
    'sonarjs/no-identical-expressions': 2,
    'sonarjs/max-switch-cases': [2, 40],
    'sonarjs/no-duplicated-branches': 2,
    'sonarjs/no-inverted-boolean-check': 2,
    'sonarjs/no-redundant-boolean': 2,
    'sonarjs/no-unused-collection': 2,
    'sonarjs/no-small-switch': 2,
    'sonarjs/cognitive-complexity': [1, 50],
    'sonarjs/no-collapsible-if': 2,
    'sonarjs/prefer-immediate-return': 2,

    /* || airbnb plugin || */
    // this is the airbnb default, minus for..of
    'no-restricted-syntax': [
      2,
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    /* || Unicorn plugin || */
    'unicorn/no-abusive-eslint-disable': 2,

    'jsx-a11y/control-has-associated-label': 1,
    'jsx-a11y/click-events-have-key-events': 2,
    'jsx-a11y/anchor-is-valid': 2,
    'jsx-a11y/label-has-associated-control': 1,
    'jsx-a11y/no-static-element-interactions': 2,

    /* || import plugin || */
    'import/named': 1,
    'import/no-useless-path-segments': 1,
    'import/no-cycle': 1,
    'import/order': 1,
    'import/no-extraneous-dependencies': 0, // let's circle back to this one
    'import/extensions': 1,
    'import/first': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,

    /* || va custom plugin || */
    '@department-of-veterans-affairs/proptypes-camel-cased': 2,
    '@department-of-veterans-affairs/enzyme-unmount': 2,
    '@department-of-veterans-affairs/use-resolved-path': [
      2,
      {
        aliases: ['applications', 'platform', 'site', '@@vap-svc', '@@profile'],
      },
    ],
    '@department-of-veterans-affairs/axe-check-required': 1,
    '@department-of-veterans-affairs/correct-apostrophe': 1,
    '@department-of-veterans-affairs/cypress-viewport-deprecated': 1,
    '@department-of-veterans-affairs/prefer-web-component-library': 1,
    '@department-of-veterans-affairs/design-system': 1,
  },
};
