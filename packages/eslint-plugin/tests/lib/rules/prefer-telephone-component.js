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
    {
      code: `
        const phone = () => (<a href="/foo/bar">Link text</a>)
      `,
    },
    // The rule isn't fancy enough to evaluate variables, though ideally this would fail
    {
      code: `
        const telLink = "tel:8004569999";
        const phone = () => (<a href={telLink}>Link text</a>)
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
    {
      code: `
        const phone = () => (
          <a
            href="tel:8004569876"
            className="foo"
            id="bar"
          >
            Link text
          </a>
        )
      `,
      errors: [
        {
          message:
            'The <va-telephone> Web Component should be used to display phone numbers.',
        },
      ],
      output: `
        const phone = () => (
          <va-telephone
            contact="8004569876"
            className="foo"
            id="bar"
          />
        )
      `,
    },
    {
      code: `
        const phone = () => (<a href="tel:800-456-9876">Link text</a>)
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
    {
      code: `
        const phone = () => (
          <a
            href="tel:8004569876"
            aria-label="8 0 0. 4 5 6. 9 8 7 6."
          >
            Link text
          </a>
        )
      `,
      errors: [
        {
          message:
            'The <va-telephone> Web Component should be used to display phone numbers.',
        },
      ],
      output: `
        const phone = () => (
          <va-telephone
            contact="8004569876"
            
          />
        )
      `,
    },
  ],
});
