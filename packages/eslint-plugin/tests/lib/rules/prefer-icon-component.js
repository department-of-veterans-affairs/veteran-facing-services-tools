'use strict';

const rule = require('../../../lib/rules/prefer-icon-component');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  // sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('prefer-icon-component', rule, {
  valid: [
    {
      code: `
      const phone = () => (<va-icon size={4} icon="see Storybook for icon names: https://design.va.gov/storybook/?path=/docs/uswds-va-icon--default" srtext="phone" />)
      `,
    },
    {
      code: `
        const phone = () => (<va-icon size={4} icon="star" />)
      `,
    },
    {
      code: `
        const phone = () => (<va-icon size={4} icon="star" className="vads-u-margin-right--1" />)
      `,
    },
  ],
  invalid: [
    {
      code: `
        const phone = () => (<i aria-label="phone" className="fas fa-phone vads-u-color--link-default vads-u-margin-right--1" aria-hidden="true" />)
      `,
      errors: [
        {
          message:
            'The <va-icon> Web Component should be used instead of Font Awesome. See: https://design.va.gov/storybook/?path=/docs/uswds-va-icon--default',
        },
      ],
      output: `
        const phone = () => (<va-icon size={4} icon="see Storybook for icon names: https://design.va.gov/storybook/?path=/docs/uswds-va-icon--default\" srtext="phone" className="vads-u-margin-right--1" aria-hidden="true" />)
      `,
    },
    {
      code: `
        const phone = () => (<i aria-label="phone" role="img" className="fas fa-phone" aria-hidden="true" />)
      `,
      errors: [
        {
          message:
            'The <va-icon> Web Component should be used instead of Font Awesome. See: https://design.va.gov/storybook/?path=/docs/uswds-va-icon--default',
        },
      ],
      output: `
        const phone = () => (<va-icon size={4} icon="see Storybook for icon names: https://design.va.gov/storybook/?path=/docs/uswds-va-icon--default" srtext="phone"   aria-hidden="true" />)
      `,
    },
    {
      code: `
        const phone = () => (<i aria-label="phone" alt="alt stuff" className="fas fa-phone" />)
      `,
      errors: [
        {
          message:
            'The <va-icon> Web Component should be used instead of Font Awesome. See: https://design.va.gov/storybook/?path=/docs/uswds-va-icon--default',
        },
      ],
      output: `
        const phone = () => (<va-icon size={4} icon="see Storybook for icon names: https://design.va.gov/storybook/?path=/docs/uswds-va-icon--default" srtext="phone"   />)
      `,
    },
  ],
});
