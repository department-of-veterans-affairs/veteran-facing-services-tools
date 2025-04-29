'use strict';

const rule = require('../../../lib/rules/keep-react-modal');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('keep-react-modal', rule, {
  valid: [
    {
      code: `
        const modal = () => (<va-modal
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
        const modal = () => (
          <Modal
          cssClass="foo"
          id="bar"
          title="Title"
          onClose={() => this.toggleModal}
        >
          <p>Modal content</p>
        </Modal>
        )
      `,
      errors: [
        {
          message:
            'DO NOT MIGRATE this React Modal to the web component version.'
        },
      ],
    }
  ],
});
