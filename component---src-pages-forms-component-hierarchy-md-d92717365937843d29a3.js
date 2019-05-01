(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{289:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return h});a(42);var t=a(43),o=a.n(t),r=a(3),m=a.n(r),i=a(2),c=a.n(i),s=a(4),l=a(347),p={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=l.a,a}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return c.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},c.a.createElement("h1",{id:"about-the-react-component-hierarchy"},"About the React component hierarchy"),c.a.createElement(s.MDXTag,{name:"p",components:n},"The VAFS builds a React application of a form, and determines which React components to render based on the description of the form in the form configuration file."),c.a.createElement("h2",{id:"in-this-guide"},"In this guide"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-form-component-fields-and-widgets"}},"About the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"Form")," component, fields, and widgets"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#example-schema-string-object"}},"Example schema: ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"string")," object")),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#example-schema-string-with-enum-property"}},"Example schema: ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"string")," with ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"enum")," property")),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#example-schema-object"}},"Example schema: ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"object"))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#example-schema-arrayfield"}},"Example schema: ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"ArrayField"))))),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#field-component-props"}},"Field component props"),c.a.createElement(s.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-onchange-field-component"}},"About the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"onChange")," field component")),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-uischema-field-component"}},"About the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"uiSchema")," field component"))))),c.a.createElement("h2",{id:"about-the-form-component-fields-and-widgets"},"About the Form component, fields, and widgets"),c.a.createElement(s.MDXTag,{name:"p",components:n},"At the top level, RJSF uses a ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," component to take the schema inputs and render a hierarchy of components for each field of the form:"),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"li"},"Fields")," generally match the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"type")," attribute in a ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"schema")," object. There are object fields, array fields, number fields, boolean fields, and string fields. Except for arrays and objects, the fields render a label (via ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"FieldTemplate"),") and a widget. To specify a particular field, set the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ui:field")," property to a specific field."),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"A ",c.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"li"},"widget")," is the html input element that accepts data from the user. To specify a particular widget, set the  ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ui:widget")," property to ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"text"),", ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"email"),", ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"checkbox"),", ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"radio"),", ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"select"),", and ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"textarea"),". While there are many widgets provided by RJSF, the defaults are overwritten with these versions.")),c.a.createElement("h3",{id:"example-schema-string-object"},"Example schema: string object"),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'string'\n}\n")),c.a.createElement(s.MDXTag,{name:"p",components:n},"The two ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Field")," components determine which fields and widgets to render. ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SchemaField")," uses the two schemas the library accepts, ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," and ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", to determine what other ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Field")," component to render. The example chose ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"StringField")," because the schema type was ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string"),". The ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"StringField")," component then rendered ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"TextWidget"),", based on ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," and ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", because the only information provided was that the field is a string (the default widget type)."),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"<SchemaField>\n  <StringField>\n    <FieldTemplate>\n      <TextWidget/>\n    </FieldTemplate>\n  </StringField>\n</SchemaField>\n")),c.a.createElement("h3",{id:"example-schema-string-with-enum-property"},"Example schema: string with enum property"),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'string',\n  enum: ['first', 'second', 'third']\n}\n")),c.a.createElement(s.MDXTag,{name:"p",components:n},"The hierarchy for this field uses ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SelectWidget")," instead of ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"TextWidget"),", because ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"StringField")," detected the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"enum")," property in the schema."),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"<SchemaField>\n  <StringField>\n    <FieldTemplate>\n      <SelectWidget/>\n    </FieldTemplate>\n  </StringField>\n</SchemaField>\n")),c.a.createElement(s.MDXTag,{name:"p",components:n},"While in most cases a field component is responsible for rendering a label and a widget, for ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"object")," and ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"array")," schema types, the field component renders additional field components for each of the elements they contain."),c.a.createElement("h3",{id:"example-schema-object"},"Example schema: object"),c.a.createElement(s.MDXTag,{name:"p",components:n},"This is an ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"object")," schema with two string fields."),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'object',\n  properties: {\n    field1: {\n      type: 'string'\n    },\n    field2: {\n      type: 'string'\n    }\n  }\n}\n")),c.a.createElement(s.MDXTag,{name:"p",components:n},"The ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ObjectField")," component renders a ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SchemaField")," component for each of its properties. Those properties are both ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string")," types, so it looks like the first hierarchy, but nested."),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"<SchemaField>\n  <ObjectField>\n    <SchemaField>\n      <StringField>\n        <FieldTemplate>\n          <TextWidget/>\n        </FieldTemplate>\n      </StringField>\n    </SchemaField>\n    <SchemaField>\n      <StringField>\n        <FieldTemplate>\n          <TextWidget/>\n        </FieldTemplate>\n      </StringField>\n    </SchemaField>\n  </ObjectField>\n</SchemaField>\n")),c.a.createElement("h3",{id:"example-schema-arrayfield"},"Example schema: ArrayField"),c.a.createElement(s.MDXTag,{name:"p",components:n},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ArrayField")," renders a ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SchemaField")," component for each item in the array. The library only uses the array field where each item is an object type schema."),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      field1: {\n        type: 'string'\n      },\n      field2: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),c.a.createElement("h2",{id:"field-component-props"},"Field component props"),c.a.createElement(s.MDXTag,{name:"p",components:n},"In order for each component to know what to render, field components pass a collection of props down through the component hierarchy. Most are passed to widget components."),c.a.createElement(s.MDXTag,{name:"ul",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"name"),": The property name of the current field. For example, the object schema above would be named ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"field1"),"."),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"required"),": If the field is required or not (i.e. the property name is in the schema's ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"required")," array)."),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"schema"),": The schema for the specific field."),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema"),': The ui schema for this field. See "',c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-uischema-field-component"}},"About the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"uiSchema")," field component"),'."'),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"errorSchema"),": An object that contains the list of errors for the current field and any child properties, if the field is an array or object."),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"idSchema"),": An object that contains the field IDs for the current field and any child properties. The library generates IDs for each field by joining each property name with an underscore."),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"formData"),": The actual data entered for the field so far."),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onChange"),": The function that's called when data changes. See \"",c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-onchange-field-component"}},"About the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"onChange")," field component"),'."'),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onBlur"),": The function that's called when focus is lost on a widget.")),c.a.createElement("h3",{id:"about-the-onchange-field-component"},"About the onChange field component"),c.a.createElement(s.MDXTag,{name:"p",components:n},"When a user enters data, each widget calls ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChange"),". Each component in the hierarchy passes an ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChange")," handler to child fields. When child data changes, the component combines it with the rest of the data and calls the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChange")," prop passed to it from its parent."),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'object',\n  properties: {\n    field1: {\n      type: 'string'\n    }\n  }\n}\n")),c.a.createElement(s.MDXTag,{name:"p",components:n},"In this example:"),c.a.createElement(s.MDXTag,{name:"ol",components:n},c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"The user types 'a'."),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"The ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"TextWidget")," for field1 calls ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onChange")," with 'a'."),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"The ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onChange")," property came from the parent ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ObjectField")," component, which puts 'a' in an object as ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"field1")," (",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"{ field1: 'a' }"),"), then calls the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onChange")," prop it was passed."),c.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ol"},"When it reaches the top-level ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Form")," component, RJSF runs the JSON Schema validation and passes the results through the component hierarchy.")),c.a.createElement(s.MDXTag,{name:"p",components:n},"Similar to Redux, all state is kept in the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," component, or the root of the form. All data processing and validation happens in ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form"),", or is triggered by hooks provided by ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form"),". The VAFS code built on top of this processes the schemas and form data in Redux, triggered by events provided by ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form"),"."),c.a.createElement("h3",{id:"about-the-uischema-field-component"},"About the uiSchema field component"),c.a.createElement(s.MDXTag,{name:"p",components:n},"Along with the regular JSON Schema, a UI schema for UI-specific options that don't fit within the JSON Schema standard is also optionally defined for each field. The UI schema is passed to the form config file as an object, ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),', for each field. For more information, see "',c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/forms/about-the-schema-and-uischema-objects#understanding-the-uischema-object"}},"Understanding the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"uiSchema")," object"),'."'))},n}(c.a.Component),h={}},340:function(e,n,a){"use strict";a.d(n,"b",function(){return l});var t=a(2),o=a.n(t),r=a(13),m=a.n(r),i=a(68),c=a.n(i);a.d(n,"a",function(){return c.a});a(342);var s=o.a.createContext({}),l=function(e){return o.a.createElement(s.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func}},341:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},342:function(e,n,a){var t;e.exports=(t=a(344))&&t.default||t},343:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},344:function(e,n,a){"use strict";a.r(n);var t=a(18),o=a.n(t),r=a(2),m=a.n(r),i=a(13),c=a.n(i),s=a(94),l=a(9),p=function(e){var n=e.location,a=l.default.getResourcesForPathnameSync(n.pathname);return a?m.a.createElement(s.a,o()({location:n,pageResources:a},a.json)):null};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=p},345:function(e,n,a){"use strict";var t=a(3),o=a.n(t),r=a(343),m=a(2),i=a.n(m),c=a(13),s=a.n(c),l=a(348),p=a.n(l),d=a(340),h=(a(17),a(133),a(134),a(341)),u=a.n(h),g=a(18),f=a.n(g),E=a(349),T=a.n(E),b=function(e){function n(n){var a;return(a=e.call(this,n)||this).state=u.a.sections.reduce(function(e,n){var a;return f()(((a={})[n.id]=!1,a),e)},{}),a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props,a=n.open,t=n.onClose,o=n.location;return i.a.createElement("div",{className:T()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:t,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},u.a.sections.map(function(n){return i.a.createElement("div",{key:n.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[n.id]=!e.state[n.id],a))},"aria-expanded":e.state[n.id]?"true":"false","aria-controls":"nav-"+n.id},n.name)),i.a.createElement("div",{id:"nav-"+n.id,"aria-hidden":e.state[n.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(d.a,{className:T()("site-c-mobile-nav-list__link",{current:o.pathname===n.href}),to:n.href},"Overview")))))})))},n}(i.a.Component),v=function(e){function n(n){var a;return(a=e.call(this,n)||this).state={navOpen:!1},a}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},u.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(n.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(b,{location:n,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},n}(i.a.Component),N=(a(350),function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var a=n.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,n=e.children,a=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(v,{location:a}),n)},data:r})},n}(i.a.Component));N.propTypes={children:s.a.node.isRequired};n.a=N},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(13),m=a.n(r),i=a(345),c=(a(133),a(134),a(135),a(17),a(346)),s=a(340);function l(){return o.a.createElement(s.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function p(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(s.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(341),h=a.n(d);function u(e){var n=e.location,a=h.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function g(e){var n=e.children,a=e.location;return o.a.createElement(i.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(u,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return g}),g.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-component-hierarchy-md-d92717365937843d29a3.js.map