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
          className=""
          
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
      output: `
        const button = () => (
          <va-button
          className="foo" text="Print this page"
          id="bar"
          onClick={() => window.print()}
        ></va-button>
        )
      `,
      errors: [
        {
          message:
            'The <va-button> Web Component should be used instead of the button HTML element.'
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
      output: `
        const button = () => (<va-button text=""
          onClick={() => window.print()}
        ></va-button>)
      `,
      errors: [
        {
          message:
            'The <va-button> Web Component should be used instead of the button HTML element.'
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
      output: `
        const button = () => (<va-button text="Some plain text next to a"
          onClick={() => window.print()}
        ></va-button>)
      `,
      errors: [
        {
          message:
            'The <va-button> Web Component should be used instead of the button HTML element.'
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
      output: `
        const button = () => (<va-button text="Button Text"
          onClick={() => window.print()}
        ></va-button>)
      `,
      errors: [
        {
          message:
          'The <va-button> Web Component should be used instead of the button HTML element.'
        },
      ],
    },
    {
      code: `
        const button = () => (<button
          className="usa-button-secondary" onClick={() => window.print()}
        >
          <span>Button Text</span>
        </button>)
      `,
      output: `
        const button = () => (<va-button
          className="" variant="secondary" text="Button Text" onClick={() => window.print()}
        ></va-button>)
      `,
      errors: [
        {
          message:
          'The <va-button> Web Component should be used instead of the button HTML element.'
        },
      ],
    },
    {
      code: `
        const button = () => (
          <input type="button">Click me</input>
        )
      `,
      output: `
        const button = () => (
          <va-button text="Click me" ></va-button>
        )
      `,
      errors: [
        {
          message:
            'The <va-button> Web Component should be used instead of the button HTML element.'
        },
      ],
    },
    {
      code: `
        const button = () => (
          <input type="button" value="Click me" />
        )
      `,
      output: `
        const button = () => (
          <va-button text="Click me"  />
        )
      `,
      errors: [
        {
          message:
            'The <va-button> Web Component should be used instead of the button HTML element.'
        },
      ],
    },
  ],
});
