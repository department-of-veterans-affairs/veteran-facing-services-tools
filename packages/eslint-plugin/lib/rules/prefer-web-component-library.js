const MESSAGE =
  '<{{ reactComponent }}> can be replaced by <{{ webComponent }}>.';

const getPropNode = (node, propName) =>
  node.openingElement.attributes.find(n => n.name.name === propName);

const textInputTransformer = (context, node) => {
  const componentName = node.openingElement.name;
  const error = getPropNode(node, 'errorMessage');
  const additionalClass = getPropNode(node, 'additionalClass');
  const field = getPropNode(node, 'field');
  const placeholder = getPropNode(node, 'placeholder');
  const maxlength = getPropNode(node, 'charmax');
  const changeHandler = getPropNode(node, 'onValueChange');

  context.report({
    node,
    message:
      MESSAGE +
      `\nBEWARE: onValueChanged has been replaced with an onInput event handler and uses an event argument. This means the handler has to be updated to retrieve the value from event.target.value`,
    data: {
      reactComponent: componentName.name,
      webComponent: 'va-text-input',
    },
    suggest: [
      {
        desc: 'Migrate component',
        fix: fixer => {
          // Replace the node name
          return [
            fixer.replaceText(componentName, 'va-text-input'),
            error && fixer.replaceText(error.name, 'error'),
            additionalClass && fixer.replaceText(additionalClass.name, 'class'),
            field && fixer.remove(field),
            placeholder && fixer.remove(placeholder),
            maxlength && fixer.replaceText(maxlength.name, 'maxlength'),
            changeHandler && fixer.replaceText(changeHandler.name, 'onInput'),
          ].filter(i => !!i);
        },
      },
    ],
  });
};


const paginationTransformer = (context, node) => {
  const componentName = node.openingElement.name;
  const importNode = context
    .getAncestors()[0]
    .body.find(
      node =>
        node.type === 'ImportDeclaration' &&
        node.source.value.includes(
          `@department-of-veterans-affairs/component-library/${componentName.name}`,
        ),
    );

  context.report({
    node,
    message:
      MESSAGE +
      `\nBEWARE: onPageSelect has been updated to be an event. This means the handler for onPageSelect has to be updated to retrieve the page from event.detail.page`,
    data: {
      reactComponent: componentName.name,
      webComponent: 'VaPagination',
    },
    suggest: [
      {
        desc: 'Migrate component',
        fix: fixer => {
          return [
            // Replace import name with bindings
            fixer.replaceText(
              importNode.specifiers[0].local,
              `{ VaPagination }`,
            ),

            // Update import path to react-bindings
            fixer.replaceText(
              importNode.source,
              `'@department-of-veterans-affairs/component-library/dist/react-bindings'`,
            ),

            // Rename component name Pagination to VaPagination
            // We are using bindings because onPageSelect is an event
            fixer.replaceText(componentName, 'VaPagination'),
          ].filter(i => !!i);
        },
      },
    ],
  });
};

/**
 * Stores the result of a check that determines if a component is part of
 * the Design System component-library.
 *
 * This object has the following shape:
 * { [filename]: { [componentName]: boolean } }
 *
 * Example:
 * { 'src/applications/claims-status/components/ClaimsBreadcrumbs.jsx': { 'Breadcrumbs': true } }
 */
let isLibraryComponent = {};

/**
 * Builds the isLibraryComponent object by organizing components into filenames,
 * checks if the component is part of the Design System component-library
 * and stores the result as a boolean.
 *
 * @param {object} context
 * @param {string} componentName
 */
const updateIsLibraryImportObj = (context, componentName) => {
  isLibraryComponent[context.getFilename()] = {
    ...isLibraryComponent[context.getFilename()],
    [componentName]: context
      .getAncestors()[0]
      .body.some(
        node =>
          node.type === 'ImportDeclaration' &&
          node.source.value.includes(
            `@department-of-veterans-affairs/component-library/${componentName}`,
          ),
      ),
  };
};

/**
 * This function returns a boolean value indicating whether a component is part of the
 * Design System component-library. It utilizes the helper updateIsLibraryImportObj to
 * build the isLibraryComponent object and returns true or false for a given componentName
 * and context filename. Skips check if result exists for a given componentName and context
 * filename.
 *
 * @param {object} context
 * @param {string} componentName
 * @returns {boolean} true if component is part of the Design System component-library
 */
const isLibraryImport = (context, componentName) => {
  if (
    !isLibraryComponent
      .hasOwnProperty(context.getFilename())
      ?.hasOwnProperty(componentName)
  ) {
    updateIsLibraryImportObj(context, componentName);
  }
  return isLibraryComponent[context.getFilename()][componentName];
};

module.exports = {
  meta: {
    docs: {
      description:
        'Web Components are preferred over deprecated React component library components',
      category: 'Best Practices',
      recommended: false,
    },
    type: 'suggestion',
    fixable: 'code',
  },

  create(context) {
    return {
      JSXElement(node) {
        const componentName = node.openingElement.name.name;

        // If the component is not part of the Design System component-library,
        // then do not display an ESLint warning.
        if (!isLibraryImport(context, componentName)) return;

        switch (componentName) {
          case 'Pagination':
            paginationTransformer(context, node);
            break;
          case 'TextInput':
            textInputTransformer(context, node);
            break;
          default:
            break;
        }
      },
    };
  },
};
