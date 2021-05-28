(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var i=a("q1tI"),n=a.n(i),r=a("Wbzz");function l(e){var t=e.item;return t.href?n.a.createElement("li",{key:t.name},n.a.createElement(r.Link,{to:t.href},t.name)):n.a.createElement("li",{key:t.name},t.name," (future)")}function o(e){var t=e.items,a=e.isSublist,i=void 0!==a&&a;return t.length?n.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?n.a.createElement("li",{key:e.name},i&&n.a.createElement(l,{item:e}),!i&&n.a.createElement("h2",{className:"heading-level-4"},e.name),n.a.createElement(o,{isSublist:!0,items:e.items})):n.a.createElement(l,{item:e,key:e.name})}))):null}var s=a("MEl4"),c=a.n(s);function d(e){var t=e.location,a=c.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?n.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},n.a.createElement("div",{className:"site-c-sidenav"},n.a.createElement(o,{items:a.items}))):null}function m(e){var t=e.sourceUrl;return t?n.a.createElement("div",null,n.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",n.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var b=a("8FPV");function p(e){var t=e.children,a=e.location,i=e.pageContext;return n.a.createElement(b.a,{location:a},n.a.createElement("div",{className:"vads-l-row"},n.a.createElement(d,{location:a}),n.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,n.a.createElement(m,{sourceUrl:i.sourceUrl}))))}},Jpy6:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));var i=a("zLVn"),n=(a("q1tI"),a("7ljp")),r=a("3dLD"),l=["components"],o={},s={_frontmatter:o},c=r.a;function d(e){var t=e.components,a=Object(i.a)(e,l);return Object(n.b)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"creating-custom-fields-and-widgets"},"Creating custom fields and widgets"),Object(n.b)("p",null,"You can customize the base library to satisfy the unique requirements of your particular form."),Object(n.b)("h2",{id:"in-this-guide"},"In this guide"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#how-vafs-uses-rjsf"},"How the VAFS uses RJSF")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#customizing-fields-and-widgets-from-rjsf"},"Customizing fields, widgets, and events from RJSF")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#supporting-multi-page-forms"},"Supporting multi-page forms"))),Object(n.b)("h3",{id:"how-vafs-uses-rjsf"},"How VAFS uses RJSF"),Object(n.b)("p",null,"The VAFS code uses react-jsonschema-form, or RJSF, to render form fields, but it builds a scaffolding on top of it to support multi-page forms and common form patterns. Additionally, VAFS uses RJSF to create a form configuration spec that allows developers to specify the structure of a multi-page form."),Object(n.b)("h3",{id:"customizing-fields-widgets-and-events-from-rjsf"},"Customizing fields, widgets, and events from RJSF"),Object(n.b)("p",null,"RJSF passes all field and widget components to ",Object(n.b)("inlineCode",{parentName:"p"},"SchemaField")," (and most other components) as a ",Object(n.b)("inlineCode",{parentName:"p"},"registry")," property. To override fields and widgets in the registry, pass components of the same name into the library's main ",Object(n.b)("inlineCode",{parentName:"p"},"Form")," component. The VAFS uses custom versions of these components:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ObjectField")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ArrayField")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"FieldTemplate")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"./available-widgets#textwidget"},"TextWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"./available-widgets#selectwidget"},"SelectWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"./available-widgets#emailwidget"},"EmailWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"./available-widgets#checkboxwidget"},"CheckboxWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"./available-widgets#radiowidget"},"RadioWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"TextareaWidget"))),Object(n.b)("p",null,"The VAFS uses these custom fields and widgets:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"./available-widgets#yesnowidget"},"YesNoWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"./available-widgets#datewidget"},"DateWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"./available-widgets#ssnwidget"},"SSNWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"./available-widgets#phonenumberwidget"},"PhoneNumberWidget"))),Object(n.b)("h4",{id:"custom-widget-and-field-interface"},"Custom widget and field interface"),Object(n.b)("p",null,"Writing custom widgets is similar to writing React components: A value is passed in, and an ",Object(n.b)("inlineCode",{parentName:"p"},"onChange")," hook is provided for changing data. Other properties like the schemas and field ID are also provided."),Object(n.b)("p",null,"These are the properties passed to all custom widget components:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"disabled"),": Boolean for if the field has been disabled through the schema"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"formContext"),": The form context object from RJSF"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"id"),": The string id for the particular field being used"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"label"),": The label text for the field, typically the title from the schema"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"onChange"),": Function that will save data entered in the widget into your form data"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"onBlur"),': Function that marks the field as "blurred," which will reveal any validation errors for that field '),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"options"),": The ",Object(n.b)("inlineCode",{parentName:"li"},"ui:options")," object from ",Object(n.b)("inlineCode",{parentName:"li"},"uiSchema"),", if present"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"options.enumOptions"),": An array of enum options and their names, if present in the schema, inserted into ",Object(n.b)("inlineCode",{parentName:"li"},"options")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"readonly"),": If the field is marked ",Object(n.b)("inlineCode",{parentName:"li"},"readonly")," in the schema"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"registry"),": The registry of field and widgets, generally used by fields to choose the right component to use"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"required"),": If the field is required or not via the schema"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"value"),": The form data for the current property")),Object(n.b)("p",null,"Widgets are typically meant for input type components where data is saved to a single property in your form data. The props they receive are derived the more broad props of field components. These are the props passed to field components:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"disabled"),": Boolean for if the field has been disabled through the schema"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"formContext"),": The form context object from RJSF"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"formData"),": The form data for the current property"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"idSchema"),": An object with ids for the current property and any sub properties. The ",Object(n.b)("inlineCode",{parentName:"li"},"$id")," property has the id for the current property"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"name"),": The name of the current property, from ",Object(n.b)("inlineCode",{parentName:"li"},"uiSchema")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"onChange"),": Function that will save data entered in the widget into your form data"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"onBlur"),': Function that marks the field as "blurred," which will reveal any validation errors for that field '),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"readonly"),": If the field is marked ",Object(n.b)("inlineCode",{parentName:"li"},"readonly")," in the schema"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"registry"),": The registry of field and widgets, generally used by fields to choose the right component to use"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"required"),": If the field is required or not via the schema"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"uiSchema"),": The ",Object(n.b)("inlineCode",{parentName:"li"},"uiSchema")," object for the current property")),Object(n.b)("p",null,"The main differences are the inclusion of ",Object(n.b)("inlineCode",{parentName:"p"},"idSchema")," and ",Object(n.b)("inlineCode",{parentName:"p"},"uiSchema"),", which along with ",Object(n.b)("inlineCode",{parentName:"p"},"schema")," allow full access to configuration info for a particular property in your form config."),Object(n.b)("p",null,"In addition to customizing fields and widgets, the VAFS code hooks into a number of events provided by ",Object(n.b)("inlineCode",{parentName:"p"},"Form")," to support our form patterns, found in the ",Object(n.b)("inlineCode",{parentName:"p"},"FormPage")," component. These events are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"validate"),": This event is called when validation occurs. We call our custom validation, which reads uiSchema for custom validation hooks that have been included for form fields outside of what JSON Schema provides."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"transformErrors"),": This event is provided when the VAFS receives the list of JSON Schema validation errors and can return a transformed list. It replaces the messages with a set of default messages, as well as any messages provided for specific fields in uiSchema. It also moves the errors for required fields from the object level to the field level. Because JSON Schema specifies required fields with a ",Object(n.b)("inlineCode",{parentName:"li"},"required")," array on an object field schema, any errors about missing data are associated with that object and moved so they're associated with the missing field and rendered with that field on the form."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"onError"),": This event is called if a user tries to submit a form with a validation error. The VAFS sets a ",Object(n.b)("inlineCode",{parentName:"li"},"submitted")," flag in ",Object(n.b)("inlineCode",{parentName:"li"},"formContext"),", which is an object passed to all fields and components in the RJSF form. The ",Object(n.b)("inlineCode",{parentName:"li"},"FieldTemplate")," component uses ",Object(n.b)("inlineCode",{parentName:"li"},"formContext")," to display all error messages to the user."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"onSubmit"),": This event is called when a user submits a form with no validation errors. When this happens, the VAFS code looks for the next page in the multi-page form and navigates to it."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"onChange"),": This event is called when a user changes data in the form. The VAFS fires a Redux action and updates the store with the new data. The reducer code does several recalculations:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Recalculate the required fields for the schema:")," You can specify functions in uiSchema that set fields as optional or required based on form data. This runs them and updates the schema."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Recalculate which schema fields are hidden and remove that data:")," In uiSchema, you can specify fields that are conditionally hidden based on user data. To avoid validation errors from data a user can't see, the VAFS updates the schema to add a ",Object(n.b)("inlineCode",{parentName:"li"},"ui:hidden")," property and remove any user data for those fields."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Recalcuate general schema updates:")," Because you can make arbitrary changes to the schema based on form data, the VAFS must also make those changes, for example, removing options in an ",Object(n.b)("inlineCode",{parentName:"li"},"enum")," array when a user has entered certain data.")))),Object(n.b)("h3",{id:"supporting-multi-page-forms"},"Supporting multi-page forms"),Object(n.b)("p",null,"Large forms are organized into ",Object(n.b)("em",{parentName:"p"},"chapters")," and ",Object(n.b)("em",{parentName:"p"},"pages"),". A chapter is a collection of pages, each rendered as a single RJSF form with a schema and ",Object(n.b)("inlineCode",{parentName:"p"},"uiSchema")," field component. The chapter and page organization is described in a form config file that the VAFS uses to generate a list of routes. A user can move through the list of pages until they reach the review page."),Object(n.b)("p",null,"The review page also takes the config file and renders each chapter in an accordion panel. Inside a panel, the VAFS uses RJSF to render each page in a read-only view. This view uses simplified widgets and a different ",Object(n.b)("inlineCode",{parentName:"p"},"FieldTemplate")," component to render each form field in a definition list. The read-only view uses the RJSF ",Object(n.b)("inlineCode",{parentName:"p"},"Form")," component with no input elements, rendering instead with text. When a user on the review page clicks Edit for a form page, the normal widgets are used and a normal form is rendered."),Object(n.b)("p",null,"Each array item on a review page is rendered as read-only, and individual items can be edited independently. To accomplish this, the review ",Object(n.b)("inlineCode",{parentName:"p"},"ArrayField")," component renders each item in the array as its own RJSF ",Object(n.b)("inlineCode",{parentName:"p"},"Form"),". In addition, array fields are taken from the page's read-only view and rendered separately."))}d.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function i(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=component---src-pages-forms-creating-custom-fields-and-widgets-mdx-bf71af9d94fb06f11c62.js.map