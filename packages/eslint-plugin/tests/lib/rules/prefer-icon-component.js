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
      const phone = () => (<va-icon size={4} icon="phone" srtext="phone" />)
      `,
    },
    {
      code: `
        const star = () => (<va-icon size={4} icon="star" />)
      `,
    },
    {
      code: `
        const star = () => (<va-icon size={4} icon="star" className="vads-u-margin-right--1" />)
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
            'The <va-icon> Web Component should be used instead of Font Awesome. See: https://design.va.gov/about/developers/using-web-components#how-to-migrate-from-font-awesome-to-va-icon',
        },
      ],
      output: `
        const phone = () => (<va-icon size={4} icon="phone" srtext="phone" className="vads-u-margin-right--1" aria-hidden="true" />)
      `,
    },
    {
      code: `
        const phone = () => (<i aria-label="phone" role="img" className="fas fa-phone" aria-hidden="true" />)
      `,
      errors: [
        {
          message:
            'The <va-icon> Web Component should be used instead of Font Awesome. See: https://design.va.gov/about/developers/using-web-components#how-to-migrate-from-font-awesome-to-va-icon',
        },
      ],
      output: `
        const phone = () => (<va-icon size={4} icon="phone" srtext="phone"   aria-hidden="true" />)
      `,
    },
    {
      code: `
        const phone = () => (<i aria-label="phone" alt="alt stuff" className="fas fa-phone" />)
      `,
      errors: [
        {
          message:
            'The <va-icon> Web Component should be used instead of Font Awesome. See: https://design.va.gov/about/developers/using-web-components#how-to-migrate-from-font-awesome-to-va-icon',
        },
      ],
      output: `
        const phone = () => (<va-icon size={4} icon="phone" srtext="phone"   />)
      `,
    },
    {
      code: `
        const building = () => (<i aria-label="building" alt="alt stuff" className="fas fa-building" />)
      `,
      errors: [
        {
          message:
            'The <va-icon> Web Component should be used instead of Font Awesome. See: https://design.va.gov/about/developers/using-web-components#how-to-migrate-from-font-awesome-to-va-icon',
        },
      ],
      output: `
        const building = () => (<va-icon size={4} icon="location_city" srtext="building"   />)
      `,
    },
    {
      code: `
        const video = () => (<i aria-label="video" className="fas fa-video" aria-hidden="true" />)
      `,
      errors: [
        {
          message:
            'The <va-icon> Web Component should be used instead of Font Awesome. See: https://design.va.gov/about/developers/using-web-components#how-to-migrate-from-font-awesome-to-va-icon',
        },
      ],
      output: `
        const video = () => (<va-icon size={4} icon="videocam" srtext="video"  aria-hidden="true" />)
      `,
    },
  ],
});