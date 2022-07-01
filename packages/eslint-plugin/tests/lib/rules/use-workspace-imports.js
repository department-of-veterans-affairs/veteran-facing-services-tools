'use strict';

const rule = require('../../../lib/rules/use-workspace-imports');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });
ruleTester.run('use-workspace-imports', rule, {
  valid: [
    {
      code: "import React from 'react'",
    },
    {
      code: "import module from '@department-of-veterans-affairs/platform-polyfills/preESModulesPolyfills'",
    },
  ],
  invalid: [
    {
      code: "import scrollToTop from 'platform/utilities/ui/scrollToTop'",
      errors: [
        'Importing from platform via platform/utilities is deprecated. Import from @department-of-veterans-affairs/platform-utilities instead.',
      ],
    },
    {
      code: "import recordEvent from 'platform/monitoring/record-event'",
      errors: [
        'Importing from platform via platform/monitoring is deprecated. Import from @department-of-veterans-affairs/platform-monitoring instead.',
      ],
    },
  ],
});
