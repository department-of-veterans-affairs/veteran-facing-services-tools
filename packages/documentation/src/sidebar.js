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
              name: 'Internal Tools',
              href: 'getting-started/internal-tools'
            },
          ],
        },
        {
          name: 'Common tasks',
          items: [
            {
              name: 'How to Add Documents',
              href: 'getting-started/how-to'
            },
            {
              name: 'How to Add Pages from Github',
              href: 'getting-started/add-external-pages'
            },
          ]
        },
        {
          name: 'Code organization',
          items: [],
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
      ]
    },
    {
      id: 'forms',
      name: 'Forms',
      href: 'forms',
      items: [
        {
          name: 'Introduction',
        },
        {
          name: 'Tutorial',
          items: [],
        },
        {
          name: 'Architecture',
          items: [],
        },
        {
          name: 'Common tasks',
          items: [],
        },
      ]
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
          query: 'componentList'
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
      ]
    },
  ]
};

