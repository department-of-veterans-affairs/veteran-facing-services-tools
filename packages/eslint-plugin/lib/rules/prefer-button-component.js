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
  'The <va-button> Web Component should be used instead of the button HTML element. For more information, see Storybook: https://design.va.gov/storybook/?path=/docs/uswds-va-button--docs';

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
        const classNameProp = getProp(anchorNode.attributes, 'className');
        const classNameValue = getLiteralPropValue(classNameProp);

        // Only display if we are on a button or input with type button
        // or any element with the usa-button class
        if (elementType(anchorNode) === 'button' || 
          (elementType(anchorNode) === 'input' && getLiteralPropValue(typeProp) === 'button') ||
          (classNameValue && classNameValue.includes('usa-button'))){
          
          context.report({
            node,
            message:  MESSAGE,
            fix: fixer => {
              const sourceCode = context.getSourceCode();
              
              // Helper function to remove attribute with surrounding whitespace
              const removeWithWhitespace = (prop) => {
                if (!prop) return null;
                
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
              
              // Helper function to recursively extract text from JSX elements
              const extractTextFromNode = (node) => {
                if (!node) return '';
                
                if (node.type === 'JSXText' || node.type === 'Literal') {
                  const text = node.value || node.raw || sourceCode.getText(node);
                  return text.trim();
                }
                
                if (node.type === 'JSXElement' && node.children) {
                  return node.children
                    .map(extractTextFromNode)
                    .filter(Boolean)
                    .join(' ');
                }
                
                return '';
              };
              
              // Extract text content from children or input value attribute
              let textContent = "";
              let hasJsxExpression = false;
              
              // For input elements, use the value attribute as text content
              const valueProp = getProp(node.openingElement.attributes, 'value');
              const valueValue = valueProp ? getLiteralPropValue(valueProp) : null;
              
              if (valueValue) {
                textContent = valueValue;
              } else if (node.children && node.children.length > 0) {
                // Check for JSX expressions (like {variable})
                const jsxExpressions = node.children.filter(child => 
                  child.type === 'JSXExpressionContainer'
                );
                
                if (jsxExpressions.length === 1 && node.children.length === 1) {
                  // If there's exactly one JSX expression and no other content,
                  // use it directly as the text attribute
                  const jsxExpression = jsxExpressions[0];
                  textContent = sourceCode.getText(jsxExpression.expression);
                  hasJsxExpression = true;
                } else {
                  // Extract text from all children, including nested elements
                  textContent = node.children
                    .map(extractTextFromNode)
                    .filter(Boolean)
                    .join(' ');
                }
              }
              
              const fixes = [
                // replace the original element name with va-button
                fixer.replaceText(anchorNode.name, 'va-button'),
              ];

              if (valueProp) {
                fixes.push(fixer.remove(valueProp));
              }
              
              // Only add closing tag replacement if it exists (for non-self-closing elements)
              if (closingNode) {
                fixes.push(fixer.replaceText(closingNode.name, 'va-button'));
              }

              // Only add className replacement if it exists
              if (classNameProp) {
                fixes.push(fixer.replaceText(classNameProp, `className="${removeDeprecatedClasses(classNameValue)}"`));
                
                // add variant attribute if class matches one of the variant mappings
                Object.keys(variantMapping).forEach(key => {
                  if (classNameValue?.includes(key) && variantMapping[key] !== null) {
                    fixes.push(fixer.insertTextAfter(classNameProp, ` variant="${variantMapping[key]}"`));
                  }
                });
                
                // Add text attribute with extracted content
                if (hasJsxExpression) {
                  // For JSX expressions, add curly braces
                  fixes.push(fixer.insertTextAfter(classNameProp, ` text={${textContent}}`));
                } else {
                  // For regular text, add quotes
                  fixes.push(fixer.insertTextAfter(classNameProp, ` text="${textContent}"`));
                }
              } else {
                // If no className, add text attribute after the element name
                if (hasJsxExpression) {
                  fixes.push(fixer.insertTextAfter(anchorNode.name, ` text={${textContent}}`));
                } else {
                  fixes.push(fixer.insertTextAfter(anchorNode.name, ` text="${textContent}"`));
                }
              }

              // remove type with surrounding whitespace if it exists
              if (typeProp) {
                fixes.push(removeWithWhitespace(typeProp));
              }
              
              // Remove all children between opening and closing tags
              if (node.children && node.children.length > 0) {
                const openingTagEnd = anchorNode.range[1];
                const closingTagStart = closingNode ? closingNode.range[0] : anchorNode.range[1];
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
