module.exports = {
  sections: [
    {
      id: 'getting-started',
      name: 'Getting started',
      href: '/getting-started',
      indexmdx: true,
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
              name: 'Run and build VA.gov',
              href: '/getting-started/common-tasks/run-build',
            },
            {
              name: 'Running tests',
              href: '/getting-started/common-tasks/test',
            },
            {
              name: 'Debugging tests',
              href: '/getting-started/common-tasks/debugging-tests',
            },
            {
              name: 'Adding a new feature to VA.gov',
              href: '/getting-started/common-tasks/new-feature',
              items: [
                {
                  name: 'Applications',
                  href: '/getting-started/common-tasks/new-application',
                },
                {
                  name: 'Widgets',
                  href: '/getting-started/common-tasks/new-widget',
                },
                {
                  name: 'Content pages',
                  href: '/getting-started/common-tasks/new-page',
                },
                {
                  name: 'Analytics',
                  href: '/getting-started/common-tasks/analytics',
                },
              ],
            },
            {
              name: 'Writing a unit test',
              href: '/getting-started/common-tasks/new-unit-test',
            },
            {
              name: 'Writing an end-to-end test',
              href: '/getting-started/common-tasks/new-end-to-end-test',
            },
            {
              name: 'Updating Formation',
              href: '/getting-started/common-tasks/updating-formation',
            },
            {
              name: 'URL Routing',
              href: '/getting-started/common-tasks/routing',
            },
          ],
        },
      ],
    },
    {
      id: 'visual-design',
      name: 'Visual design',
      href: '/visual-design',
      indexmdx: true,
      items: [
        {
          name: 'Formation components',
          query: 'componentList',
        },
      ],
    },
    {
      id: 'forms',
      name: 'Forms',
      href: '/forms',
      indexmdx: true,
      items: [
        {
          name: 'Tutorial',
          items: [
            {
              name: '1. Basic',
              href: '/forms/form-tutorial-basic',
            },
            {
              name: '2. Intermediate',
              href: '/forms/form-tutorial-intermediate',
            },
            {
              name: '3. Advanced',
              href: '/forms/form-tutorial-advanced',
            },
            {
              name: '4. Setting up Save in Progress',
              href: '/forms/save-in-progress',
            },
            {
              name: '5. Using the Save in Progress menu',
              href: '/forms/save-in-progress-menu',
            },
            {
              name: '6. Forms in production',
              href: '/forms/forms-in-production',
            },
          ],
        },
        {
          name: 'Documentation',
          items: [
            {
              name: 'About the schema and uiSchema objects',
              href: '/forms/about-the-schema-and-uischema-objects',
            },
            {
              name: 'Available widgets',
              href: '/forms/available-widgets',
            },
            {
              name: 'Common patterns',
              href: '/forms/common-patterns-for-building-forms',
            },
            {
              name: 'Config options',
              href: '/forms/config-options',
            },
            {
              name: 'Component hierarchy',
              href: '/forms/component-hierarchy',
            },
            {
              name: 'Creating a form config file',
              href: '/forms/creating-a-form-config-file',
            },
            {
              name: 'Creating custom fields and widgets',
              href: '/forms/creating-custom-fields-and-widgets',
            },
            {
              name: 'Form features and usage guidelines',
              href: '/forms/available-features-and-usage-guidelines',
            },
            {
              name: 'Using available fields',
              href: '/forms/using-available-fields',
            },
          ],
        },
      ],
    },
    {
      id: 'platform',
      name: 'Platform',
      href: '/platform',
      indexmdx: true,
      items: [
        {
          name: 'Site structure',
          items: [
            {
              name: 'Client overview',
              href: '/platform/site-structure/client-overview',
            },
            {
              name: 'VA.gov environments',
              href: '/platform/site-structure/environments',
              indexmdx: true,
            },
            {
              name: 'Bundles and code organization',
              href: '/platform/site-structure/bundles-and-code-organization',
            },
            {
              name: 'Styling',
              href: '/platform/site-structure/styling-overview',
            },
            {
              name: 'Page and application Javascript structure',
              href: '/platform/site-structure/application-structure',
            },
          ],
        },
        {
          name: 'Architecture',
          items: [
            {
              name: 'Metalsmith static site',
              href: '/platform/architecture/static-site',
              indexmdx: true,
              items: [
                {
                  name: 'How are URLs created',
                  href: '/platform/architecture/static-site/urls',
                },
                {
                  name: 'How templates work',
                  href: '/platform/architecture/static-site/templates',
                },
                {
                  name: 'How to create collections and related links',
                  href: '/platform/architecture/static-site/collections',
                },
              ],
            },
            {
              name: 'CMS overview',
              href: '/platform/architecture/cms',
            },
            {
              name: 'Continuous integration and deployment flows',
              href: '/platform/architecture/build-deploy-flows',
            },
            {
              name: 'Teamsite',
              href: '/platform/architecture/teamsite',
            },
            {
              name: 'How do end-to-end tests work?',
            },
          ],
        },
        {
          name: 'Front End Standards',
          items: [
            {
              name: 'React standards',
              href: '/platform/front-end-standards/react',
            },
            {
              name: 'Redux standards',
              href: '/platform/front-end-standards/redux',
            },
            {
              name: 'Styles',
              href: '/platform/front-end-standards/styles',
            },
            {
              name: 'Accessibility',
              href: '/platform/front-end-standards/accessibility',
            },
            {
              name: 'Security',
              href: '/platform/front-end-standards/security',
            },
            {
              name: 'Unit testing',
              href: '/platform/unit-testing',
            },
            {
              name: 'Automated code quality',
              href: '/platform/front-end-standards/manual-reviews',
            },
            {
              name: 'Documented Decisions',
              href:
                '/platform/front-end-standards/documented-decisions/summary',
            },
          ],
        },
        {
          name: 'Tools',
          items: [
            {
              name: 'Visual regression testing',
              href: '/platform/tools/visual-regression-testing',
            },
            {
              name: 'Feature toggles',
              href: '/platform/tools/feature-toggles',
            },
            {
              name: 'Downtime notifications',
              href: '/platform/tools/downtime-notifications',
            },
            {
              name: 'Application generator',
              href: '/platform/tools/generator',
            },
          ],
        },
      ],
    },
    {
      id: 'documentation',
      name: 'Documentation guide',
      href: '/documentation-guide',
      indexmdx: true,
      items: [
        {
          name: 'Documentation style guide',
          href: '/documentation-guide/documentation-style-guide',
        },
        {
          name: 'Adding new pages to this site',
          href: '/documentation-guide/doc-page',
        },
        {
          name: 'Adding pages from Github to this site',
          href: '/documentation-guide/external-doc-page',
        },
        {
          name: 'Add graphs to MDX',
          href: '/documentation-guide/add-graphs-to-mdx',
        },
        {
          name: 'Creating a Gatsby plugin',
          href: '/documentation-guide/creating-gatsby-plugins',
        },
      ],
    },
  ],
};
