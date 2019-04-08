module.exports = {
  sections: [
    {
      id: 'getting-started',
      name: 'Getting started',
      href: 'getting-started',
      items: [
        {
          name: 'Start up guide',
          items: [
            {
              name: 'Set up VA.gov locally',
              href: 'getting-started',
            },
            {
              name: 'Accessing internal tools',
              href: 'getting-started/internal-tools',
            },
            {
              name: 'VA.gov environments',
              href: 'getting-started/environments',
            },
            {
              name: 'Development workflow',
              href: 'getting-started/workflow',
            },
            {
              name: 'Bundes and Code organization',
              href: 'getting-started/bundles-and-code-organization',
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
            {
              name: 'Add Graphs to MDX',
              href: 'getting-started/common-tasks/add-graphs-to-mdx',
            },
            {
              name: 'Creating A Gatsby Plugin',
              href: 'getting-started/common-tasks/creating-gatsby-plugins',
            },
          ],
        },
        {
          name: 'Standards and conventions',
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
          href: 'architecture/visual-regression-testing',
        },
        {
          name: 'Teamsite',
          href: 'architecture/teamsite',
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
