const path = require('path');

const MESSAGE = 'No cross app imports allowed';

module.exports = {
  meta: {
    docs: {
      description: MESSAGE,
      category: 'problem',
    },
  },
  create(context) {
    const aliases = context.options[0] || {};

    return {
      ImportDeclaration(node) {
        const { value } = node.source;
        const currentPath = context.getFilename();

        let importPath;
        if (value.startsWith('applications')) {
          // Absolute import
          importPath = path.join('vets-website', 'src', value);
        } else if (value.startsWith('..')) {
          // Relative import
          const currentDir = path.join(currentPath, '..');
          importPath = path.join(currentDir, value);
        } else if (value.startsWith('@@') || value.startsWith('~')) {
          // Babel alias
          const alias = value.match(/^@@[^/]+|~/)[0];
          importPath = value
            .replace(alias, aliases[alias])
            .replace(/^\./, 'vets-website');
        } else {
          // Other imports (modules, files in current dir, etc)
          importPath = value;
        }

        const testLocation = new RegExp('vets-website/src/applications');
        // Are the current file and the import in vets-website apps?
        if (importPath.match(testLocation) && currentPath.match(testLocation)) {
          const regex = new RegExp('applications/(?<app>[a-zA-Z0-9_-]+)/');
          const importedApp = importPath.match(regex)?.groups?.app;
          const currentApp = currentPath.match(regex)?.groups?.app;

          if (importedApp !== currentApp) {
            context.report({
              node,
              message: `${MESSAGE}: ${currentApp} importing from ${importedApp}`,
            });
          }
        }
      },
    };
  },
};
