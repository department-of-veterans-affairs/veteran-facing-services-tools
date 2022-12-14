'use strict';

const rule = require('../../../lib/rules/use-new-utility-classes');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  // sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('prefer-new-utility-classes', rule, {
  valid: [
    {
      code: `
        const phone = () => (<a href="/foo/bar">Link text</a>)
      `,
    },
  ],
  invalid: [
    {
      code: `
        const phone = () => (<span className="vads-color--blue vads-u-background-color--gray-lightest vads-u-padding--2 vads-u-margin-top--2">Content</span>)
      `,
      errors: [
        {
          message: 'The new utility classes should be used instead. Use "vads-bg-color-gray-lightest" instead of "vads-u-background-color--gray-lightest"',
        },
      ],
      output: `
        const phone = () => (<span className="vads-color--blue vads-u-background-color--gray-lightest vads-u-padding--2 vads-u-margin-top--2">Content</span>)
      `,
    },
  ],
});
