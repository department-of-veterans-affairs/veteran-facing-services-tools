'use strict';

const rule = require('../../../lib/rules/no-response-property-assignment');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2020,
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('no-response-property-assignment', rule, {
  valid: [
    // Using Object.defineProperty (correct pattern)
    {
      code: `
        const response = new Response(body);
        Object.defineProperty(response, 'ok', { value: true });
      `,
    },
    // Using constructor options
    {
      code: `
        const response = new Response(body, { status: 200 });
      `,
    },
    // Assignment to non-Response object
    {
      code: `
        const data = {};
        data.ok = true;
      `,
    },
    // Assignment to non-restricted property
    {
      code: `
        const response = new Response();
        response.customProperty = 'value';
      `,
    },
  ],
  invalid: [
    // Direct assignment to response.ok
    {
      code: `
        const response = new Response(body);
        response.ok = true;
      `,
      errors: [{ messageId: 'readOnlyProperty', data: { property: 'ok' } }],
    },
    // Direct assignment to response.url
    {
      code: `
        const response = new Response(body);
        response.url = 'https://example.com';
      `,
      errors: [{ messageId: 'readOnlyProperty', data: { property: 'url' } }],
    },
    // Assignment to mockResponse
    {
      code: `
        const mockResponse = new Response();
        mockResponse.status = 200;
      `,
      errors: [{ messageId: 'readOnlyProperty', data: { property: 'status' } }],
    },
    // Assignment to fetchResponse (removed await to avoid parser issues)
    {
      code: `
        const fetchResponse = getResponse();
        fetchResponse.ok = false;
      `,
      errors: [{ messageId: 'readOnlyProperty', data: { property: 'ok' } }],
    },
  ],
});
