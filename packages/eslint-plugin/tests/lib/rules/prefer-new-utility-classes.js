'use strict';

const rule = require('../../../lib/rules/prefer-new-utility-classes');
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
        const phone = () => (<span className="vads-u-color--white">Content</span>)
      `,
      errors: [
        {
          message: 'The new utility classes should be used instead.',
        },
      ],
      output: `
        const phone = () => (<span className="vads-white">Content</span>)
      `,
    },
  ],
});
