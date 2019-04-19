module.exports = {
  sections: [
    {
      id: 'getting-started',
      name: 'Getting started',
      href: '/getting-started',
      items: [
        {
          name: 'Start up guide',
          items: [
            {
              name: '1. Set up VA.gov locally',
              href: '/getting-started',
            },
            {
              name: '2. Access internal tools',
              href: '/getting-started/internal-tools',
            },
          ],
        },
        {
          name: 'VA.gov workflow',
          items: [
            {
              name: 'Overview',
              href: '/getting-started/workflow/overview',
            },
            {
              name: 'Write',
              href: '/getting-started/workflow/write',
            },
            {
              name: 'Review',
              href: '/getting-started/workflow/review',
            },
            {
              name: 'Deploy',
              href: '/getting-started/workflow/deploy',
            },
          ],
        },
        {
          name: 'Common tasks',
          items: [
            {
              name: 'Run and Build VA.gov',
              href: '/getting-started/common-tasks/run-build',
            },
            {
              name: 'Run tests',
              href: '/getting-started/common-tasks/test',
            },
            {
              name: 'Creating a new React application',
            },
            {
              name: 'Writing a unit test',
              // href: '/getting-started/common-tasks/write-unit-test'
            },
            {
              name: 'Writing an end-to-end test',
              // href: '/getting-started/common-tasks/write-e2e-test'
            },
            {
              name: 'Updating Formation',
              // href: '/getting-started/common-tasks/update-formation'
            },
          ],
        },
      ],
    },
    {
      id: 'architecture',
      name: 'Architecture',
      href: '/architecture',
      items: [
        {
          name: 'Metalsmith',
          items: [
            {
              name: 'How are URLs created',
              href: '/architecture/metalsmith/urls',
            },
            {
              name: 'How templates work',
              href: '/architecture/metalsmith/templates',
            },
            {
              name: 'How to create collections and related links',
              href: '/architecture/metalsmith/collections',
            },
          ],
        },
        {
          name: 'Site structure',
          items: [
            {
              name: 'Client overview',
              href: '/architecture/site-structure/client-overview',
            },
            {
              name: 'VA.gov environments',
              href: 'architecture/site-structure/environments',
            },
            {
              name: 'Bundles and Code organization',
              href: 'architecture/site-structure/bundles-and-code-organization',
            },
            {
              name: 'Styling',
              href: '/architecture/site-structure/styling-overview',
            },
          ],
        },
        {
          name: 'Front End Standards',
          items: [
            {
              name: 'React standards',
              href: '/architecture/front-end-standards/react',
            },
            {
              name: 'Redux standards',
              href: '/architecture/front-end-standards/redux',
            },
            {
              name: 'Styles',
              href: '/architecture/front-end-standards/styles',
            },
            {
              name: 'Accessibility',
              href: '/architecture/front-end-standards/accessibility',
            },
            {
              name: 'Documented Decisions',
              href:
                'architecture/front-end-standards/documented-decisions/summary',
            },
          ],
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
          href: '/architecture/visual-regression-testing',
        },
        {
          name: 'Teamsite',
          href: '/architecture/teamsite',
        },
      ],
    },
    {
      id: 'forms',
      name: 'Forms',
      href: '/forms',
      items: [
        {
          name: 'Tutorial',
          items: [
            {
              name: 'Form Tutorial - Basic',
              href: '/forms/form-tutorial-basic',
            },
            {
              name: 'Form Tutorial - Intermediate',
              href: '/forms/form-tutorial-intermediate',
            },
            {
              name: 'Form Tutorial - Advanced',
              href: '/forms/form-tutorial-advanced',
            },
            {
              name: 'Setting up Save in Progress',
              href: '/forms/save-in-progress',
            },
            {
              name: 'Forms in Production',
              href: '/forms/forms-in-production',
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
      href: '/platform',
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
          href: '/platform/feature-flags',
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
    {
      id: 'documentation',
      name: 'Documentation guide',
      href: '/documentation-guide',
      items: [
        {
          name: 'Adding new pages to this site',
          href: '/documentation-guide/doc-page',
        },
        {
          name: 'Adding pages from Github to this site',
          href: '/documentation-guide/external-doc-page',
        },
        {
          name: 'Add Graphs to MDX',
          href: '/documentation-guide/add-graphs-to-mdx',
        },
        {
          name: 'Creating A Gatsby Plugin',
          href: '/documentation-guide/creating-gatsby-plugins',
        },
      ],
    },
  ],
};
