(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0fdA":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s})),t.d(a,"_frontmatter",(function(){return l}));t("rGqo"),t("yt8O"),t("RW0V"),t("a1Th"),t("Btvt"),t("I5cv"),t("91GP");var n=t("q1tI"),m=t.n(n),r=t("6qfE"),o=t("3dLD");var i={},s=function(e){var a,t;t=e,(a=s).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var n;n=s;function s(a){var t;return(t=e.call(this,a)||this).layout=o.a,t}return s.prototype.render=function(){var e=this.props,a=e.components,t=function(e,a){if(null==e)return{};var t,n,m={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(m[t]=e[t]);return m}(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,t),components:a},m.a.createElement("h1",{id:"available-form-widgets"},"Available form widgets"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Widgets are React components that return specific form elements. Set these widgets in a config file while building your form."),m.a.createElement(r.MDXTag,{name:"p",components:a},"Some widgets are associated with particular schema types or formats. There are additional widgets available, but VAFS uses definitions they're included in, rather than just the field."),m.a.createElement(r.MDXTag,{name:"p",components:a},"Widgets from the ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"./about-the-schema-and-uischema-objects.md#understanding-the-uischema-object"}},"react-jsonschema-form library")," include string mappings. Widgets created specifically for VAFS do not have mappings, and therefore must be specified by passing the component for the widget directly to the config. To include such widgets, import the widget at the top of the file:"),m.a.createElement(r.MDXTag,{name:"pre",components:a},m.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"import CurrencyWidget from 'platform/forms-system/src/js/widgets/CurrencyWidget';\n")),m.a.createElement(r.MDXTag,{name:"p",components:a},"Then, set the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ui:widget")," field to the imported widget name:"),m.a.createElement(r.MDXTag,{name:"pre",components:a},m.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"uiSchema: {\n  ...\n  'ui:widget': CurrencyWidget,\n  ...\n}\n")),m.a.createElement(r.MDXTag,{name:"p",components:a},"Available widgets are:"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#arraycountwidget"}},"ArrayCountWidget")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#checkboxwidget"}},"CheckboxWidget")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#currencywidget"}},"CurrencyWidget")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#datewidget"}},"DateWidget")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#emailwidget"}},"EmailWidget")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#phonenumberwidget"}},"PhoneNumberWidget")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#radiowidget"}},"RadioWidget")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#selectwidget"}},"SelectWidget")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#ssnwidget"}},"SSNWidget")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#textwidget"}},"TextWidget")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#yesnowidget"}},"YesNoWidget"))),m.a.createElement("h2",{id:"arraycountwidget"},"ArrayCountWidget"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Renders a ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'<input type="number">'),' HTML element, and is used when determining how many times a group of questions should be rendered. For more information about grouping common questions, see "',m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/forms/available-features-and-usage-guidelines.md#sequential-duplicate-form-groups"}},"Sequential duplicate form groups"),'."'),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/ArrayCountWidget.jsx"}},"ArrayCountWidget.jsx")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': ArrayCountWidget")," for the given field.")),m.a.createElement("h2",{id:"checkboxwidget"},"CheckboxWidget"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Renders a single ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'<input type="checkbox">'),' HTML element. For information about rendering multiple checkboxes together, see "',m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/forms/available-features-and-usage-guidelines.md#checkbox-group"}},"Checkbox Group"),'."'),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/CheckboxWidget.jsx"}},"CheckboxWidget.jsx")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," Usually the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"CheckboxWidget")," is not specified directly in the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"type: 'boolean'"),".")),m.a.createElement("h2",{id:"currencywidget"},"CurrencyWidget"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Renders a ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<input>")," HTML element with some additional logic to handle parsing currency inputs."),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/CurrencyWidget.jsx"}},"CurrencyWidget.jsx")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': CurrencyWidget")," for the given field.")),m.a.createElement("h2",{id:"datewidget"},"DateWidget"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Renders three separate fields for dates, two ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<select>")," elements for month and day and one ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<input>")," element for the year."),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/DateWidget.jsx"}},"DateWidget.jsx")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': 'date'")," for the given field.")),m.a.createElement("h2",{id:"emailwidget"},"EmailWidget"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Renders a ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"TextWidget")," with the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'type: "email"')," passed to the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<input>")," element."),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/EmailWidget.jsx"}},"EmailWidget.jsx")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': 'email'")," for the given field.")),m.a.createElement("h2",{id:"phonenumberwidget"},"PhoneNumberWidget"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Renders a ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"TextWidget")," with additional logic to strip non-numeric characters from the input before saving the input."),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/PhoneNumberWidget.jsx"}},"PhoneNumberWidget.jsx")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': PhoneNumberWidget")," for the given field.")),m.a.createElement("h2",{id:"radiowidget"},"RadioWidget"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Renders a single radio button for each ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"enum")," value. This overrides the default ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"SelectWidget")," that is normally rendered where ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"enum")," exists."),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/RadioWidget.jsx"}},"RadioWidget.jsx")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': 'radio'")," for the given field. Usually used with ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:options': { labels: {}}")," so you can specify the label for each radio button. To see a code example, refer to ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/forms/available-features-and-usage-guidelines.md#radio-button-group"}},"radio button group in form features"),".")),m.a.createElement("h2",{id:"selectwidget"},"SelectWidget"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Renders a ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<select>")," HTML element. This is the default widget for data of ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"type: 'string'")," with an ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"enum")," property."),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/SelectWidget.jsx"}},"SelectWidget.jsx")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," Usually the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"SelectWidget")," is not specified directly in the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"type: 'string'")," with an ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"enum")," property.")),m.a.createElement("h2",{id:"ssnwidget"},"SSNWidget"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Renders a ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"TextWidget")," with additional logic to strip the dashes before saving the input."),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/SSNWidget.jsx"}},"SSNWidget.jsx")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': SSNWidget")," for the given field.")),m.a.createElement("h2",{id:"textwidget"},"TextWidget"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Renders a ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<input>")," HTML element, and is the default widget for data of ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"type: 'string'"),"."),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/TextWidget.jsx"}},"TextWidget.jsx")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," Usually the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"TextWidget")," is not specified directly in the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"type: 'string'"),".")),m.a.createElement("h2",{id:"yesnowidget"},"YesNoWidget"),m.a.createElement(r.MDXTag,{name:"p",components:a},'Renders two radio buttons, one with a value of "Yes" and one with a value of "No".'),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"File:")," ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/YesNoWidget.jsx"}},"YesNoWidget.jsx")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Usage:")," In the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"uiSchema"),", specify ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'ui:widget': 'yesNo'")," for the given field.")))},s}(m.a.Component),l={}}}]);
//# sourceMappingURL=component---src-pages-forms-available-widgets-mdx-8ee60c91c98191842d4c.js.map