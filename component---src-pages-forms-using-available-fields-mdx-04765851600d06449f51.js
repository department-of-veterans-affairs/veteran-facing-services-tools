(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),i=a.n(n),r=a("Wbzz");function l(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(r.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function o(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},n&&i.a.createElement(l,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(o,{isSublist:!0,items:e.items})):i.a.createElement(l,{item:e,key:e.name})}))):null}var c=a("MEl4"),s=a.n(c);function m(e){var t=e.location,a=s.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(o,{items:a.items}))):null}function d(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var b=a("8FPV");function p(e){var t=e.children,a=e.location,n=e.pageContext;return i.a.createElement(b.a,{location:a},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(m,{location:a}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(d,{sourceUrl:n.sourceUrl}))))}},EUCy:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("3dLD"),l=["components"],o={},c={_frontmatter:o},s=r.a;function m(e){var t=e.components,a=Object(n.a)(e,l);return Object(i.b)(s,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"using-available-fields"},"Using available fields"),Object(i.b)("h2",{id:"in-this-guide"},"In this guide"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#using-the-revewcardfield"},"Using the ",Object(i.b)("inlineCode",{parentName:"a"},"ReviewCardField")))),Object(i.b)("h2",{id:"using-the-reviewcardfield"},"Using the ReviewCardField"),Object(i.b)("h3",{id:"what-does-it-do"},"What does it do?"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"reviewCardField")," is used as a wrapper around user data that ",Object(i.b)("em",{parentName:"p"},"shouldn't")," need to be modified. It is currently being used to group user data such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Phone & email"),Object(i.b)("li",{parentName:"ul"},"Contact information (home or mailing address)"),Object(i.b)("li",{parentName:"ul"},"Bank account information")),Object(i.b)("p",null,"If the data is preloaded, it will appear on the page in a collapsed form with an edit button. This allows the user to review and make changes as needed."),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"530px"}},"\n      ",Object(i.b)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/4bfa3b0111bdc2b5984a562645c34082/b6a9b/reviewcardfield-collapsed.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",Object(i.b)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.293436293436294%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyklEQVQY032PzW7CMBCE/f4PVkE4IEAgDoU4ju3Ff7FDEhLTNHSJVKmiCd9hD6sZzQyxzlGaSQmcC8Zy731VVdcp8G2LkHJ3TPU5N3XTEpbzj0Wy3e3X680yWQFc0O+cK/4RfCHAHE+Q7PPDpyivNRmG4fGH71/6vv+aoov3GJ8XBaRtW8awsuRcYuwY6ZXS+H+8BVNJF6OxDkBdlC58KMdxJXaqmziCabPmprlRymjGTufUWqeN1doobYQEIUApE0I5a37ZPKeb5Ae374/YCZ85rQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"reviewcardfield collapsed",title:"reviewcardfield collapsed",src:"/veteran-facing-services-tools/static/4bfa3b0111bdc2b5984a562645c34082/b6a9b/reviewcardfield-collapsed.png",srcSet:["/veteran-facing-services-tools/static/4bfa3b0111bdc2b5984a562645c34082/a2ead/reviewcardfield-collapsed.png 259w","/veteran-facing-services-tools/static/4bfa3b0111bdc2b5984a562645c34082/6b9fd/reviewcardfield-collapsed.png 518w","/veteran-facing-services-tools/static/4bfa3b0111bdc2b5984a562645c34082/b6a9b/reviewcardfield-collapsed.png 530w"],sizes:"(max-width: 530px) 100vw, 530px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n  "),"\n    ")),Object(i.b)("p",null,'With missing prefill data, or when the user presses the "Edit" button, the card will enter edit mode showing the form components'),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"528px"}},"\n      ",Object(i.b)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/8bacf5acc32ff3acfc4c138ced3ea4b9/4af8e/reviewcardfield-edit.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",Object(i.b)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.63706563706563%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVQoz42Ty0oDMRSG+3JufA4XbgRBcK9LwYX4AvoSLroRLy2tqPWGFduZSSadS5JmJpkkMx3bUk+loGA7+vMvAuHLOf/hpKa1VkoZY7IsM9ooKTOl5q4UIEVR1GJKL6+a7ZvbzsPT+cW1R0hmTSJlUikhhLW2lqbS9TzfJwjhgAyGLgYLEqZSpqsFfJ7nNXjD9dAgCBH2IxLwbp+9OczF/4KlVHFMEQb50Ml0NgNLncH13zBEh+JDPgSlX6NTWosq8AcMJzSv6zsein3Cex57d0QQ/TNzAmmxT1yEKRkIB/M+EkFcDUObi8xRDFQAM3OR72A8iMIgioyx0+l0PJ4sFWNsDhutPnJZ6NRmYpzLhDNKGedcfReWv72o3PXY9nFr7+R+/7SzddRqPJKYiR6iL73IwRQRtmpP5vBdN1zfrW8cNDYPm2s79bOGw7h47YftZ9LH1CO0asNGo2Jc5mVhR4WdlHmR20RmYKm0SGGHtVkm+BFlWX4C/kHJ/W6UGi4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"reviewcardfield edit",title:"reviewcardfield edit",src:"/veteran-facing-services-tools/static/8bacf5acc32ff3acfc4c138ced3ea4b9/4af8e/reviewcardfield-edit.png",srcSet:["/veteran-facing-services-tools/static/8bacf5acc32ff3acfc4c138ced3ea4b9/a2ead/reviewcardfield-edit.png 259w","/veteran-facing-services-tools/static/8bacf5acc32ff3acfc4c138ced3ea4b9/6b9fd/reviewcardfield-edit.png 518w","/veteran-facing-services-tools/static/8bacf5acc32ff3acfc4c138ced3ea4b9/4af8e/reviewcardfield-edit.png 528w"],sizes:"(max-width: 528px) 100vw, 528px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n  "),"\n    ")),Object(i.b)("h3",{id:"how-do-i-use-it-in-a-form"},"How do I use it in a form?"),Object(i.b)("h4",{id:"importing"},"Importing"),Object(i.b)("p",null,"First make sure to import the component along with your view component (more on this below)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"// The review card field\nimport ReviewCardField from 'platform/forms-system/src/js/components/ReviewCardField';\n// review mode renderer\nimport myViewComponent from './myViewComponent';\n// predefined uiSchemas\nimport phoneUI from 'platform/forms-system/src/js/definitions/phone';\nimport emailUI from 'platform/forms-system/src/js/definitions/email';\n")),Object(i.b)("h4",{id:"myviewcomponent"},"myViewComponent"),Object(i.b)("p",null,"This component renders the form data when the ",Object(i.b)("inlineCode",{parentName:"p"},"ReviewCardField")," is in review (not edit) mode. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"// myViewComponent.jsx\n\nconst formatPhoneNumber = number => {\n  // formatting magic done here\n  return number;\n}\n\nexport const myViewComponent = ({ formData }) => {\n  const { phone, emailAddress } = formData;\n  return (\n    <>\n      <p>\n        <strong>Phone number</strong>\n        {formatPhoneNumber(phone) || 'Not available'}\n      </p>\n      <p>\n        <strong>Email address</strong>\n        {emailAddress || 'Not available'}\n      </p>\n    </>\n  );\n};\n")),Object(i.b)("h3",{id:"uischema"},"uiSchema"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Set ",Object(i.b)("inlineCode",{parentName:"li"},"'ui:field'")," to ",Object(i.b)("inlineCode",{parentName:"li"},"ReviewCardField")),Object(i.b)("li",{parentName:"ul"},"Set ",Object(i.b)("inlineCode",{parentName:"li"},"'ui:options")," ",Object(i.b)("inlineCode",{parentName:"li"},"viewComponent")," to your custom ",Object(i.b)("inlineCode",{parentName:"li"},"myViewComponent")),Object(i.b)("li",{parentName:"ul"},"Include the desired uiSchema for the form elements")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"contactInfo: {\n  'ui:title': 'Contact Information',\n  phoneEmailCard: {\n    'ui:title': 'Phone & email',\n    'ui:field': ReviewCardField,\n    'ui:options': {\n      // showing ALL options\n      // ** required **\n      viewComponent: myViewComponent,\n      // ** optional **\n      reviewTitle: 'New Title',\n      editTitle: 'Editing...',\n      startInEdit: false,\n      volatileData: false,\n      itemName: 'Name',\n    },\n    phone: phoneUI('Home phone'),\n    emailAddress: emailUI(),\n  },\n},\n")),Object(i.b)("h4",{id:"reviewcardfield-options"},"ReviewCardField options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"viewComponent")," - Component shown in review (non-edit) mode. It gets the same ",Object(i.b)("inlineCode",{parentName:"li"},"formData")," as the field."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"startInEdit")," - Set as either a function or a (boolean) value that will be evaluated as truthy or not. If a function is used, it's passed the formData and expects a boolean return value."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"volatileData")," - If this is truthy, the component pattern changes slightly so only completely new data can be entered, but not edited. This is useful for bank account information."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"reviewTitle")," - The title shown on the review card. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"'ui:title'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"editTitle")," - The title shown on the edit card. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"'ui:title'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"itemName"),' - The name of the set of data in the card. This shows up as a "New {itemName}" button, only if ',Object(i.b)("inlineCode",{parentName:"li"},"volatileData")," is set to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),".")),Object(i.b)("h3",{id:"schema"},"schema"),Object(i.b)("p",null,"Set up the ",Object(i.b)("inlineCode",{parentName:"p"},"schema")," in a typical manner. There is no mention of the ",Object(i.b)("inlineCode",{parentName:"p"},"ReviewCardField")," here"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"contactInfo: {\ntype: 'object',\nproperties: {\n  phoneEmailCard: {\n    type: 'object',\n    required: ['phone', 'emailAddress'],\n    properties: {\n      phone,\n      emailAddress,\n    },\n  },\n},\n")))}m.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-forms-using-available-fields-mdx-04765851600d06449f51.js.map