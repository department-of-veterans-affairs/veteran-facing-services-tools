(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{285:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return g});a(42);var n=a(43),o=a.n(n),r=a(3),i=a.n(r),m=a(2),s=a.n(m),c=a(4),l=a(317),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return s.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},s.a.createElement(c.MDXTag,{name:"h2",components:t},"Form Tutorial - Basic"),s.a.createElement(c.MDXTag,{name:"h4",components:t},"Creating Your First Form"),s.a.createElement(c.MDXTag,{name:"p",components:t},"In this doc, we'll walk through creating a new form and making some simple changes."),s.a.createElement(c.MDXTag,{name:"h2",components:t},"Setting up"),s.a.createElement(c.MDXTag,{name:"p",components:t},"If you haven't already, get ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website"}},"vets-website")," set up and running on your machine."),s.a.createElement(c.MDXTag,{name:"p",components:t},"The first step after that is to get the basic scaffolding set up for a new application. We have a ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/GeneratorOptions.md"}},"generator tool")," to help you set up the files needed for the new React app and form. In the root of ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vets-website"),", you should install and run Yeoman and the generator:"),s.a.createElement(c.MDXTag,{name:"pre",components:t},s.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash"}},"npm install -g yo\nnpm install -g @department-of-veterans-affairs/generator-vets-website\n\nyo @department-of-veterans-affairs/vets-website\n")),s.a.createElement(c.MDXTag,{name:"p",components:t},"You can answer the questions with the ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/GeneratorOptions.md"}},"documentation")," as a guide, or if you're just looking to try things out, here are the answers I'm using for this tutorial:"),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"What's the name of your application? This will be the default page title. ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"My new form")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"What folder in ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"src/applications/")," should your app live in? This can be a subfolder. ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"new-form")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"What should be the name of your app's entry bundle? ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"newForm")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"What's the root url for this app? ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/new-form")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Is this a form app? ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"Y")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"What's your form number? ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"XX-230")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"What's the Google Analytics event prefix you want to use? ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"new-form-")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"What's the respondent burden of this form in minutes? ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"30")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"What's the OMB control number for this form? ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"XX3344")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"What's the OMB expiration date (in M/D/YYYY format) for this form? ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"5/31/2018")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"What's the benefit description for this form? ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"new form benefits")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Which form template would you like to start with? ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"Choose 'BLANK: A form without any fields'"))),s.a.createElement(c.MDXTag,{name:"p",components:t},"After you run the generator, run ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn watch")," (or restart it if you already had it running) and navigate to ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://localhost:3001/new-form"}},"http://localhost:3001/new-form"),". You should see something like this:"),s.a.createElement(c.MDXTag,{name:"p",components:t},s.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/ac127/initial-form.png",style:{display:"block"},target:"_blank",rel:"noopener"},s.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"816px"}},s.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"94.36274509803923%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),s.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"initial form",title:"",src:"/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/ac127/initial-form.png",srcSet:"/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/f4a45/initial-form.png 259w,\n/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/ef0f6/initial-form.png 518w,\n/veteran-facing-services-tools/static/627b2f096a0dfa6590c45a87621b3406/ac127/initial-form.png 816w",sizes:"(max-width: 816px) 100vw, 816px"})))),s.a.createElement(c.MDXTag,{name:"h2",components:t},"Updating your form"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Now that you're up and running, we can add a new page and field to our form. If you open up ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/applications/new-form/config.js"),", you should see a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"formConfig")," variable:"),s.a.createElement(c.MDXTag,{name:"pre",components:t},s.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"const formConfig = {\n  urlPrefix: '/',\n  submitUrl: '/v0/api',\n  trackingPrefix: 'new-form-',\n  introduction: IntroductionPage,\n  confirmation: ConfirmationPage,\n  formId: 'XX-230',\n  version: 0,\n  prefillEnabled: true,\n  savedFormMessages: {\n    notFound: 'Please start over to apply for new form benefits.',\n    noAuth: 'Please sign in again to continue your application for new form benefits.'\n  },\n  title: 'My new form',\n  defaultDefinitions: {\n  },\n  chapters: {\n    chapter1: {\n      title: 'Chapter 1',\n      pages: {\n        page1: {\n          path: 'first-page',\n          title: 'First Page',\n          uiSchema: {\n          },\n          schema: {\n            type: 'object',\n            properties: {\n            }\n          }\n        }\n      }\n    }\n  }\n};\n")),s.a.createElement(c.MDXTag,{name:"p",components:t},"There's a lot of information already there, and you can check out the ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/usds/us-forms-system/tree/master/docs"}},"form config specifications")," to see what each property means. For now, we're going to look at the content of the form, which lives in ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"chapters"),"."),s.a.createElement(c.MDXTag,{name:"p",components:t},"At the most basic level, our forms consist of: widgets, fields, pages, and chapters."),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Widgets")," are the basic form controls, things like ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"<input/>")," and ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"<select/>")," elements."),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Fields")," are the next level up and contain a widget and a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"<label/>"),", plus some extra optional description information."),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"We then have ",s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"pages"),", which are collections of fields."),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Chapters")," are collections of pages.")),s.a.createElement(c.MDXTag,{name:"p",components:t},"We can see in the config that there's already one chapter, with one page inside it, called ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"page1"),". In the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"page1")," object there are a few pieces of information, which we can mostly ignore for now. The important properties for us right now are ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"uiSchema")," and ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"schema"),". ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"schema")," is the initial structure of our page, in the form of a ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://spacetelescope.github.io/understanding-json-schema/"}},"JSON Schema"),". This describes the type of data that will result from a user filling in our form. It's also used by the form library to determine what fields and widgets to display in the application, except when overridden by ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"uiSchema"),". ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"uiSchema")," is an object that has extra, user interface-focused information to help render the form."),s.a.createElement(c.MDXTag,{name:"p",components:t},"Let's add a property to ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"schema"),":"),s.a.createElement(c.MDXTag,{name:"pre",components:t},s.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:t},"Now if you go to ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://localhost:3001/new-form/first-page"}},"http://localhost:3001/new-form/first-page")," you should see this:"),s.a.createElement(c.MDXTag,{name:"p",components:t},s.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/61857/first-field.png",style:{display:"block"},target:"_blank",rel:"noopener"},s.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"674px"}},s.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.34124629080118%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),s.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"first field",title:"",src:"/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/61857/first-field.png",srcSet:"/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/f4a45/first-field.png 259w,\n/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/ef0f6/first-field.png 518w,\n/veteran-facing-services-tools/static/65b5f11ebcfadc7831092f6c2aa79637/61857/first-field.png 674w",sizes:"(max-width: 674px) 100vw, 674px"})))),s.a.createElement(c.MDXTag,{name:"p",components:t},"That's not the most exciting field, but it's a field! We can add a title to it by adding to ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"uiSchema"),":"),s.a.createElement(c.MDXTag,{name:"pre",components:t},s.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:t},"That makes it look a little more presentable:"),s.a.createElement(c.MDXTag,{name:"p",components:t},s.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/8d582/field-with-label.png",style:{display:"block"},target:"_blank",rel:"noopener"},s.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"726px"}},s.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.3168044077135%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),s.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"field with label",title:"",src:"/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/8d582/field-with-label.png",srcSet:"/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/f4a45/field-with-label.png 259w,\n/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/ef0f6/field-with-label.png 518w,\n/veteran-facing-services-tools/static/8110d69efa83f373f2423126a7269553/8d582/field-with-label.png 726w",sizes:"(max-width: 726px) 100vw, 726px"})))),s.a.createElement(c.MDXTag,{name:"p",components:t},"Note that ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"uiSchema")," doesn't follow exactly the same structure as ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"schema"),": you don't need the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"properties")," object. This is because ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"uiSchema")," treats everything without a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ui:")," prefix as a field name, with one exception for array fields."),s.a.createElement(c.MDXTag,{name:"p",components:t},"Changing the the ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"type")," property in your field will change the data accepted and also the way it displays on the form. You can change it to be ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"boolean")," and get a checkbox and ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"number")," to get a number input. If you want a ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"select")," box, you use JSON Schema's ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"enum")," property:"),s.a.createElement(c.MDXTag,{name:"pre",components:t},s.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:t},"That will get you a select box with options:"),s.a.createElement(c.MDXTag,{name:"p",components:t},s.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/cbf4c/select-field.png",style:{display:"block"},target:"_blank",rel:"noopener"},s.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"692px"}},s.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.55491329479769%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),s.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"select field",title:"",src:"/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/cbf4c/select-field.png",srcSet:"/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/f4a45/select-field.png 259w,\n/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/ef0f6/select-field.png 518w,\n/veteran-facing-services-tools/static/dbf48af7f1578ec6af86a6dfb0f4389d/cbf4c/select-field.png 692w",sizes:"(max-width: 692px) 100vw, 692px"})))),s.a.createElement(c.MDXTag,{name:"p",components:t},"Some types of data might have different valid ways of asking the user for input. For example, a field that uses ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"enum")," could also use radio buttons. You can change that with ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ui:widget"),":"),s.a.createElement(c.MDXTag,{name:"pre",components:t},s.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:widget': 'radio'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:t},"Now the form offers two radio buttons to choose from:"),s.a.createElement(c.MDXTag,{name:"p",components:t},s.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/4f3bc/radio-buttons.png",style:{display:"block"},target:"_blank",rel:"noopener"},s.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"688px"}},s.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.48837209302325%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),s.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"radio buttons",title:"",src:"/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/4f3bc/radio-buttons.png",srcSet:"/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/f4a45/radio-buttons.png 259w,\n/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/ef0f6/radio-buttons.png 518w,\n/veteran-facing-services-tools/static/eca115081f915c328f66dd7d97edb9c3/4f3bc/radio-buttons.png 688w",sizes:"(max-width: 688px) 100vw, 688px"})))),s.a.createElement(c.MDXTag,{name:"p",components:t},"You can also mark fields as required, which will prevent you from moving to the next page without filling them out:"),s.a.createElement(c.MDXTag,{name:"pre",components:t},s.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:widget': 'radio'\n    }\n  },\n  schema: {\n    type: 'object',\n    required: ['myField'],\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),s.a.createElement(c.MDXTag,{name:"p",components:t},"If you do fill in the required information and click Continue, you'll end up on the review page. The review page for our forms is generated based on your chapters and pages and provides a quick way to review the data that you've entered:"),s.a.createElement(c.MDXTag,{name:"p",components:t},s.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/e6592/review.png",style:{display:"block"},target:"_blank",rel:"noopener"},s.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"695px"}},s.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.43884892086331%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),s.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"review",title:"",src:"/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/e6592/review.png",srcSet:"/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/f4a45/review.png 259w,\n/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/ef0f6/review.png 518w,\n/veteran-facing-services-tools/static/45223130f8b3010e7fd768288ea3799f/e6592/review.png 695w",sizes:"(max-width: 695px) 100vw, 695px"})))),s.a.createElement(c.MDXTag,{name:"p",components:t},"Note that if you refresh in the middle of the form, your data will be lost and the review page won't have any content to edit."),s.a.createElement(c.MDXTag,{name:"p",components:t},"Once you've reviewed your form, you have to click the checkbox to agree to the privacy policy and then you can submit! For now, though, that Submit button will fail because there's no api to submit the data to."),s.a.createElement(c.MDXTag,{name:"p",components:t},"That's it! Continue on in our documentation to learn about building more complex forms and the whole process for building and submitting a new form."),s.a.createElement("hr",null),s.a.createElement(c.MDXTag,{name:"p",components:t},"Next: ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"./form-tutorial-intermediate"}},"Vets Website Form Tutorial - Intermediate")))},t}(s.a.Component),g={}},312:function(e,t,a){var n;e.exports=(n=a(314))&&n.default||n},313:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},314:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),i=a.n(r),m=a(13),s=a.n(m),c=a(94),l=a(9),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,o()({location:t,pageResources:a},a.json))};p.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=p},315:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},316:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Start up guide",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Accessing internal tools",href:"getting-started/internal-tools"},{name:"VA.gov environments",href:"getting-started/environments"},{name:"Development workflow",href:"getting-started/workflow"},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},317:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(313),i=a(2),m=a.n(i),s=a(13),c=a.n(s),l=a(318),p=a.n(l),d=a(68),g=a.n(d),f=(a(312),m.a.createContext({})),u=function(e){return m.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):m.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};a(17),a(133),a(134),a(135);var h=a(315);function b(){return m.a.createElement(u,{query:"157057713",render:function(e){return m.a.createElement(y,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:h})}function y(e){var t=e.items;return t.length?m.a.createElement("ul",{className:"menu-list"},t.map(function(e){return m.a.createElement("li",{key:e.name},!!e.items&&m.a.createElement("li",{key:e.name},m.a.createElement("h4",null,e.name),m.a.createElement(y,{items:e.items})),"componentList"===e.query&&m.a.createElement("li",{key:e.name},m.a.createElement("h4",null,e.name),m.a.createElement(b,null)),!!e.href&&m.a.createElement("li",{key:e.name},m.a.createElement(g.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&m.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var E=a(316),w=a.n(E);function v(e){var t=e.location,a=w.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return m.a.createElement("aside",{className:"sidebar"},m.a.createElement("div",{className:"search"},m.a.createElement("div",{className:"input-wrap"},m.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!a&&m.a.createElement(m.a.Fragment,null,m.a.createElement("h1",null,a.name),m.a.createElement(g.a,{className:"home-link",to:""},"Home"),m.a.createElement(y,{items:a.items})),!a&&m.a.createElement("ul",{className:"menu-list"},w.a.sections.map(function(e){return m.a.createElement("li",{key:e.id},m.a.createElement(g.a,{to:e.href},e.name))})))}a(319);var x=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return m.a.createElement(u,{query:"1044757290",render:function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},m.a.createElement("html",{lang:"en"})),m.a.createElement(v,{location:a}),m.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(m.a.Component);x.propTypes={children:c.a.node.isRequired};t.a=x}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-basic-mdx-f6a8289f6b43752e7f4c.js.map