(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Zgz1:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return s})),n.d(a,"_frontmatter",(function(){return l}));n("rGqo"),n("yt8O"),n("RW0V"),n("a1Th"),n("Btvt"),n("I5cv"),n("91GP");var t=n("q1tI"),o=n.n(t),r=n("6qfE"),m=n("3dLD");var i={},s=function(e){var a,n;n=e,(a=s).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n;var t;t=s;function s(a){var n;return(n=e.call(this,a)||this).layout=m.a,n}return s.prototype.render=function(){var e=this.props,a=e.components,n=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,n),components:a},o.a.createElement("h1",{id:"creating-custom-fields-and-widgets"},"Creating custom fields and widgets"),o.a.createElement(r.MDXTag,{name:"p",components:a},"You can customize the base library to satisfy the unique requirements of your particular form."),o.a.createElement("h2",{id:"in-this-guide"},"In this guide"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#how-vafs-uses-rjsf"}},"How the VAFS uses RJSF")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#customizing-fields-and-widgets-from-rjsf"}},"Customizing fields, widgets, and events from RJSF")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#supporting-multi-page-forms"}},"Supporting multi-page forms"))),o.a.createElement("h2",{id:"how-vafs-uses-rjsf"},"How VAFS uses RJSF"),o.a.createElement(r.MDXTag,{name:"p",components:a},"The VAFS code uses react-jsonschema-form, or RJSF, to render form fields, but it builds a scaffolding on top of it to support multi-page forms and common form patterns. Additionally, VAFS uses RJSF to create a form configuration spec that allows developers to specify the structure of a multi-page form."),o.a.createElement("h3",{id:"customizing-fields-widgets-and-events-from-rjsf"},"Customizing fields, widgets, and events from RJSF"),o.a.createElement(r.MDXTag,{name:"p",components:a},"RJSF passes all field and widget components to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"SchemaField")," (and most other components) as a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"registry")," property. To override fields and widgets in the registry, pass components of the same name into the library's main ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Form")," component. The VAFS uses custom versions of these components:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"ObjectField")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"ArrayField")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"FieldTemplate")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#textwidget"}},"TextWidget")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#selectwidget"}},"SelectWidget")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#emailwidget"}},"EmailWidget")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#checkboxwidget"}},"CheckboxWidget")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#radiowidget"}},"RadioWidget")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"TextareaWidget"))),o.a.createElement(r.MDXTag,{name:"p",components:a},"The VAFS uses these custom fields and widgets:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#yesnowidget"}},"YesNoWidget")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#datewidget"}},"DateWidget")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#ssnwidget"}},"SSNWidget")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-widgets.md#phonenumberwidget"}},"PhoneNumberWidget"))),o.a.createElement(r.MDXTag,{name:"p",components:a},"Writing custom widgets is similar to writing React components: A value is passed in, and an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"onChange")," hook is provided for changing data. Other properties like the schemas and field ID are also provided."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Custom fields receive all properties listed previously for field components in RJSF."),o.a.createElement(r.MDXTag,{name:"p",components:a},"In addition to customizing fields and widgets, the VAFS code hooks into a number of events provided by ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Form")," to support our form patterns, found in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"FormPage")," component. These events are:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"validate"),": This event is called when validation occurs. We call our custom validation, which reads uiSchema for custom validation hooks that have been included for form fields outside of what JSON Schema provides."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"transformErrors"),": This event is provided when the VAFS receives the list of JSON Schema validation errors and can return a transformed list. It replaces the messages with a set of default messages, as well as any messages provided for specific fields in uiSchema. It also moves the errors for required fields from the object level to the field level. Because JSON Schema specifies required fields with a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"required")," array on an object field schema, any errors about missing data are associated with that object and moved so they're associated with the missing field and rendered with that field on the form."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"onError"),": This event is called if a user tries to submit a form with a validation error. The VAFS sets a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"submitted")," flag in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"formContext"),", which is an object passed to all fields and components in the RJSF form. The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"FieldTemplate")," component uses ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"formContext")," to display all error messages to the user."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"onSubmit"),": This event is called when a user submits a form with no validation errors. When this happens, the VAFS code looks for the next page in the multi-page form and navigates to it."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"onChange"),": This event is called when a user changes data in the form. The VAFS fires a Redux action and updates the store with the new data. The reducer code does several recalculations:",o.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Recalculate the required fields for the schema:")," You can specify functions in uiSchema that set fields as optional or required based on form data. This runs them and updates the schema."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Recalculate which schema fields are hidden and remove that data:")," In uiSchema, you can specify fields that are conditionally hidden based on user data. To avoid validation errors from data a user can't see, the VAFS updates the schema to add a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"ui:hidden")," property and remove any user data for those fields."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Recalcuate general schema updates:")," Because you can make arbitrary changes to the schema based on form data, the VAFS must also make those changes, for example, removing options in an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"enum")," array when a user has entered certain data.")))),o.a.createElement("h3",{id:"supporting-multi-page-forms"},"Supporting multi-page forms"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Large forms are organized into ",o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"chapters")," and ",o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"pages"),". A chapter is a collection of pages, each rendered as a single RJSF form with a schema and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema")," field component. The chapter and page organization is described in a form config file that the VAFS uses to generate a list of routes. A user can move through the list of pages until they reach the review page."),o.a.createElement(r.MDXTag,{name:"p",components:a},"The review page also takes the config file and renders each chapter in an accordion panel. Inside a panel, the VAFS uses RJSF to render each page in a read-only view. This view uses simplified widgets and a different ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"FieldTemplate")," component to render each form field in a definition list. The read-only view uses the RJSF ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Form")," component with no input elements, rendering instead with text. When a user on the review page clicks Edit for a form page, the normal widgets are used and a normal form is rendered."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Each array item on a review page is rendered as read-only, and individual items can be edited independently. To accomplish this, the review ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ArrayField")," component renders each item in the array as its own RJSF ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Form"),". In addition, array fields are taken from the page's read-only view and rendered separately."))},s}(o.a.Component),l={}}}]);
//# sourceMappingURL=component---src-pages-forms-creating-custom-fields-and-widgets-md-2d86445e628cd4c86e9c.js.map