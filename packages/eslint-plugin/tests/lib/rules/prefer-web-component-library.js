'use strict';

const rule = require('../../../lib/rules/prefer-web-component-library');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

// Put the import at the top of the "file"
const mockFile = (componentName, snippet) => {
  return `import ${componentName} from '@department-of-veterans-affairs/component-library/${componentName}';
  ${snippet}
  `;
};

const mockFileBindingsImport = (componentName, snippet) => {
  return `import { ${componentName} } from '@department-of-veterans-affairs/component-library/dist/react-bindings';
  ${snippet}
  `;
};

const mockFileComponentLibraryNamedImport = (name, snippet) => {
  return `import { ${name} } from '@department-of-veterans-affairs/component-library';
  ${snippet}
  `;
};

ruleTester.run('prefer-web-component-library', rule, {
  // This rule should not trigger on application components, only React components
  // from the `component-library`
  valid: [
  ],
  invalid: [
    {
      code: mockFile(
        'Pagination',
        'const PaginationSample = () => (<Pagination onPageSelect={handlePageSelect} page="3" pages="50" />)',
      ),
      errors: [
        {
          suggestions: [
            {
              desc: 'Migrate component',
              output: mockFileBindingsImport(
                'VaPagination',
                'const PaginationSample = () => (<VaPagination onPageSelect={handlePageSelect} page="3" pages="50" />)',
              ),
            },
          ],
        },
      ],
    },
    {
      code: mockFile(
        'TextInput',
        'const Component = () => (<TextInput label="First name" name="first_name" field={field} required additionalClass="some-class" onValueChange={handler} />)',
      ),
      errors: [
        {
          suggestions: [
            {
              desc: 'Migrate component',
              output: mockFile(
                'TextInput',
                'const Component = () => (<va-text-input label="First name" name="first_name"  required class="some-class" onInput={handler} />)',
              ),
            },
          ],
        },
      ],
    },
  ],
});
