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
    {
      code: `
        import Breadcrumbs from '../../components/Breadcrumbs';
        const breadcrumbs = () => (<Breadcrumbs><a href="#home">Home</a></Breadcrumbs>)
      `,
    },
  ],
  invalid: [
    {
      code: mockFile(
        'Breadcrumbs',
        'const breadcrumb = () => (<Breadcrumbs><a href="/">Home</a></Breadcrumbs>)',
      ),
      errors: [
        {
          suggestions: [
            {
              desc: 'Migrate component',
              output: mockFile(
                'Breadcrumbs',
                'const breadcrumb = () => (<va-breadcrumbs><a href="/">Home</a></va-breadcrumbs>)',
              ),
            },
          ],
        },
      ],
    },
    {
      code: mockFile(
        'Breadcrumbs',
        'const breadcrumb = () => (<Breadcrumbs selectedFacility={selectedResult}><a href="/">Home</a></Breadcrumbs>)',
      ),
      errors: [
        {
          suggestions: [
            {
              desc: 'Migrate component',
              // There is an extra space which would get removed on an autosave format
              output: mockFile(
                'Breadcrumbs',
                'const breadcrumb = () => (<va-breadcrumbs ><a href="/">Home</a></va-breadcrumbs>)',
              ),
            },
          ],
        },
      ],
    },
    {
      code: mockFile(
        'Modal',
        'const SampleModal = () => (<Modal title="test" contents={<div>Hi</div>} onClose={closeModal} />)',
      ),
      errors: [
        {
          suggestions: [
            {
              desc: 'Migrate component',
              output: mockFile(
                'Modal',
                'const SampleModal = () => (<VaModal modalTitle="test"  onCloseEvent={closeModal} ><div>Hi</div></VaModal>)',
              ),
            },
          ],
        },
      ],
    },
    {
      code: mockFile(
        'Modal',
        'const SampleModal = () => (<Modal title="test" contents={someJSX} onClose={closeModal} cssClass="va-modal-large" />)',
      ),
      errors: [
        {
          suggestions: [
            {
              desc: 'Migrate component',
              output: mockFile(
                'Modal',
                'const SampleModal = () => (<VaModal modalTitle="test"  onCloseEvent={closeModal} className="va-modal-large" >{someJSX}</VaModal>)',
              ),
            },
          ],
        },
      ],
    },
    {
      code: mockFile(
        'Modal',
        'const SampleModal = () => (<Modal title="test" onClose={closeModal}>HELLO</Modal>)',
      ),
      errors: [
        {
          suggestions: [
            {
              desc: 'Migrate component',
              output: mockFile(
                'Modal',
                'const SampleModal = () => (<VaModal modalTitle="test" onCloseEvent={closeModal}>HELLO</VaModal>)',
              ),
            },
          ],
        },
      ],
    },
    {
      code: mockFile(
        'Modal',
        'const SampleModal = () => (<Modal title="test" onClose={closeModal} primaryButton={primaryButton} secondaryButton={secondaryButton} hideCloseButton>HELLO</Modal>)',
      ),
      errors: [
        {
          suggestions: [
            {
              desc: 'Migrate component',
              output: mockFile(
                'Modal',
                'const SampleModal = () => (<VaModal modalTitle="test" onCloseEvent={closeModal} primaryButton={primaryButton} secondaryButton={secondaryButton} >HELLO</VaModal>)',
              ),
            },
          ],
        },
      ],
    },
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
