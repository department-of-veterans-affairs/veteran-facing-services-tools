'use strict';

const rule = require('../../../lib/rules/await-expect-assertion');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('await-expect-assertion', rule, {
  valid: [
    // Properly wrapped in waitFor
    {
      code: `
        it('should work', async () => {
          fireEvent.click(button);
          await waitFor(() => {
            expect(screen.getByText('Success')).to.exist;
          });
        });
      `,
    },
    // No async action before expect
    {
      code: `
        it('should work', async () => {
          expect(screen.getByText('Initial')).to.exist;
        });
      `,
    },
    // Non-async test (sync tests don't need waitFor)
    {
      code: `
        it('should work', () => {
          fireEvent.click(button);
          expect(result).to.equal(true);
        });
      `,
    },
    // Expect far away from action (more than 5 lines)
    {
      code: `
        it('should work', async () => {
          fireEvent.click(button);
          const a = 1;
          const b = 2;
          const c = 3;
          const d = 4;
          const e = 5;
          const f = 6;
          expect(result).to.exist;
        });
      `,
    },
  ],
  invalid: [
    // Expect immediately after fireEvent without waitFor
    {
      code: `
        it('should work', async () => {
          fireEvent.click(button);
          expect(screen.getByText('Success')).to.exist;
        });
      `,
      errors: [{ messageId: 'missingWaitFor' }],
    },
    // Expect after userEvent without waitFor
    {
      code: `
        it('should work', async () => {
          userEvent.type(input, 'hello');
          expect(input.value).to.equal('hello');
        });
      `,
      errors: [{ messageId: 'missingWaitFor' }],
    },
    // Multiple expects after action
    {
      code: `
        it('should work', async () => {
          fireEvent.submit(form);
          expect(screen.getByText('Submitted')).to.exist;
          expect(screen.getByText('Success')).to.exist;
        });
      `,
      errors: [
        { messageId: 'missingWaitFor' },
        { messageId: 'missingWaitFor' },
      ],
    },
  ],
});
