'use strict';

const rule = require('../../../lib/rules/prefer-table-component');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  // sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('prefer-table-component', rule, {
  valid: [
    {
      code: `
        const table = () => (<va-table
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
        const table = () => (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nov 9</td>
                <td>Kelly</td>
              </tr>
              <tr>
                <td>Dec 19</td>
                <td>Franklin</td>
              </tr>
            </tbody>
          </table>
        )
      `,
      errors: [
        {
          message:
            'The <va-table> Web Component should be used to instead of the table HTML element.'
        },
      ],
    },
    {
      code: `
        const table = () => (
          <table></table>
        )
      `,
      errors: [
        {
          message:
            'The <va-table> Web Component should be used to instead of the table HTML element.'
        },
      ],
    }
  ],
});
