'use strict';

const rule = require('../../../lib/rules/deprecated-classes');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('deprecated-classes', rule, {
  valid: [
    {
      code: `<button onClick={verify} type="button" className="usa-button-primary">Verify your identity</button>`,
    },
  ],
  invalid: [
    {
      code: `<button onClick={verify} type="button" className="usa-button-primary va-button-primary">Verify your identity</button>`,
      errors: [
        'The va-button-primary utility class is deprecated. Please visit https://design.va.gov/components/button/ for our guidance on buttons.',
      ],
    },
  ],
});
