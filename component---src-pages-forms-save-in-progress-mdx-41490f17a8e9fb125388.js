(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"Pt+v":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p})),t.d(a,"_frontmatter",(function(){return c}));t("rGqo"),t("yt8O"),t("RW0V"),t("a1Th"),t("Btvt"),t("I5cv"),t("91GP");var n=t("q1tI"),o=t.n(n),r=t("6qfE"),s=t("3dLD");var i={},p=function(e){var a,t;t=e,(a=p).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var n;n=p;function p(a){var t;return(t=e.call(this,a)||this).layout=s.a,t}return p.prototype.render=function(){var e=this.props,a=e.components,t=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,t),components:a},o.a.createElement("h1",{id:"setting-up-save-in-progress"},"Setting up Save in Progress"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Previous: ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"./form-tutorial-advanced"}},"Advanced tutorial")),o.a.createElement(r.MDXTag,{name:"p",components:a},"Forms on VA.gov support the ability to save them while in progress to a user's account and resume them later. Enabling Save in Progress requires"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Configuring naming and messaging options in the ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"form config"),"."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Making the Save In Progress form retrievable on the ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"user profile")," page."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Adding links to the Save In Progress on ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"static pages"),".")),o.a.createElement("h2",{id:"form-config"},"Form config"),o.a.createElement(r.MDXTag,{name:"p",components:a},"There are several configuration options related to Save in Progress (SiP)."),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"const formConfig = {\n  formId: '1010ez',\n  version: 0,\n  prefillEnabled: true,\n  savedFormMessages: {\n    notFound: 'Please start over to apply for health care.',\n    noAuth: 'Please sign in again to resume your application for health care.'\n  },\n  ...\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"This is from our health care application. The most important piece of information is ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"formId"),", which is the key that will be used to save the form data on the backend. Once you choose this, you can't change it in production. We also set a version, typically to 0, which can be incremented if you need to migrate form data in production."),o.a.createElement(r.MDXTag,{name:"p",components:a},"There are also a couple of messages you can set, which show up in various places on the form (primarily on the intro page)."),o.a.createElement("h2",{id:"user-profile"},"User profile"),o.a.createElement(r.MDXTag,{name:"p",components:a},"You will also need to make a couple changes in the user profile code, so that your form can show up in the list of saved forms on the account page. In ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"src/applications/personalization/dashboard/helpers.jsx"),", you should add your form to the four configuration objects: ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"formBenefits"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"formLinks"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"trackingPrefixes"),", and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"sipEnabledForms"),". The information for each of these should be in your form config file."),o.a.createElement("h2",{id:"static-pages"},"Static pages"),o.a.createElement(r.MDXTag,{name:"p",components:a},'Your form will likely be linked somewhere in the static content for VA.gov. In those places, we have the ability to replace something like an "Apply now" button with a widget to resume or start over an in progress form.'),o.a.createElement(r.MDXTag,{name:"p",components:a},"In your content page, you can add front matter to set up a widget:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-yaml"}},"widgets:\n  - root: react-applicationStatus\n    timeout: 20\n    loadingMessage: Checking your application status.\n    errorMessage: <strong>We’re sorry. Something went wrong when we tried to load your saved application.</strong<br/>Please try refreshing your browser in a few minutes.\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"And somewhere in the file, where you want the widget to show up:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-html"}},'<div id="react-applicationStatus" class="static-page-widget" data-widget-type="health-care-app-status">\n  <a class="usa-button-primary va-button-primary" href="/health-care/apply/application/">Apply for Health Care Benefits</a>\n</div>\n')),o.a.createElement(r.MDXTag,{name:"p",components:a},"Note that the id matches the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"root")," property in the front matter. This is the link that will show up will the Javascript code is loading or if it fails to load."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Also note the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"data-widget-type")," property. You'll need make that custom for your form and add it to the list in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"src/applications/static-pages/widgetTypes.js"),"."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Once that's done, you can open up the static pages entry file at ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"src/applications/static-pages/static-pages-entry.js")," and make your changes. Here's an example for the healh care application:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"createApplicationStatus(store, {\n  formId: '1010ez',\n  additionalText: 'You can start your online application right now.',\n  applyLink: '/health-care/apply/',\n  applyText: 'Apply for Health Care Benefits',\n  widgetType: widgetTypes.HEALTH_CARE_APP_STATUS,\n});\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"The main things to note are that the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"widgetType")," should match the one you added to the widget types list. The code block also has some configuration options for your form that should be easy to get from the form config object."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Once you've got all that set up, your form should appear on the profile page:"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"742px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/c4cfadd1397d5ae008a696654cfc4997/0f2bc/saved_form.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.123552123552116%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"saved form",title:"saved form",src:"/veteran-facing-services-tools/static/c4cfadd1397d5ae008a696654cfc4997/0f2bc/saved_form.png",srcSet:"/veteran-facing-services-tools/static/c4cfadd1397d5ae008a696654cfc4997/a2ead/saved_form.png 259w,\n/veteran-facing-services-tools/static/c4cfadd1397d5ae008a696654cfc4997/6b9fd/saved_form.png 518w,\n/veteran-facing-services-tools/static/c4cfadd1397d5ae008a696654cfc4997/0f2bc/saved_form.png 742w",sizes:"(max-width: 742px) 100vw, 742px",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px"},loading:"lazy"})))),o.a.createElement(r.MDXTag,{name:"p",components:a},"Next: ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"./forms/forms-in-production"}},"Forms in production")))},p}(o.a.Component),c={}}}]);
//# sourceMappingURL=component---src-pages-forms-save-in-progress-mdx-41490f17a8e9fb125388.js.map