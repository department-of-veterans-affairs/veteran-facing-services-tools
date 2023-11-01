'use strict';

const rule = require('../../../lib/rules/prefer-button-component');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  // sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('prefer-button-component', rule, {
  valid: [
    {
      code: `
        const button = () => (<va-button
          id="cancel"
          onClick={handlers.onCancel}
          text="Cancel"
        />)
      `,
    }
  ],
  invalid: [
    {
      code: `
        const button = () => (
          <button
          className="foo"
          id="bar"
          onClick={() => window.print()}
        >
          Print this page
        </button>
        )
      `,
      errors: [
        {
          message:
            'The <va-button> Web Component should be used to instead of the button HTML element.'
        },
      ],
    },
    {
      code: `
        const button = () => (<button
          onClick={() => window.print()}
        >
          {variable}
        </button>)
      `,
      errors: [
        {
          message:
            'The <va-button> Web Component should be used to instead of the button HTML element.'
        },
      ],
     },
     {
      code: `
        const button = () => (<button
          onClick={() => window.print()}
        >
         Some plain text next to a {variable}
        </button>)
      `,
      errors: [
        {
          message:
            'The <va-button> Web Component should be used to instead of the button HTML element.'
        },
      ]
     },
     {
      code: `
        const button = () => (<button
          onClick={() => window.print()}
        >
          <span>Button Text</span>
        </button>)
      `,
      errors: [
        {
          message:
          'The <va-button> Web Component should be used to instead of the button HTML element.'
        },
      ],
    },
  ],
});
