'use strict';

const rule = require('../../../lib/rules/telephone-contact-3-or-10-digits');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('telephone-contact-3-or-10-digits', rule, {
  valid: [
    {
      code: `
        const phoneContact = "1234567890";
        const phone = () => (<va-telephone contact={phoneContact} />)
      `,
    },
    {
      code: `
        const phone = () => (<va-telephone contact="911" />)
      `,
    },
    {
      code: `
        const phone = () => (<va-telephone contact="1234567890" />)
      `,
    },
    // The rule isn't fancy enough to evaluate variables, though ideally this would fail
    {
      code: `
        const partialContact = "12345";
        const phone = () => (<va-telephone contact={partialContact} />)
      `,
    },
  ],
  invalid: [
    {
      code: `
        const phone = () => (<va-telephone contact="1" />)
      `,
      errors: [
        {
          message:
            'The <va-telephone> contact prop should only contain digits and be 3 or 10 digits long.',
        },
      ],
    },
    {
      code: `
        const phone = () => (<va-telephone contact="123-456-7890" />)
      `,
      errors: [
        {
          message:
            'The <va-telephone> contact prop should only contain digits and be 3 or 10 digits long.',
        },
      ],
    },
    {
      code: `
        const phone = () => (<va-telephone contact="0011234567890" />)
      `,
      errors: [
        {
          message:
            'The <va-telephone> contact prop should only contain digits and be 3 or 10 digits long.',
        },
      ],
    },
  ],
});
