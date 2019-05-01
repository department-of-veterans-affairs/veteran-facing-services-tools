(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{288:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return u});a(42);var t=a(43),o=a.n(t),r=a(3),i=a.n(r),s=a(2),m=a.n(s),c=a(4),l=a(347),p={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=l.a,a}return i()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},m.a.createElement("h1",{id:"common-patterns-for-building-forms"},"Common patterns for building forms"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Some forms require custom validation, styles, or conditional information based on user input. Use these patterns to address those needs."),m.a.createElement("h2",{id:"in-this-guide"},"In this guide"),m.a.createElement(c.MDXTag,{name:"ul",components:n},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#writing-custom-field-validation"}},"Writing custom field validation")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#validating-a-field-based-on-other-fields-in-the-same-object"}},"Validating a field based on other fields in the same object")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#changing-drop-down-options-based-on-data-in-another-field"}},"Changing drop-down options based on data in another field")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#creating-a-block-of-text-with-no-associated-fields"}},"Creating a block of text with no associated fields")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#conditionally-hiding-a-group-of-fields"}},"Conditionally hiding a group of fields")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#styling-expanded-or-collapsed-fields"}},"Styling expanded or collapsed fields")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#conditionally-including-a-page"}},"Conditionally including a page"))),m.a.createElement("h2",{id:"writing-custom-field-validation"},"Writing custom field validation"),m.a.createElement(c.MDXTag,{name:"p",components:n},"To add field validations to your forms that JSON Schema doesn't provide, use the array ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validations")," in the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," object. ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validations")," can be a function or an object."),m.a.createElement(c.MDXTag,{name:"p",components:n},"If you pass a function, ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validations")," is called with these arguments:"),m.a.createElement(c.MDXTag,{name:"ul",components:n},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"errors"),": The errors object for the field."),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"fieldData"),": The data for the field."),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"formData"),": The current form data."),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"schema"),": The current JSON Schema for the field."),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"errorMessages"),": The error messsage object for the field, if available.")),m.a.createElement(c.MDXTag,{name:"p",components:n},"Every validation function should update the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"errors")," object with any errors found by calling the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"addErrors()")," method. For example:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"function validateSSN(errors, ssn) {\n  if (!isValidSSN(ssn)) {\n    errors.addError('Please enter a valid 9 digit SSN (dashes allowed)');\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"When items in the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validations")," array are objects, they have two properties:"),m.a.createElement(c.MDXTag,{name:"ul",components:n},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"options"),": The object that's passed to the validation function. This allows you to configure your validation function for different fields in the form."),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"validator"),": A function with the same signature as above, plus the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"options")," object.")),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  validator: (errors, ssn, formData, schema, errorMessages, options) => {\n    if (!isValidWidget(ssn, options.someOption)) {\n      errors.addError('Please enter a valid 9 digit SSN (dashes allowed)');\n    }\n  },\n  options: {\n    someOption: true\n  }\n}\n")),m.a.createElement("h2",{id:"validating-a-field-based-on-other-fields-in-the-same-object"},"Validating a field based on other fields in the same object"),m.a.createElement(c.MDXTag,{name:"p",components:n},"You can use ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validations")," to validate objects in order to compare subfields. For example, given this schema:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  type: 'object',\n  properties: {\n    email: {\n      type: 'string'\n    },\n    confirmEmail: {\n      type: 'string'\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"If you use ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:validations")," on this object field instead of on the email or confirmEmail fields, you can compare the two fields:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"export function validateEmailsMatch(errors, pageData) {\n  const { email, confirmEmail } = pageData;\n  if (email !== confirmEmail) {\n    errors.confirmEmail.addError('Please ensure your entries match');\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"The function must be referenced in the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),":"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  'ui:validations': [ validateEmailsMatch ],\n  email: {\n    'ui:title': 'Email address'\n  },\n  confirmEmail: {\n    'ui:title': 'Re-enter email address'\n  }\n}\n")),m.a.createElement("h2",{id:"changing-drop-down-options-based-on-data-in-another-field"},"Changing drop-down options based on data in another field"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Use the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"updateSchema")," option in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," to change a list of enums:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  'ui:options': {\n    updateSchema: (form, pageSchema) {\n      if (form.myField === 'otherOption') {\n        return {\n          enum: ['option1', 'option2'],\n          enumNames: ['Option 1', 'Option 2']\n        }\n      } else {\n        return {\n          enum: ['option1', 'option2'],\n          enumNames: ['Option 1', 'Option 2']\n        }\n      }\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"Only the properties in the returned object are changed in the current schema. The object returned isn't used as an exact replacement for the schema, and if the current schema contains other properties, they aren't removed."),m.a.createElement(c.MDXTag,{name:"p",components:n},"For a long list of options, create all variations of the schema outside of the update function and use the update function to switch between them. You won't need to create a new schema object each time data changes in the form, requiring your field to re-render."),m.a.createElement("h2",{id:"creating-a-block-of-text-with-no-associated-fields"},"Creating a block of text with no associated fields"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Use 'ui:description' to show text or a custom component before the fields in a particular object in the schema."),m.a.createElement(c.MDXTag,{name:"p",components:n},"To create a block of text with no fields that follow, create an empty view object:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// schema\n{\n  type: 'object',\n  properties: {\n    'view:textObject': {\n      type: 'object',\n      properties: {}\n    }\n  }\n}\n\n// uiSchema\n{\n  'view:textObject': {\n    'ui:description': 'My text'\n  }\n}\n")),m.a.createElement("h2",{id:"conditionally-hiding-a-group-of-fields"},"Conditionally hiding a group of fields"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Sometimes fields in a form are siblings to others, but should be hidden conditionally. For example, this schema defines a field named ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"employed")," that is rendered as a checkbox the user can check. If this field is false (the checkbox is not checked) there is no need to display the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"jobStartDate")," or ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"monthlyWages")," fields:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"schema: {\n  type: 'object',\n  properties: {\n    employed: { type: 'boolean' },\n    jobStartDate: { type: 'string' },\n    monthlyWages: { type: 'string' },\n    otherMonthlyIncome: { type: 'string' }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"To accomplish this, the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," are written as:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"schema: {\n  type: 'object',\n  properties: {\n    employed: { type: 'boolean' },\n    'view:jobInformation': {\n      type: 'object',\n      properties: {\n        jobStartDate: { type: 'string' },\n        monthlyWages: { type: 'string' }\n      }\n    },\n    otherMonthlyIncome: { type: 'string' }\n  }\n},\nuiSchema: {\n  employed: { 'ui:title': 'I am employed' },\n  'view:jobInformation': {\n    'ui:options': {\n      hideIf: (formData) => !formData.employed\n    },\n    jobStartDate: { 'ui:title': 'Job start date' },\n    monthlyWages: { 'ui:title': 'Monthly wages' },\n  },\n  otherMonthlyIncome: { 'ui:title': 'Other monthly income' }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"The ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"hideIf")," function is passed a copy of the current ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formData")," in order to determine the condition upon which the fields are shown. In this example, it will hide the fields unless ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"employed")," is ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"true"),"."),m.a.createElement(c.MDXTag,{name:"p",components:n},"Objects from the form config with names that start with ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:")," are not passed to the back-end, but fields within those ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:")," objects are passed to the back-end by including them in the parent object. In this example, the fields ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"jobStartDate")," and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"monthlyWages")," would be included in the same object as ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"employed")," and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"otherMonthlyIncome"),", while the field for ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"view:JobInformation")," would be filtered out."),m.a.createElement("h2",{id:"styling-expanded-or-collapsed-fields"},"Styling expanded or collapsed fields"),m.a.createElement(c.MDXTag,{name:"p",components:n},"To indent or otherwise style fields that are expanded or collapsed with the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"expandUnder")," option, set a class on the controlling field. For example:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// uiSchema\n{\n  field1: {\n    'ui:title': 'This field expands/collapses other items',\n    'ui:options': {\n      expandUnderClassNames: 'schemaform-expandUnder-indent'\n    }\n  },\n  field2: {\n    'ui:title': 'This field is controlled by field1'\n    'ui:options': {\n      expandUnder: 'field1'\n    }\n  },\n  field3: {\n    'ui:title': 'This field is controlled by field1'\n    'ui:options': {\n      expandUnder: 'field1'\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"In this example, ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schemaform-expandUnder-indent")," is applied to the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"div")," that surrounds ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"field2")," and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"field3"),", which indents the fields. For additional styling, create a new class and add your own styles."),m.a.createElement("h2",{id:"conditionally-including-a-page"},"Conditionally including a page"),m.a.createElement(c.MDXTag,{name:"p",components:n},"The ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"depends")," property determines whether a page is active or not. ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"depends")," can work in a few ways:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// With an object\ndepends: {\n  passPhrase: 'open sesame'\n}\n\n// With an array\n// This will activate the page if any of the items in the array are true. Think || not &&.\ndepends: [\n  { passPhrase: 'open sesame' },\n  { passPhrase: 'open up!' }\n]\n\n// With a function\ndepends: (formData) => {\n  // return bool, true if page is active, false if page should be skipped\n  return formData.passPhrase === 'open sesame' && formData.codeWord === 'chicken';\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"For example, given this chapter configuration:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"chapterName: {\n  title: 'Chapter Title',\n  pages: {\n    pageName: {\n      ...\n      schema: {\n        type: 'object',\n        properties: {\n          passPhrase: { type: 'string' }\n        }\n      }\n    }\n    otherPageName: {\n      title: 'Page title',\n      path: 'path/to/page',\n      initialData: {},\n      depends: {\n        passPhrase: 'open sesame'\n      },\n      uiSchema: {},\n      schema: {}\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"If a user types 'open sesame' for the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"passPhrase")," on the first page, ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"otherPageName")," is active. For any other value, including no value, ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"otherPageName")," is inactive and the page is skipped."),m.a.createElement(c.MDXTag,{name:"p",components:n},m.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"p"},"Don't use the pass phrase as a secure login or other authentication mechanism.")," Within the source, the text of a pass phrase is clear text, even when it's in a function."))},n}(m.a.Component),u={}},340:function(e,n,a){"use strict";a.d(n,"b",function(){return l});var t=a(2),o=a.n(t),r=a(13),i=a.n(r),s=a(68),m=a.n(s);a.d(n,"a",function(){return m.a});a(342);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},341:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},342:function(e,n,a){var t;e.exports=(t=a(344))&&t.default||t},343:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},344:function(e,n,a){"use strict";a.r(n);var t=a(18),o=a.n(t),r=a(2),i=a.n(r),s=a(13),m=a.n(s),c=a(94),l=a(9),p=function(e){var n=e.location,a=l.default.getResourcesForPathnameSync(n.pathname);return a?i.a.createElement(c.a,o()({location:n,pageResources:a},a.json)):null};p.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},n.default=p},345:function(e,n,a){"use strict";var t=a(3),o=a.n(t),r=a(343),i=a(2),s=a.n(i),m=a(13),c=a.n(m),l=a(348),p=a.n(l),d=a(340),u=(a(17),a(133),a(134),a(341)),h=a.n(u),g=a(18),f=a.n(g),E=a(349),v=a.n(E),b=function(e){function n(n){var a;return(a=e.call(this,n)||this).state=h.a.sections.reduce(function(e,n){var a;return f()(((a={})[n.id]=!1,a),e)},{}),a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props,a=n.open,t=n.onClose,o=n.location;return s.a.createElement("div",{className:v()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},s.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:t,"aria-label":"Close this menu"},s.a.createElement("i",{className:"fas fa-times"})),s.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(n){return s.a.createElement("div",{key:n.id},s.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},s.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[n.id]=!e.state[n.id],a))},"aria-expanded":e.state[n.id]?"true":"false","aria-controls":"nav-"+n.id},n.name)),s.a.createElement("div",{id:"nav-"+n.id,"aria-hidden":e.state[n.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},s.a.createElement("ul",{className:"site-c-mobile-nav-list"},s.a.createElement("li",{className:"site-c-mobile-nav-list__item"},s.a.createElement(d.a,{className:v()("site-c-mobile-nav-list__link",{current:o.pathname===n.href}),to:n.href},"Overview")))))})))},n}(s.a.Component),y=function(e){function n(n){var a;return(a=e.call(this,n)||this).state={navOpen:!1},a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props.location;return s.a.createElement("div",null,s.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),s.a.createElement("header",{className:"site-c-header",role:"banner"},s.a.createElement("div",{className:"site-l-wrapper"},s.a.createElement("div",{className:"site-c-header__masthead"},s.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},s.a.createElement("em",{className:"site-c-header__logo-text"},s.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},s.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",s.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),s.a.createElement("div",{className:"site-c-header__utility-links"},s.a.createElement("div",{id:"search-container",className:"site-search-container"},s.a.createElement("i",{className:"fas fa-search search-icon"}),s.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),s.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},s.a.createElement("i",{className:"fas fa-search"})),s.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),s.a.createElement("nav",{className:"site-c-header__nav"},s.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return s.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},s.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(n.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),s.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},s.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),s.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&s.a.createElement("div",{className:"site-c-overlay is-visible"}),s.a.createElement(b,{location:n,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},n}(s.a.Component),T=(a(350),function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var a=n.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,n=e.children,a=e.location;return s.a.createElement(d.b,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(y,{location:a}),n)},data:r})},n}(s.a.Component));T.propTypes={children:c.a.node.isRequired};n.a=T},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}}]}}}},347:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(13),i=a.n(r),s=a(345),m=(a(133),a(134),a(135),a(17),a(346)),c=a(340);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(341),u=a.n(d);function h(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function g(e){var n=e.children,a=e.location;return o.a.createElement(s.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return g}),g.propTypes={children:i.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-common-patterns-for-building-forms-mdx-aa66b4cf4904bbd788d3.js.map