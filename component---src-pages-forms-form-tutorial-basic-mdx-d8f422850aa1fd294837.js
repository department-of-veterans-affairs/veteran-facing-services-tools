(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a("q1tI"),i=a.n(n),s=a("Wbzz");function r(){return i.a.createElement(s.StaticQuery,{query:"68798663",render:function(e){return i.a.createElement(o,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function l(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(s.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function o(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},n&&i.a.createElement(l,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(o,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},n&&i.a.createElement(l,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(r,null)):i.a.createElement(l,{item:e,key:e.name})}))):null}var c=a("MEl4"),m=a.n(c);function d(e){var t=e.location,a=m.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(o,{items:a.items}))):null}function p(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var b=a("8FPV");function g(e){var t=e.children,a=e.location,n=e.pageContext;return i.a.createElement(b.a,{location:a},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(d,{location:a}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(p,{sourceUrl:n.sourceUrl}))))}},Xj8M:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return c}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("3dLD"),r={},l={_frontmatter:r},o=s.a;function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.mdx)(o,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"basic-tutorial"},"Basic tutorial"),Object(i.mdx)("p",null,"In this doc, we'll walk through creating a new form and making some simple changes."),Object(i.mdx)("p",null,"Prerequisites:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"VA.gov ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"/veteran-facing-services-tools/getting-started"}),"running locally")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"/veteran-facing-services-tools/platform/tools/generator"}),"VA.gov Yeoman generator")," installed locally (first step in linked page)")),Object(i.mdx)("p",null,"If you both of those steps completed, you're ready to get started."),Object(i.mdx)("h2",{id:"create-new-form-application-with-yeoman-generator"},"Create new form application with Yeoman generator"),Object(i.mdx)("p",null,"To begin, run the generator from the root of your local vets-website repository:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"yo @department-of-veterans-affairs/vets-website\n")),Object(i.mdx)("p",null,"This tutorial uses the following answers to the questions asked by the generator:"),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Question"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Answer"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"What's the name of your application?"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"My new form")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"What folder in ",Object(i.mdx)("inlineCode",{parentName:"td"},"src/applications/")," should your app live in?"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"new-form")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"What should be the name of your app's entry bundle?"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"newForm")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"What's the root url for this app?"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"/new-form")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Is this a form app?"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Y")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"What's your form number?"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"XX-230")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"What's the Google Analytics event prefix you want to use?"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"new-form-")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"What's the respondent burden of this form in minutes?"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"30")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"What's the OMB control number for this form?"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"XX3344")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"What's the OMB expiration date (in M/D/YYYY format) for this form?"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"5/31/2018")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"What's the benefit description for this form?"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"new form benefits")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Which form template would you like to start with?"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"BLANK: A form without any fields")))),Object(i.mdx)("p",null,"After answering the questions, the generator will create several source files for a new form application in ",Object(i.mdx)("inlineCode",{parentName:"p"},"/src/applications/new-form"),"."),Object(i.mdx)("h2",{id:"open-the-new-form-application"},"Open the new form application"),Object(i.mdx)("p",null,"Next you'll need to start the site up locally (restart this task if it is already running):"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"yarn watch\n")),Object(i.mdx)("p",null,"Then navigate to http://localhost:3001/new-form."),Object(i.mdx)("p",null,"You should see something like this:"),Object(i.mdx)("p",null,Object(i.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"816px"}}),"\n      ",Object(i.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/b4098/initial-form.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(i.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"94.20849420849422%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAADCElEQVQ4y5VUS08TURidvaDGlcawcGEiRYMREDQujLjQyHuh+EiEsEEI0Z3/xhhMfEWDSqIJRBOXyBsijz6nLe08OjN9T6fTdo7fveVRXiHe5PT7vnO/e+65t70VTl7qwuW7g2jqGEZz5whctwdwuvE+GH+qvucQdG+ih/fVtPSiuWMIrtZ+CNWuDtRce4RzN57g/M0+HlnTsdo2sLkqQnUFqlztOF5Hed1OfeJiJ840PSC+E8LZq71oaB9GQ9sQWrqfk9MRXO95gfo7g6htHeCur9x7xucbqa+5a4Q2fooLt/r5qdhcE/HMCOOEFbeI0fdj+DQ+gQ9j3/F5fBIfv/zA63djGJ/4DY8Yxao3iDVfaBNhrHiCO5y3zK96yxBAw9B16ARVUShqSKdSUChPUfzfIRSKRaSzWaTSaaQz5WgkEsgQl7MsONTkOGWUKuIWiqUSShUQEkUHvyIGvHIM3lgcHkWHj+IW/HqSolHOtUQZxLHI+jUzz505tBODoBUcfA0bWPCJmPIEsBiWsa4lsabGt7GqGFhVje2c8yS2QrmUsfYI2iX81C14acEMXe5cIIxZfxjz4gamPSLPZ/3EU5wLbPCcwUObevQU5Gx+v+BkzOSCU+4AwY8Zr8jFWM4W/yHn08RNrfuID1DNcj+WI+ohglqO38ucGOEuFoJRLIaiWApJHAvEs3oL81SvSDGIaQuKae8WVNmRjRw8ahLzdJdLkTjmQjrcRhbBTB5iyuILD4Ivmdvv0Kbv3h1nDk0EDBN+gkh1xi7CKpaQK1SiuKcuIU89uwSLJPjymxs9rxbR9/YvHr9ZxsPRZSip8s78h3fEcCp6BFZoGRvRpAWJRBhUqp0jBCqxy6FDDpMJA4YWQ8LQoakKPUEZsqwgFN6AJMuQJJlHMRhCMpna52rX02MfPjGEQCgMkWDEE7DtAiwrz59eoVBAPl/OTdPk9ZGCkhKDrKjw+vyIRKNQVRWappN4HArl7H0fdmcHCmazJjmyEE/EEZUkOqLEj8hymf51bNs+8M4OGv8A4/wgqGnsN5AAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"initial form",title:"initial form",src:"/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/b4098/initial-form.png",srcSet:["/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/a2ead/initial-form.png 259w","/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/6b9fd/initial-form.png 518w","/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/b4098/initial-form.png 816w"],sizes:"(max-width: 816px) 100vw, 816px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(i.mdx)("h2",{id:"update-your-form"},"Update your form"),Object(i.mdx)("p",null,"Now that you're up and running, we can add a new page and field to our form. If you open up ",Object(i.mdx)("inlineCode",{parentName:"p"},"src/applications/new-form/config.js"),", you should see a ",Object(i.mdx)("inlineCode",{parentName:"p"},"formConfig")," variable:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const formConfig = {\n  urlPrefix: '/',\n  submitUrl: '/v0/api',\n  trackingPrefix: 'new-form-',\n  introduction: IntroductionPage,\n  confirmation: ConfirmationPage,\n  formId: 'XX-230',\n  version: 0,\n  prefillEnabled: true,\n  savedFormMessages: {\n    notFound: 'Please start over to apply for new form benefits.',\n    noAuth: 'Please sign in again to continue your application for new form benefits.'\n  },\n  title: 'My new form',\n  defaultDefinitions: {\n  },\n  chapters: {\n    chapter1: {\n      title: 'Chapter 1',\n      pages: {\n        page1: {\n          path: 'first-page',\n          title: 'First Page',\n          uiSchema: {\n          },\n          schema: {\n            type: 'object',\n            properties: {\n            }\n          }\n        }\n      }\n    }\n  }\n};\n")),Object(i.mdx)("p",null,"There's a lot of information already there, and you can check out the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/forms/docs/spec"}),"form config specification")," to see what each property means. For now, we're going to look at the content of the form, which lives in ",Object(i.mdx)("inlineCode",{parentName:"p"},"chapters"),"."),Object(i.mdx)("p",null,"At the most basic level, our forms consist of: widgets, fields, pages, and chapters."),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Widgets")," are the basic form controls, things like ",Object(i.mdx)("inlineCode",{parentName:"li"},"<input/>")," and ",Object(i.mdx)("inlineCode",{parentName:"li"},"<select/>")," elements."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Fields")," are the next level up and contain a widget and a ",Object(i.mdx)("inlineCode",{parentName:"li"},"<label/>"),", plus some extra optional description information."),Object(i.mdx)("li",{parentName:"ul"},"We then have ",Object(i.mdx)("strong",{parentName:"li"},"pages"),", which are collections of fields."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Chapters")," are collections of pages.")),Object(i.mdx)("p",null,"We can see in the config that there's already one chapter, with one page inside it, called ",Object(i.mdx)("inlineCode",{parentName:"p"},"page1"),". In the ",Object(i.mdx)("inlineCode",{parentName:"p"},"page1")," object there are a few pieces of information, which we can mostly ignore for now. The important properties for us right now are ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"schema"),". ",Object(i.mdx)("inlineCode",{parentName:"p"},"schema")," is the initial structure of our page, in the form of a ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://spacetelescope.github.io/understanding-json-schema/"}),"JSON Schema"),". This describes the type of data that will result from a user filling in our form. It's also used by the form library to determine what fields and widgets to display in the application, except when overridden by ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema"),". ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema")," is an object that has extra, user interface-focused information to help render the form."),Object(i.mdx)("p",null,"Let's add a property to ",Object(i.mdx)("inlineCode",{parentName:"p"},"schema"),":"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),Object(i.mdx)("p",null,"Now if you go to http://localhost:3001/new-form/first-page you should see this:"),Object(i.mdx)("p",null,Object(i.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"674px"}}),"\n      ",Object(i.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/fdaf8/first-field.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(i.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.21235521235521%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABjElEQVQoz5VT207CQBDt7/gLfoKPPvlJPhufjImJMTHxC8SEi/DAg6JGA0KplmsLxd5o6fZ+3F0ugiLiJqedne7OnDkzFbThANeZG1QqDygWS8jm8qhVq8jlC8gXbtGSW2ArTVNsswTXI6hJLYhyF433Dkdf0/n7lfqZ7ccp4jhBkmwGSyqM/RgdO4JshpCtGO1xAkkPIBkB3owQ4oigPnRB/AABhf8rfJo0hsBoZkUdPc2AqvQgNpvQdR2zOtkD/1k8oGpOYNoOz+K4LoIw3DoAK3MZPKDr2PigrObCMz0Y/b8wP78SkF0mxEcURZwhQxBQTSjITB++91f3HiE86PcJEJhGrINhRD+mrFMJInqQJZoVxf0LLdOvji8zXASMkxSaE8D0IjS0CaSRx+0h9e2fPWP36A4H5y/YO3nEzmEZmfq0YezeuvkUEuqwvZBDsQgGts9ti+KyouK03MPV0wAX9yqOS12acDLVeabZmpIBTXfQVkx0Bxb6FC3FgNwz6PiMKZXoR2eTDX/NJwwxTiJK7BrLAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"first field",title:"first field",src:"/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/fdaf8/first-field.png",srcSet:["/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/a2ead/first-field.png 259w","/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/6b9fd/first-field.png 518w","/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/fdaf8/first-field.png 674w"],sizes:"(max-width: 674px) 100vw, 674px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(i.mdx)("p",null,"That's not the most exciting field, but it's a field! We can add a title to it by adding to ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema"),":"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),Object(i.mdx)("p",null,"That makes it look a little more presentable:"),Object(i.mdx)("p",null,Object(i.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"726px"}}),"\n      ",Object(i.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/f8067/field-with-label.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(i.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.173745173745175%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABR0lEQVQoz52Ru1LDMBBF82mUVHSUfBYFBQUFNQMt/AJDCBlCYKAIJIplY8eOH3r6spKVTAhJw84cr3atvdqVemmlMI5KDKYFRmyJ0bwklnihnOOZ4klaQ0oJIXbg8wLGGDjrNcrilVfof2ZgSYr3rwjTZIG80Z4FUUrtC/5iAwbWtp1gS57lAh9RhuUiBWMMVVniP9aSWM99ZFMj5hF4nPiTHEprKLWB7tABa+1aZEXosPUFWhu/yW8OI1nT5VrCeRvG1OGwleCmeUFX3AgVhDUaqSBpbWjtvItdd8Z0/9VWh78ELSUKYZDR5U8ygbe4Rk4xLxWOzh9xePaAk8shDk7vcXwxgA6X73S2xdYdlkKDLxqwrMY0rRDnDThx1We4fopwO/7GzZDjjrxdC7b7R65qiVlcYJ4UiMjPeE4UyHP32u3O19xnPwcguBF5WOX1AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"field with label",title:"field with label",src:"/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/f8067/field-with-label.png",srcSet:["/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/a2ead/field-with-label.png 259w","/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/6b9fd/field-with-label.png 518w","/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/f8067/field-with-label.png 726w"],sizes:"(max-width: 726px) 100vw, 726px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(i.mdx)("p",null,"Note that ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema")," doesn't follow exactly the same structure as ",Object(i.mdx)("inlineCode",{parentName:"p"},"schema"),": you don't need the ",Object(i.mdx)("inlineCode",{parentName:"p"},"properties")," object. This is because ",Object(i.mdx)("inlineCode",{parentName:"p"},"uiSchema")," treats everything without a ",Object(i.mdx)("inlineCode",{parentName:"p"},"ui:")," prefix as a field name, with one exception for array fields."),Object(i.mdx)("p",null,"Changing the the ",Object(i.mdx)("inlineCode",{parentName:"p"},"type")," property in your field will change the data accepted and also the way it displays on the form. You can change it to be ",Object(i.mdx)("inlineCode",{parentName:"p"},"boolean")," and get a checkbox and ",Object(i.mdx)("inlineCode",{parentName:"p"},"number")," to get a number input. If you want a ",Object(i.mdx)("inlineCode",{parentName:"p"},"select")," box, you use JSON Schema's ",Object(i.mdx)("inlineCode",{parentName:"p"},"enum")," property:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),Object(i.mdx)("p",null,"That will get you a select box with options:"),Object(i.mdx)("p",null,Object(i.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"692px"}}),"\n      ",Object(i.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/91e7e/select-field.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(i.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.64864864864865%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABkklEQVQoz4WSy2rbUBCG/SJd9mmy6+OULgIhWZWWhhIIaV4i1JukpTU4uyRdJG5tp7Vax1Yk62ofXY6kI309VsD4EvDANzMMZ35mmNOQRclvJ6Y3ifk1Seg5KV0dO4+RRtTx1hQEkSTPMlIpkc8wr+d5TgNthpdgODMcf8qD7WJ5IUIWRJmqEVJRqJKy3E4teKun6JoBs8BjYBhYls1zVrHdakGVJYS+Qxj4a+3b0L6qVmjM3cjy+Gs6DDXjScDI9hnbgV7fZ2itMq/Vb3RPkqQL0cWEpSo4aYe8u/A4brnsNV32L1IOvqS8b+UcXRZ8bD9xdKl0LWP3XPL265SpSDYFq6pkMLK46fS5vutzdXfPnwebf3ras6sBh+c/+fS9x8m3Lh903rwxcF0PUx9PKbUpOHdenCP0NYeBpGNFuFGGLBSvP9/zcr/Nq9Mf7Bxf82K3xZtmv24slsXWBWdxxtgRmBrbEzy6UZ07fkQwS1FlRVFWy30rky3Xa8FE5vjTZEGgccMYT0cRy83vs3TV9ZX/A2zA9LrbVn75AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"select field",title:"select field",src:"/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/91e7e/select-field.png",srcSet:["/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/a2ead/select-field.png 259w","/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/6b9fd/select-field.png 518w","/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/91e7e/select-field.png 692w"],sizes:"(max-width: 692px) 100vw, 692px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(i.mdx)("p",null,"Some types of data might have different valid ways of asking the user for input. For example, a field that uses ",Object(i.mdx)("inlineCode",{parentName:"p"},"enum")," could also use radio buttons. You can change that with ",Object(i.mdx)("inlineCode",{parentName:"p"},"ui:widget"),":"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:widget': 'radio'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),Object(i.mdx)("p",null,"Now the form offers two radio buttons to choose from:"),Object(i.mdx)("p",null,Object(i.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"688px"}}),"\n      ",Object(i.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/ebf47/radio-buttons.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(i.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.66795366795367%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABSklEQVQoz52SS0oDQRCG5ypuPIguvJh4BPECXkLcuDALxWx8JSIkxImZ96t7evo5v9UjBEFMTAo+quii/iqqOpgXAm+pwGssME07TIiXiON5xQiOx0+GZSmglUInJeSfKPR9j2BedLib5cjKGosowzIpULUSXFlwacEIaSycc1sZBBNu8BSWEKxGGIb4IIxW2NcCaxTqMkecpNBGrxO+2z4Exlo0jCPPCzRNsxb76Xeb0AuS0CqKaMpkWLw3R2LW/WZbs4BSdEGJlnOIlkP/Y3+bJg+0dWi1Q2d6MPUd+6suyg5Xkww378XA9TTHaFbBuC0TNtIg4RoxU7hf1Fg1CtL2uBxHODi9xdH5A04uxjg8G+GYYv+dNgoqbZGULVIirwRSD8X+bZlzVEKj7gx845bEtu5QaYOYCtOCD0LeRxlDQr6oW1+60w6/AF4XVJjU/erKAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"radio buttons",title:"radio buttons",src:"/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/ebf47/radio-buttons.png",srcSet:["/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/a2ead/radio-buttons.png 259w","/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/6b9fd/radio-buttons.png 518w","/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/ebf47/radio-buttons.png 688w"],sizes:"(max-width: 688px) 100vw, 688px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(i.mdx)("p",null,"You can also mark fields as required, which will prevent you from moving to the next page without filling them out:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:widget': 'radio'\n    }\n  },\n  schema: {\n    type: 'object',\n    required: ['myField'],\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),Object(i.mdx)("p",null,"If you do fill in the required information and click Continue, you'll end up on the review page. The review page for our forms is generated based on your chapters and pages and provides a quick way to review the data that you've entered:"),Object(i.mdx)("p",null,Object(i.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"695px"}}),"\n      ",Object(i.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/83b75/review.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(i.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.46718146718148%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAACCUlEQVQ4y51TS47TQBTM9RBXYMNNuAZCYolGYjcrFhwAkIBBAhSIQ2I7cfy32+2/u12814mTmYFkBC2Vqv0r16v3eiZahbfzEGEYwFousbId/FxY+LFYYOcH+Jc1jiNmvdKIZQutFdquQ13XKAqJqqrQNC2UUmcxDINhrbUR4zWjHdIkxnw+h71eI89zEixQCAFB4OtLSJLE4CjImyRNjeCaBUmEBcWBz0GIAlUpIUWONL0nyJZPOWhz/RD4vUA0WEUVRNPzl1zsXvB+sHocDZ/DZCAsB1hRjbTqTk3hTVmWJoc8Fyboh92NpnlhECCncjU15tQUWlJKI5hlGfp+uNjZqass6HkeiYZkQh3d/1Hy/6w7Y8N/jOMYBbkU1D15YI6B9xPfvi8KsWeaBHY65WcccmYLy4LtOFg7tmHXdWETttstHGK+77iOeeb5O7gb14Cf7XzfxHRsCtv1KdwwipBkqWHO0g9DNHRyqBh09NOWPuqH4c4pmTB1/ZChxtB3KCWVwyVyaVRKV1cYaRxU2VBI6jRWF86xyZDPciZrxLmEnxaIiDM6y1/sGFfvNnj9YYPrmx2uv4b46Ip9E/4ym0eHda+wEy38osOnTQE3a1H3Gi/fe3j84gZPXn3D06vvePT8M569WZoPlT4/GTOeoV/bzMD2MqyILTfBmvZuQINOFTBY5LaTc+s3UHjTqD/l+Q4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"review",title:"review",src:"/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/83b75/review.png",srcSet:["/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/a2ead/review.png 259w","/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/6b9fd/review.png 518w","/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/83b75/review.png 695w"],sizes:"(max-width: 695px) 100vw, 695px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(i.mdx)("p",null,"Note that if you refresh in the middle of the form, your data will be lost and the review page won't have any content to edit."),Object(i.mdx)("p",null,"Once you've reviewed your form, you have to click the checkbox to agree to the privacy policy and then you can submit! For now, though, that Submit button will fail because there's no api to submit the data to."),Object(i.mdx)("p",null,"That's it! Continue on in our documentation to learn about building more complex forms and the whole process for building and submitting a new form."),Object(i.mdx)("p",null,"Next: ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/forms/form-tutorial-intermediate"}),"Intermediate tutorial")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-basic-mdx-d8f422850aa1fd294837.js.map