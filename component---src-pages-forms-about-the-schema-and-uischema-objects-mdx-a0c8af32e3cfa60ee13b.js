(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{284:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return u});a(42);var t=a(43),o=a.n(t),r=a(3),s=a.n(r),i=a(2),m=a.n(i),c=a(4),p=a(341),l={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=p.a,a}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,a),components:n},m.a.createElement("h1",{id:"about-the-schema-and-uischema-objects"},"About the schema and uiSchema objects"),m.a.createElement(c.MDXTag,{name:"p",components:n},"The VA.gov Forms System lets you build web-based forms using the JSON Schema standard for form data and React for the form UI. The form data and UI are represented by ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," objects, respectively, which are included in the form configuration file."),m.a.createElement(c.MDXTag,{name:"ul",components:n},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#understanding-the-schema-object"}},"Understanding the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"schema")," object"),m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#describing-object-fields-and-arrays"}},"Describing object fields and arrays")))),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#understanding-the-uischema-object"}},"Understanding the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"uiSchema")," object"),m.a.createElement(c.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#configuring-uischema-using-rjsf-options"}},"Configuring ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"uiSchema")," using RJSF options")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#configuring-uischema-using-vafs-options"}},"Configuring ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"uiSchema")," using VAFS options"))))),m.a.createElement("h2",{id:"understanding-the-schema-object"},"Understanding the schema object"),m.a.createElement(c.MDXTag,{name:"p",components:n},"The JSON Schema standard describes the allowed shape of JSON objects. Using a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," object, a JSON schema provides information about structured JSON data. For more information about the JSON Schema Standard, see ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://spacetelescope.github.io/understanding-json-schema/"}},"Understanding JSON Schema"),"."),m.a.createElement(c.MDXTag,{name:"p",components:n},"For JSON Schema validator libraries, VAFS uses ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.npmjs.com/package/ajv"}},"ajv")," for unit tests and ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.npmjs.com/package/jsonschema"}},"jsonschema")," in the VAFS code."),m.a.createElement("h3",{id:"describing-object-fields-and-arrays"},"Describing object fields and arrays"),m.a.createElement(c.MDXTag,{name:"p",components:n},"This example describes a JSON document that is an object with one property called ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myField"),", which is a number, meaning ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"{ myField: 2 }")," would be valid:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'object',\n  properties: {\n    myField: {\n      type: 'number'\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"However, ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"{}")," is also valid. To require a property in an object, use the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"required")," property, which takes an array of property names passed as strings. As in this example, ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"required")," is always on the object that contains the field, not the field itself:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'object',\n  required: ['myField'],\n  properties: {\n    myField: {\n      type: 'number'\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"Arrays work similarly to objects. This example describes an array of boolean values: ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"[true, false, true]"),". Items can be an object schema or any other type of schema as well:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'array',\n  items: {\n    type: 'boolean'\n  }\n}\n")),m.a.createElement("h2",{id:"understanding-the-uischema-object"},"Understanding the uiSchema object"),m.a.createElement(c.MDXTag,{name:"p",components:n},"The ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," object was introduced by ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form#react-jsonschema-form"}},"react-jsonschema-form"),", or ",m.a.createElement(c.MDXTag,{name:"em",components:n,parentName:"p"},"RJSF"),", as a means of describing how a form page should be rendered from a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema"),". To generate a form, react-jsonschema-form steps through the schema depth and renders different React components based on the type of data each property in the schema represents. In VAFS, ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," follows the format described in the ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form#the-uischema-object"}},"react-jsonschema-form documentation"),", with some custom VAFS additions. The ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," objects should have a similar structure, with the same fields organized in the same way with these exceptions:"),m.a.createElement(c.MDXTag,{name:"ul",components:n},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema")," doesn't need to contain all the fields found in the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"schema")," object."),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema")," doesn't need a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"properties")," object for sub-fields.")),m.a.createElement(c.MDXTag,{name:"p",components:n},"For example, given this schema:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  type: 'object',\n  properties: {\n    field1: {\n      type: 'string'\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"The matching ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," would be:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  'ui:title': 'My form',\n  field1: {\n    'ui:title': 'My field'\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"For array fields, you must specify an ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"items")," object that contains the fields for each row in the array in the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," object:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  'ui:title': 'My form',\n  toursOfDuty: {\n    items: {\n      branchName: {\n        'ui:title': 'Branch'\n      }\n    }\n  }\n}\n")),m.a.createElement("h3",{id:"configuring-uischema-using-rjsf-options"},"Configuring uiSchema using RJSF options"),m.a.createElement(c.MDXTag,{name:"p",components:n},"If you're not already familiar with the RJSF uiSchema options, see the ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form#the-uischema-object"}},"RJSF library documentation"),". Some commonly used options include:"),m.a.createElement(c.MDXTag,{name:"ul",components:n},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/mozilla-services/react-jsonschema-form#object-fields-ordering"}},"ui:order"),": An array of field names in the order in which they should appear."),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/mozilla-services/react-jsonschema-form#alternative-widgets"}},"ui:widget"),": The name of an alternative widget to use for the field, for example, a custom widget called ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yesNo"),"."),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/mozilla-services/react-jsonschema-form#custom-field-components"}},"ui:field"),": The name of a custom field."),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/mozilla-services/react-jsonschema-form#custom-css-class-names"}},"classNames"),": The class names to put on the component.")),m.a.createElement("h3",{id:"configuring-uischema-using-vafs-options"},"Configuring uiSchema using VAFS options"),m.a.createElement(c.MDXTag,{name:"p",components:n},"The VAFS code includes additional ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema")," functionality not found in the RJSF library."),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"{\n  // Used instead of the `title` property in the JSON Schema.\n  'ui:title': '',\n  // It can also be a component, which passes the current form data as a property.\n  'ui:title': ({ formData }) => <legend>{`A ${formData.thing} title`}</legend>,\n\n  // Used instead of the `description` property in the JSON Schema. This can be a string\n  // or a React component, and is normally used on object fields in the schema to provide\n  // description text or HTML before a block of fields.\n  'ui:description': '' || DescriptionComponent,\n\n  // Customizes the field or widget you're using.\n  'ui:field': '' || FieldComponent,\n  'ui:widget': '' || WidgetComponent,\n\n  // Renders string fields on the review page. Always used when you specify a custom widget\n  // component. Can also be used with regular widgets.\n  'ui:reviewWidget': WidgetComponent,\n\n  // Provides a function to make a field conditionally required. The data in the whole form,\n  // with no page breaks, is the only parameter. Don't make a field required in the JSON\n  // schema and in addition to using `ui:required` on that field. The index argument is\n  // provided if you use `ui:required` on data inside an array.\n  'ui:required': function (formData, index) {\n    return true || false;\n  },\n\n  // An array of validation functions or objects that you can use to add validation that's\n  // not possible through JSON Schema. See below for the properties passed to the validation\n  // functions and how to use them.\n  'ui:validations': [\n    /**\n     * Note the difference between the three data parameters:\n     *\n     * @param {any} fieldData The data for the current field being validated\n     * @param {object} formData The data for all the fields in every page\n     */\n    function (errors, fieldData, formData, fieldSchema, errorMessages) {\n      errors.addError('My error');\n    },\n    {\n      validator: (errors, fieldData, formData, fieldSchema, errorMessages, options) => {\n        errors.addError('My other error');\n      },\n      options: {}\n    }\n  ],\n\n  // An object with field-specific error messages. Structured by error name (from JSON Schema\n  // error types). This is passed to custom validations in `ui:validations` in order to allow\n  // configurable error messages in a validator.\n  'ui:errorMessages': {\n    'pattern': 'Please provide a value in the right format'\n  },\n  'ui:options': {\n\n    // An map of enum values to labels that are shown by the select and radio widgets.\n    labels: {\n      chapter30: 'A readable description (Chapter 30)'\n    },\n\n    // A map of values to a component, text, or JSX\n    // (https://reactjs.org/docs/introducing-jsx.html). If your field is a radio widget, the\n    // content here is shown underneath the radio button for that value when it's selected.\n    nestedContent: {\n      'value': <p>Some text</p>\n    },\n\n    // A string of class names that are added to the widget for the current field.\n    // `widgetClassNames` is similar to the default `classNames` property, but it puts the\n    // class names on the input/select/etc element itself, rather than a surrounding `div`.\n    widgetClassNames: '',\n\n    // For array fields, this component is shown when the item in the array is rendered as\n    // read-only on a page that is not a review page.\n    viewField: RowViewComponent,\n\n    // To show a field only when another field is true, set this option to the property name.\n    // It wraps the fields with an ExpandingGroup component using the `expandUnder` field as\n    // the first question.\n    expandUnder: '',\n\n    // To match to a specific value, use the `expandUnderCondition` option to specify the\n    // value that the `expandUnder` field's data should equal.\n    expandUnderCondition: 'someValue',\n    // `expandUnderCondition` can also be a function that receives the data from the\n    // `expandUnder` field as an argument.\n    expandUnderCondition: (field) => field === 'someValue' || field === 'someOtherValue',\n\n    // When using the expandUnder option, you can set `expandUnderClassNames` on the field\n    // specified by `expandUnder` and it will add classes to the `div` that wraps all of the\n    // fields when they're expanded. See cookbook for an example use case.\n    expandUnderClassNames: '',\n\n    // Hides the specified field on the review page.\n    hideOnReview: true || false,\n\n    // Hides the specified field on the review page when the field value is `false`.\n    hideOnReviewIfFalse: true || false\n\n    // A function that conditionally hides fields in the form. `hideIf` provides the `index`\n    // argument when you use `ui:required` on data inside an array.\n    hideIf: function (formData, index) {\n      return true || false;\n    }\n\n    // A function that conditionally replaces the current field's schema. `updateSchema`\n    // provides the `index` argument when you use `ui:required` on data inside an array.\n    updateSchema: function (formData, schema, uiSchema, index, pathToCurrentData) {\n      // This function returns an object with the properties you want to update. Instead of\n      // replacing the existing schema, it updates the individual properties.\n      return {\n        type: 'string'\n      };\n    },\n\n    // By default, array fields that are displayed on a single page in a form, such as\n    // information for multiple dependents, are displayed in a separate section on the\n    // review page. To keep the information in a single section on a review page, set\n    // this property to `true`.\n    keepInPageOnReview: true\n  }\n}\n")))},n}(m.a.Component),u={}},340:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},341:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(13),s=a.n(r),i=a(343),m=(a(133),a(134),a(135),a(17),a(340)),c=a(342);function p(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(l,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function l(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(344),u=a.n(d);function h(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(l,{items:a.items}))):null}function g(e){var n=e.children,a=e.location;return o.a.createElement(i.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-about-the-schema-and-uischema-objects-mdx-a0c8af32e3cfa60ee13b.js.map