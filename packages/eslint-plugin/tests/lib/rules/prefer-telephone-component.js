'use strict';

const rule = require('../../../lib/rules/prefer-telephone-component');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  // sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('prefer-telephone-component', rule, {
  valid: [
    {
      code: `
        const phone = () => (<va-telephone contact={phoneContact} />)
      `,
    },
    {
      code: `
        const phone = () => (<va-telephone contact="711" tty />)
      `,
    },
  ],
  invalid: [
    {
      code: `
        const phone = () => (<a href="tel:8004569876">Link text</a>)
      `,
      errors: [
        {
          message:
            'The <va-telephone> Web Component should be used to display phone numbers.',
        },
      ],
      output: `
        const phone = () => (<va-telephone contact="8004569876"/>)
      `,
    },
  ],
});
