let MESSAGE = "Import modules from platform using workspaces syntax.";

module.exports = {
  meta: {
    docs: {
      description: MESSAGE,
      category: "Best Practices",
      recommended: false,
    },
    type: "suggestion",
  },
  create: (context) => ({
    ImportDeclaration(node) {
      const value = node.source.value;
      if (value.startsWith("platform/")) {
        const [_, folder] = value.split("/");
        context.report({
          node,
          message: `Importing from platform via platform/${folder} is deprecated. Import from @department-of-veterans-affairs/platform-${folder} instead or check babel.config.json for an alias to the import.`,
        });
      }
    },
  }),
};
