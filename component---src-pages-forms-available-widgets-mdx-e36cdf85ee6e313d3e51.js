(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"0fdA":function(e,t,i){"use strict";i.r(t),i.d(t,"_frontmatter",(function(){return s})),i.d(t,"default",(function(){return o}));var a=i("zLVn"),n=(i("q1tI"),i("7ljp")),r=i("3dLD"),l=["components"],s={},b={_frontmatter:s},c=r.a;function o(e){var t=e.components,i=Object(a.a)(e,l);return Object(n.b)(c,Object.assign({},b,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"available-form-widgets"},"Available form widgets"),Object(n.b)("p",null,"Widgets are React components that return specific form elements. Set these widgets in a config file while building your form."),Object(n.b)("p",null,"Some widgets are associated with particular schema types or formats. There are additional widgets available, but VAFS uses definitions they're included in, rather than just the field."),Object(n.b)("p",null,"Widgets from the ",Object(n.b)("a",{parentName:"p",href:"/veteran-facing-services-tools/forms/about-the-schema-and-uischema-objects#understanding-the-uischema-object"},"react-jsonschema-form library")," include string mappings. Widgets created specifically for VAFS do not have mappings, and therefore must be specified by passing the component for the widget directly to the config. To include such widgets, import the widget at the top of the file:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"import CurrencyWidget from 'platform/forms-system/src/js/widgets/CurrencyWidget';\n")),Object(n.b)("p",null,"Then, set the ",Object(n.b)("inlineCode",{parentName:"p"},"ui:widget")," field to the imported widget name:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"uiSchema: {\n  ...\n  'ui:widget': CurrencyWidget,\n  ...\n}\n")),Object(n.b)("p",null,"Available widgets are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#arraycountwidget"},"ArrayCountWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#checkboxwidget"},"CheckboxWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#currencywidget"},"CurrencyWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#datewidget"},"DateWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#emailwidget"},"EmailWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#phonenumberwidget"},"PhoneNumberWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#radiowidget"},"RadioWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#selectwidget"},"SelectWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#ssnwidget"},"SSNWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#textwidget"},"TextWidget")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#yesnowidget"},"YesNoWidget"))),Object(n.b)("h2",{id:"arraycountwidget"},"ArrayCountWidget"),Object(n.b)("p",null,"Renders a ",Object(n.b)("inlineCode",{parentName:"p"},'<input type="number">'),' HTML element, and is used when determining how many times a group of questions should be rendered. For more information about grouping common questions, see "',Object(n.b)("a",{parentName:"p",href:"/veteran-facing-services-tools/forms/available-features-and-usage-guidelines#sequential-duplicate-form-groups"},"Sequential duplicate form groups"),'."'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"File:")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/ArrayCountWidget.jsx"},"ArrayCountWidget.jsx")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Usage:")," In the ",Object(n.b)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(n.b)("inlineCode",{parentName:"li"},"'ui:widget': ArrayCountWidget")," for the given field.")),Object(n.b)("h2",{id:"checkboxwidget"},"CheckboxWidget"),Object(n.b)("p",null,"Renders a single ",Object(n.b)("inlineCode",{parentName:"p"},'<input type="checkbox">'),' HTML element. For information about rendering multiple checkboxes together, see "',Object(n.b)("a",{parentName:"p",href:"/veteran-facing-services-tools/forms/available-features-and-usage-guidelines#checkbox-group"},"Checkbox Group"),'."'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"File:")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/CheckboxWidget.jsx"},"CheckboxWidget.jsx")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Usage:")," Usually the ",Object(n.b)("inlineCode",{parentName:"li"},"CheckboxWidget")," is not specified directly in the ",Object(n.b)("inlineCode",{parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",Object(n.b)("inlineCode",{parentName:"li"},"type: 'boolean'"),".")),Object(n.b)("h2",{id:"currencywidget"},"CurrencyWidget"),Object(n.b)("p",null,"Renders a ",Object(n.b)("inlineCode",{parentName:"p"},"<input>")," HTML element with some additional logic to handle parsing currency inputs."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"File:")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/CurrencyWidget.jsx"},"CurrencyWidget.jsx")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Usage:")," In the ",Object(n.b)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(n.b)("inlineCode",{parentName:"li"},"'ui:widget': CurrencyWidget")," for the given field.")),Object(n.b)("h2",{id:"datewidget"},"DateWidget"),Object(n.b)("p",null,"Renders three separate fields for dates, two ",Object(n.b)("inlineCode",{parentName:"p"},"<select>")," elements for month and day and one ",Object(n.b)("inlineCode",{parentName:"p"},"<input>")," element for the year."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"File:")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/DateWidget.jsx"},"DateWidget.jsx")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Usage:")," In the ",Object(n.b)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(n.b)("inlineCode",{parentName:"li"},"'ui:widget': 'date'")," for the given field.")),Object(n.b)("h2",{id:"emailwidget"},"EmailWidget"),Object(n.b)("p",null,"Renders a ",Object(n.b)("inlineCode",{parentName:"p"},"TextWidget")," with the ",Object(n.b)("inlineCode",{parentName:"p"},'type: "email"')," passed to the ",Object(n.b)("inlineCode",{parentName:"p"},"<input>")," element."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"File:")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/EmailWidget.jsx"},"EmailWidget.jsx")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Usage:")," In the ",Object(n.b)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(n.b)("inlineCode",{parentName:"li"},"'ui:widget': 'email'")," for the given field.")),Object(n.b)("h2",{id:"phonenumberwidget"},"PhoneNumberWidget"),Object(n.b)("p",null,"Renders a ",Object(n.b)("inlineCode",{parentName:"p"},"TextWidget")," with additional logic to strip non-numeric characters from the input before saving the input."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"File:")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/PhoneNumberWidget.jsx"},"PhoneNumberWidget.jsx")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Usage:")," In the ",Object(n.b)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(n.b)("inlineCode",{parentName:"li"},"'ui:widget': PhoneNumberWidget")," for the given field.")),Object(n.b)("h2",{id:"radiowidget"},"RadioWidget"),Object(n.b)("p",null,"Renders a single radio button for each ",Object(n.b)("inlineCode",{parentName:"p"},"enum")," value. This overrides the default ",Object(n.b)("inlineCode",{parentName:"p"},"SelectWidget")," that is normally rendered where ",Object(n.b)("inlineCode",{parentName:"p"},"enum")," exists."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"File:")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/RadioWidget.jsx"},"RadioWidget.jsx")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Usage:")," In the ",Object(n.b)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(n.b)("inlineCode",{parentName:"li"},"'ui:widget': 'radio'")," for the given field. Usually used with ",Object(n.b)("inlineCode",{parentName:"li"},"'ui:options': { labels: {}}")," so you can specify the label for each radio button. To see a code example, refer to ",Object(n.b)("a",{parentName:"li",href:"/veteran-facing-services-tools/forms/available-features-and-usage-guidelines#radio-button-group"},"radio button group in form features"),". Include additional properties on the radio input by including ",Object(n.b)("inlineCode",{parentName:"li"},"widgetProps")," and ",Object(n.b)("inlineCode",{parentName:"li"},"selectedProps")," within the ",Object(n.b)("inlineCode",{parentName:"li"},"ui:options"),"; the key for each input will match the custom option values.")),Object(n.b)("h2",{id:"selectwidget"},"SelectWidget"),Object(n.b)("p",null,"Renders a ",Object(n.b)("inlineCode",{parentName:"p"},"<select>")," HTML element. This is the default widget for data of ",Object(n.b)("inlineCode",{parentName:"p"},"type: 'string'")," with an ",Object(n.b)("inlineCode",{parentName:"p"},"enum")," property."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"File:")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/SelectWidget.jsx"},"SelectWidget.jsx")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Usage:")," Usually the ",Object(n.b)("inlineCode",{parentName:"li"},"SelectWidget")," is not specified directly in the ",Object(n.b)("inlineCode",{parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",Object(n.b)("inlineCode",{parentName:"li"},"type: 'string'")," with an ",Object(n.b)("inlineCode",{parentName:"li"},"enum")," property.")),Object(n.b)("h2",{id:"ssnwidget"},"SSNWidget"),Object(n.b)("p",null,"Renders a ",Object(n.b)("inlineCode",{parentName:"p"},"TextWidget")," with additional logic to strip the dashes before saving the input."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"File:")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/SSNWidget.jsx"},"SSNWidget.jsx")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Usage:")," In the ",Object(n.b)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(n.b)("inlineCode",{parentName:"li"},"'ui:widget': SSNWidget")," for the given field.")),Object(n.b)("h2",{id:"textwidget"},"TextWidget"),Object(n.b)("p",null,"Renders a ",Object(n.b)("inlineCode",{parentName:"p"},"<input>")," HTML element, and is the default widget for data of ",Object(n.b)("inlineCode",{parentName:"p"},"type: 'string'"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"File:")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/TextWidget.jsx"},"TextWidget.jsx")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Usage:")," Usually the ",Object(n.b)("inlineCode",{parentName:"li"},"TextWidget")," is not specified directly in the ",Object(n.b)("inlineCode",{parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",Object(n.b)("inlineCode",{parentName:"li"},"type: 'string'"),".")),Object(n.b)("h2",{id:"yesnowidget"},"YesNoWidget"),Object(n.b)("p",null,'Renders two radio buttons, one with a value of "Yes" and one with a value of "No".'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"File:")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/YesNoWidget.jsx"},"YesNoWidget.jsx")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Usage:")," In the ",Object(n.b)("inlineCode",{parentName:"li"},"uiSchema"),", specify ",Object(n.b)("inlineCode",{parentName:"li"},"'ui:widget': 'yesNo'")," for the given field. Include additional properties on the radio input by including ",Object(n.b)("inlineCode",{parentName:"li"},"widgetProps")," and ",Object(n.b)("inlineCode",{parentName:"li"},"selectedProps")," within the ",Object(n.b)("inlineCode",{parentName:"li"},"ui:options"),"; the key for each input will match the option values of ",Object(n.b)("inlineCode",{parentName:"li"},"Y")," and ",Object(n.b)("inlineCode",{parentName:"li"},"N"),".")))}o.isMDXComponent=!0},"3dLD":function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var a=i("q1tI"),n=i.n(a),r=i("Wbzz");function l(e){var t=e.item;return t.href?n.a.createElement("li",{key:t.name},n.a.createElement(r.Link,{to:t.href},t.name)):n.a.createElement("li",{key:t.name},t.name," (future)")}function s(e){var t=e.items,i=e.isSublist,a=void 0!==i&&i;return t.length?n.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?n.a.createElement("li",{key:e.name},a&&n.a.createElement(l,{item:e}),!a&&n.a.createElement("h2",{className:"heading-level-4"},e.name),n.a.createElement(s,{isSublist:!0,items:e.items})):n.a.createElement(l,{item:e,key:e.name})}))):null}var b=i("MEl4"),c=i.n(b);function o(e){var t=e.location,i=c.a.sections.find((function(e){return t.pathname.includes(e.href)}));return i?n.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},n.a.createElement("div",{className:"site-c-sidenav"},n.a.createElement(s,{items:i.items}))):null}function d(e){var t=e.sourceUrl;return t?n.a.createElement("div",null,n.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",n.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var m=i("8FPV");function p(e){var t=e.children,i=e.location,a=e.pageContext;return n.a.createElement(m.a,{location:i},n.a.createElement("div",{className:"vads-l-row"},n.a.createElement(o,{location:i}),n.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,n.a.createElement(d,{sourceUrl:a.sourceUrl}))))}},zLVn:function(e,t,i){"use strict";function a(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}i.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-forms-available-widgets-mdx-e36cdf85ee6e313d3e51.js.map