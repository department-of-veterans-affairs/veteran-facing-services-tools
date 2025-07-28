const jsxAstUtils = require('jsx-ast-utils');

const { elementType, getProp, getLiteralPropValue } = jsxAstUtils;

// Define button classes and their corresponding variant values
const variantMapping = {
  'usa-button': null, // Base class with no variant
  'usa-button-primary': null,
  'usa-button-secondary': 'secondary',
  'usa-button-outline': 'outline',
  'usa-button-icon': 'icon',
  'usa-button-big': 'big',
  'usa-button-disabled': 'disabled',
}

const MESSAGE =
  'The <va-button> Web Component should be used instead of the button HTML element.';

module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
  },

  create(context) {
    return {
      JSXElement(node) {
        const anchorNode = node.openingElement;
        const closingNode = node.closingElement;
        const typeProp = getProp(anchorNode.attributes, 'type');   
        // get all classes 
        const classNameProp = getProp(anchorNode.attributes, 'className');
        const classNameValue = getLiteralPropValue(classNameProp);

        // Only display if we are on a button or input with type button
        if (elementType(anchorNode) === 'button' || 
          (elementType(anchorNode) === 'input' && getLiteralPropValue(typeProp) === 'button')){
          
          context.report({
            node,
            message:  MESSAGE,
            fix: fixer => {
              const sourceCode = context.getSourceCode();
              
              // Helper function to remove attribute with surrounding whitespace
              const removeWithWhitespace = (prop) => {
                if (!prop) return null;
                
                const sourceText = sourceCode.getText();
                const propRange = prop.range;
                const tokenBefore = sourceCode.getTokenBefore(prop);
                const tokenAfter = sourceCode.getTokenAfter(prop);
                
                // If there's whitespace before and after, remove it but preserve one space
                if (tokenBefore && tokenAfter) {
                  // Get the text between the tokens to analyze whitespace
                  const startPos = tokenBefore.range[1];
                  const endPos = tokenAfter.range[0];
                  
                  // Replace the attribute and surrounding whitespace with a single space
                  return fixer.replaceTextRange([startPos, endPos], ' ');
                }
                
                return fixer.remove(prop);
              };
              
              // Helper function to properly remove deprecated button classes
              const removeDeprecatedClasses = (classString) => {
                if (!classString) return '';
                
                // Split the class string into an array of individual classes
                const classes = classString.split(/\s+/).filter(Boolean);
                
                // Filter out any deprecated button classes
                const filteredClasses = classes.filter(cls => !Object.keys(variantMapping).includes(cls));
                
                // Join the remaining classes back into a string
                return filteredClasses.join(' ');
              };
              
              // Extract text content or JSX expression from children
              let textContent = null;
              let hasJsxExpression = false;
              
              if (node.children && node.children.length > 0) {
                // Check for JSX expressions (like {startNewAppButtonText})
                const jsxExpressions = node.children.filter(child => 
                  child.type === 'JSXExpressionContainer'
                );
                
                if (jsxExpressions.length === 1 && node.children.length === 1) {
                  // If there's exactly one JSX expression and no other content,
                  // use it directly as the text attribute
                  const jsxExpression = jsxExpressions[0];
                  textContent = sourceCode.getText(jsxExpression);
                  hasJsxExpression = true;
                } else {
                  // Otherwise, look for text content
                  const textNodes = node.children.filter(child => 
                    child.type === 'JSXText' || child.type === 'Literal'
                  );
                  
                  if (textNodes.length > 0) {
                    textContent = textNodes
                      .map(child => {
                        const text = child.value || child.raw || sourceCode.getText(child);
                        return text.trim();
                      })
                      .filter(Boolean)
                      .join(' ');
                  }
                }
              }
              
              const fixes = [
                // replace the original element name with va-button
                fixer.replaceText(anchorNode.name, 'va-button'),
                fixer.replaceText(closingNode.name, 'va-button'),

                // remove deprecatedButtonClasses classes from classNameValue
                fixer.replaceText(classNameProp, `className="${removeDeprecatedClasses(classNameValue)}"`),

                // add variant attribute if class matches one of the variant mappings
                ...Object.keys(variantMapping).map(key => {
                  if (classNameValue?.includes(key) && variantMapping[key] !== null) {
                    return fixer.insertTextAfter(classNameProp, ` variant="${variantMapping[key]}"`);
                  }
                  return null;
                }).filter(Boolean),

                // remove type with surrounding whitespace
                removeWithWhitespace(typeProp),
              ];
              
              // Add text attribute
              if (textContent) {
                if (hasJsxExpression) {
                  // For JSX expressions, preserve the curly braces
                  fixes.push(fixer.insertTextAfter(classNameProp, ` text=${textContent}`));
                } else {
                  // For regular text, add quotes
                  fixes.push(fixer.insertTextAfter(classNameProp, ` text="${textContent}"`));
                }
              } else {
                // Add empty text attribute when there's no content
                fixes.push(fixer.insertTextAfter(classNameProp, ` text=""`));
              }
              
              // Remove all children between opening and closing tags
              if (node.children && node.children.length > 0) {
                const openingTagEnd = anchorNode.range[1];
                const closingTagStart = closingNode.range[0];
                fixes.push(fixer.replaceTextRange([openingTagEnd, closingTagStart], ''));
              }
              
              return fixes.filter(i => !!i);
            }
          })
        }
      },
    };
  },
};
