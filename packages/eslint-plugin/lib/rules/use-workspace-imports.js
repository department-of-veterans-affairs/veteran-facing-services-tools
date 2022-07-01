let MESSAGE = 'Import modules from platform using workspaces syntax.';

module.exports = {
  meta: {
    docs: {
      description: MESSAGE,
      category: 'Best Practices',
      recommended: false,
    },
    type: 'suggestion',
  },
  create: context => ({
    ImportDeclaration(node) {
      const value = node.source.value;
      if (value.startsWith('platform/')) {
        const [_, folder] = value.split('/');
        // these folders in platform have been converted to workspaces
        // when all folders converted we don't have to check if a folder has been converted
        const platformWorkspacesFolders = [
          'forms',
          'forms-system',
          'landing-pages',
          'polyfills',
          'startup',
          'static-data',
          'utilities',
          'site-wide',
          'user',
        ];
        // the import is from a folder in platform that is a workspace but is not using the new syntax
        if (platformWorkspacesFolders.includes(folder)) {
          context.report({
            node,
            message: `Importing from platform via platform/${folder} is deprecated. Import from @department-of-veterans-affairs/platform-${folder} instead.`,
          });
        }
      }
    },
  }),
};
