module.exports = {
  sections: [
    {
      id: 'getting-started',
      name: 'Getting started',
      href: 'getting-started',
      items: [
        {
          name: 'Environment setup',
          items: [
            {
              name: 'Set up VA.gov locally',
              href: 'getting-started',
            },
            {
              name: 'Internal Tools',
              href: 'getting-started/internal-tools',
            },
          ],
        },
        {
          name: 'Common tasks',
          items: [
            {
              name: 'Running VA.gov locally',
              href: 'getting-started/common-tasks/local',
            },
            {
              name: 'Building VA.gov',
              href: 'getting-started/common-tasks/build',
            },
            {
              name: 'Running tests',
              href: 'getting-started/common-tasks/tests',
            },
            {
              name: 'Linting your code',
              href: 'getting-started/common-tasks/lint',
            },
            {
              name: 'Creating a new React application',
              href: 'getting-started/common-tasks/new-app',
            },
            {
              name: 'Writing a unit test',
              // href: 'getting-started/common-tasks/write-unit-test'
            },
            {
              name: 'Writing an end-to-end test',
              // href: 'getting-started/common-tasks/write-e2e-test'
            },
            {
              name: 'Updating Formation',
              // href: 'getting-started/common-tasks/update-formation'
            },
            {
              name: 'Adding new pages to this site',
              href: 'getting-started/common-tasks/doc-page',
            },
            {
              name: 'Adding pages from Github to this site',
              href: 'getting-started/common-tasks/external-doc-page',
            },
          ],
        },
        {
          name: 'Bundes and Code organization',
          href: 'getting-started/bundles-and-code-organization',
        },
        {
          name: 'Standards and conventions',
          items: [],
        },
        {
          name: 'Development workflow',
          items: [],
        },
      ],
    },
    {
      id: 'architecture',
      name: 'Architecture',
      href: 'architecture',
      items: [
        {
          name: 'Site structure',
          items: [],
        },
        {
          name: 'How does the build work?',
        },
        {
          name: 'How do unit tests work?',
        },
        {
          name: 'How do end-to-end tests work?',
        },
        {
          name: 'Visual regression testing',
        },
        {
          name: 'Teamsite',
        },
      ],
    },
    {
      id: 'forms',
      name: 'Forms',
      href: 'forms',
      items: [
        {
          name: 'Introduction',
          href: 'forms/when-to-use-fs',
        },
        {
          name: 'Tutorial',
          items: [
            {
              name: 'Form Tutorial - Basic',
              href: 'forms/form-tutorial-basic',
            },
            {
              name: 'Form Tutorial - Intermediate',
              href: 'forms/form-tutorial-intermediate',
            },
            {
              name: 'Form Tutorial - Advanced',
              href: 'forms/form-tutorial-advanced',
            },
            {
              name: 'Setting up Save in Progress',
              href: 'forms/save-in-progress',
            },
            {
              name: 'Forms in Production',
              href: 'forms/forms-in-production',
            },
          ],
        },
        {
          name: 'Architecture',
          items: [],
        },
        {
          name: 'Common tasks',
          items: [],
        },
      ],
    },
    {
      id: 'platform',
      name: 'Platform',
      href: 'platform',
      items: [
        {
          name: 'Formation',
          items: [],
        },
        {
          name: 'Formation components',
          query: 'componentList',
        },
        {
          name: 'Feature flags',
        },
        {
          name: 'Identity',
          items: [],
        },
        {
          name: 'Static content',
          items: [],
        },
        {
          name: 'Monitoring',
          items: [],
        },
      ],
    },
  ],
};
