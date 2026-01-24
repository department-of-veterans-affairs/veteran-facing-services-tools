/**
 * @fileoverview Prevent direct assignment to Response.ok and Response.url
 * @description In Node 22, Response.ok and Response.url are read-only getters.
 * Direct assignment throws TypeError. Use Object.defineProperty or the
 * mockResponse() helper instead.
 */

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Prevent direct assignment to Response.ok and Response.url',
      category: 'Possible Errors',
      recommended: true,
    },
    messages: {
      readOnlyProperty:
        '`Response.{{ property }}` is read-only in Node 22. ' +
        'Use `Object.defineProperty(response, "{{ property }}", { value: ... })` ' +
        'or the `mockResponse()` helper from platform/testing/unit/helpers.',
    },
    schema: [],
  },

  create(context) {
    const readOnlyProperties = ['ok', 'url', 'status', 'statusText', 'type', 'redirected'];
    
    return {
      // Detect: response.ok = true
      'AssignmentExpression[left.type="MemberExpression"]': node => {
        const propertyName = node.left.property && node.left.property.name;
        
        if (readOnlyProperties.includes(propertyName)) {
          // Try to determine if the object is a Response
          // Check if variable name contains 'response' (case insensitive)
          const objectName = node.left.object && node.left.object.name;
          if (objectName && /response/i.test(objectName)) {
            context.report({
              node,
              messageId: 'readOnlyProperty',
              data: { property: propertyName },
            });
          }
        }
      },
    };
  },
};
