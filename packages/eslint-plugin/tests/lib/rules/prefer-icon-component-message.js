'use strict';

const rule = require('../../../lib/rules/prefer-icon-component-message');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  // sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('prefer-icon-component-message', rule, {
  valid: [
    {
      code: `
      const icon = () => (<va-icon size={4} icon="see name mappings here https://design.va.gov/foundation/icons" srtext="phone" />)
      `,
    },
    {
      code: `
        const icon = () => (<va-icon size={4} icon="star" />)
      `,
    },
    {
      code: `
        const icon = () => (<va-icon size={4} icon="star" className="vads-u-margin-right--1" />)
      `,
    },
  ],
  invalid: [
    {
      code: `
        const icon = () => (<i aria-label="phone" className="fas fa-phone vads-u-color--link-default vads-u-margin-right--1" aria-hidden="true" />)
      `,
      errors: [
        {
          message:
            'The <va-icon> Web Component should be used instead of Font Awesome. See: https://design.va.gov/about/developers/using-web-components#how-to-migrate-from-font-awesome-to-va-icon',
        },
      ],
    },
    {
      code: `
        const icon = () => (<i aria-label="phone" role="img" className="fas fa-phone" aria-hidden="true" />)
      `,
      errors: [
        {
          message:
            'The <va-icon> Web Component should be used instead of Font Awesome. See: https://design.va.gov/about/developers/using-web-components#how-to-migrate-from-font-awesome-to-va-icon',
        },
      ],
    },
    {
      code: `
        const icon = () => (<i aria-label="phone" alt="alt stuff" className="fas fa-phone" />)
      `,
      errors: [
        {
          message:
            'The <va-icon> Web Component should be used instead of Font Awesome. See: https://design.va.gov/about/developers/using-web-components#how-to-migrate-from-font-awesome-to-va-icon',
        },
      ],
    },
  ],
});
