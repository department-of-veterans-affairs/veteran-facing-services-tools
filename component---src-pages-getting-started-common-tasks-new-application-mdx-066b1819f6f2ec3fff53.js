(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var a=t("q1tI"),o=t.n(a),r=t("8FPV"),c=(t("gu/5"),t("eoYm"),t("v9g0"),t("pJf4"),t("Yk4M")),p=t("Wbzz");function i(){return o.a.createElement(p.StaticQuery,{query:"157057713",render:function(e){return o.a.createElement(m,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})},data:c})}function s(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(p.Link,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function m(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(s,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(m,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(s,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,null)):o.a.createElement(s,{item:e,key:e.name})}))):null}var l=t("MEl4"),u=t.n(l);function d(e){var n=e.location,t=u.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(m,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return o.a.createElement(r.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(d,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}},Pbxj:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i})),t.d(n,"_frontmatter",(function(){return s}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/");var a=t("q1tI"),o=t.n(a),r=t("6qfE"),c=t("3dLD");var p={},i=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=c.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},o.a.createElement("h1",{id:"creating-a-new-application"},"Creating a new application"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Note: Check out the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/getting-started/common-tasks/new-feature"}},"Adding a new feature")," doc to make sure you're trying to add the right type of feature to VA.gov."),o.a.createElement("h2",{id:"yeoman-generator"},"Yeoman generator"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The easiest way to create a new application is with the Yeoman application generator. You can use the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/platform/tools/generator"}},"walkthrough")," to create your own regular or form application. The manual set up process is below, which you can read through to get a better understanding of the different pieces that are needed."),o.a.createElement("h2",{id:"manual-set-up"},"Manual set up"),o.a.createElement(r.MDXTag,{name:"p",components:n},'Here are the steps for manually setting up a new application. We\'re going to walk through setting up an application called "my new application."'),o.a.createElement(r.MDXTag,{name:"ol",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Create a new folder for your application in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/applications/"),". In our case, we're using ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"my-new-application"),":")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"364px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/ff4ea6577c5ba2ce4ec94c9b5de5b2c2/e45a9/new-application-folder.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"114.67181467181466%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"Folder tree with new application folder added",title:"Folder tree with new application folder added",src:"/static/ff4ea6577c5ba2ce4ec94c9b5de5b2c2/e45a9/new-application-folder.png",srcSet:"/static/ff4ea6577c5ba2ce4ec94c9b5de5b2c2/a2ead/new-application-folder.png 259w,\n/static/ff4ea6577c5ba2ce4ec94c9b5de5b2c2/e45a9/new-application-folder.png 364w",sizes:"(max-width: 364px) 100vw, 364px",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px"},loading:"lazy"})))),o.a.createElement(r.MDXTag,{name:"ol",components:n,props:{start:2}},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Add a manifest.json file in the new folder. This file contains important information about your application:")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},'{\n  // Name of your application, not Veteran facing\n  "appName": "My new application",\n  // The Webpack entry point to the bundle for your application\n  "entryFile": "./my-new-application-entry.jsx",\n  // The Webpack bundle name for your app. Must be unique.\n  "entryName": "my-new-application",\n  // The root url where your application lives\n  // This one is only used by webpack-dev-server for local development\n  "rootUrl": "/my-new-application",\n}\n')),o.a.createElement(r.MDXTag,{name:"ol",components:n,props:{start:3}},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Add an entry to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/applications/registry.json"),". This file contains information that the content build needs to create the landing page for your application:")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},'{\n  // Name of your application, not Veteran facing\n  "appName": "My new application",\n  // The Webpack bundle name for your app. Must be unique.\n  "entryName": "my-new-application",\n  // The root url where your application lives\n  "rootUrl": "/my-new-application",\n  // Properties specific to rendering your application\'s HTML landing page\n  "template": {\n    // Document title\n    "title": "My new application",\n    // Standard Metalsmith Liquid template for React applications\n    "layout": "page-react.html",\n    // <meta name="description">\n    "description": "A new application!",\n    // <meta name="keywords">\n    "keywords": "not required, but good practice for public apps",\n    // A feature flag, indicating that this application is excluded from production builds\n    "vagovprod" false\n  }\n}\n')),o.a.createElement(r.MDXTag,{name:"ol",components:n,props:{start:4}},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Create the file you referenced in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"entryFile")," property above:")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import 'platform/polyfills';\nimport './sass/my-new-application.scss';\n\nimport startApp from '../../platform/startup';\n\nimport routes from './routes';\nimport reducer from './reducers';\nimport manifest from './manifest';\n\nstartApp({\n  url: manifest.rootUrl,\n  reducer,\n  routes,\n  entryName: manifest.entryName,\n});\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"This file uses our ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"startApp")," helper to create a React/Redux app that has client-side routes handled with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"react-router"),". You can leave out the routes or reducer if you don't need Redux or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"react-router"),". There's also a reference to a Sass file, which will set up the styles for your application."),o.a.createElement(r.MDXTag,{name:"ol",components:n,props:{start:5}},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Create Sass file (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/applications/my-new-application/sass/my-new-application.sass"),"):")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-scss"}},'@import "~@department-of-veterans-affairs/formation/sass/shared-variables";\n\n// Your custom sass\n')),o.a.createElement(r.MDXTag,{name:"ol",components:n,props:{start:6}},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Create reducer (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/applications/my-new-application/reducers/index.js"),"):")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const initialState = {\n  // whatever initial state you have\n};\n\nfunction myNewApplication(state = initialState, action) {\n  switch (action.type) {\n    case SOME_ACTION:\n      return state;\n    default:\n      return state;\n  }\n}\n\nexport default {\n  myNewApplication\n};\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"This is a normal Redux reducer, and can be broken up into different state slices as needed. The only thing to note is that it needs to return an object, not a function. This object will get merged with other state data and then turned into a function using Redux's ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"combineReducers")," function."),o.a.createElement(r.MDXTag,{name:"ol",components:n,props:{start:7}},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Create routes file (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/applications/my-new-application/routes.jsx"),"):")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import React from 'react';\nimport { Route, IndexRedirect } from 'react-router';\n\nimport MyPage from './containers/MyPage.jsx';\nimport MyNewApplicationApp from './containers/MyNewApplicationApp.jsx';\n\nconst routes = (\n  <Route path=\"/\" component={MyNewApplicationApp}>\n    <Route component={MyPage} path=\"my-page\"></Route>\n    <IndexRedirect to=\"my-page\" />\n  </Route>\n);\n\nexport default routes;\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can add new pages and whatever routed components you need in this file."),o.a.createElement(r.MDXTag,{name:"p",components:n},"And that's it! If you fill out the routes.jsx file with pages that exist, you should be able to start up VA.gov and see it working locally."),o.a.createElement("h2",{id:"going-to-production"},"Going to production"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The above steps will only enable your application in our staging and dev environments. In order to enable it in production, you'll have to remove the feature flag added into your application's ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"manifest.json"),"."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},'{\n  "appName": "My new application",\n  "entryFile": "./my-new-application-entry.jsx",\n  "entryName": "my-new-application",\n  "rootUrl": "/my-new-application",\n  "template": {\n    "title": "My new application",\n    "layout": "page-react.html",\n    "description": "A new application!",\n    "keywords": "not required, but good practice for public apps",\n\n    // ALLOW THIS TO SHIP TO PRODUCTION BY REMOVING LINE BELOW\n    // "vagovprod" false\n  }\n}\n')))},a}(o.a.Component),s={}},Yk4M:function(e){e.exports=JSON.parse('{"data":{"components":{"edges":[{"node":{"path":"/visual-design/components/accepttermsprompt/","context":{"source":"component","name":"AcceptTermsPrompt"}}},{"node":{"path":"/visual-design/components/additionalinfo/","context":{"source":"component","name":"AdditionalInfo"}}},{"node":{"path":"/visual-design/components/alertbox/","context":{"source":"component","name":"AlertBox"}}},{"node":{"path":"/visual-design/components/breadcrumbs/","context":{"source":"component","name":"Breadcrumbs"}}},{"node":{"path":"/visual-design/components/collapsiblepanel/","context":{"source":"component","name":"CollapsiblePanel"}}},{"node":{"path":"/visual-design/components/dropdownpanel/","context":{"source":"component","name":"DropDownPanel"}}},{"node":{"path":"/visual-design/components/errorablecheckboxgroup/","context":{"source":"component","name":"ErrorableCheckboxGroup"}}},{"node":{"path":"/visual-design/components/errorabledate/","context":{"source":"component","name":"ErrorableDate"}}},{"node":{"path":"/visual-design/components/errorablecheckbox/","context":{"source":"component","name":"ErrorableCheckbox"}}},{"node":{"path":"/visual-design/components/errorablefileinput/","context":{"source":"component","name":"ErrorableFileInput"}}},{"node":{"path":"/visual-design/components/errorablemonthyear/","context":{"source":"component","name":"ErrorableMonthYear"}}},{"node":{"path":"/visual-design/components/errorablenumberinput/","context":{"source":"component","name":"ErrorableNumberInput"}}},{"node":{"path":"/visual-design/components/errorableradiobuttons/","context":{"source":"component","name":"ErrorableRadioButtons"}}},{"node":{"path":"/visual-design/components/errorableselect/","context":{"source":"component","name":"ErrorableSelect"}}},{"node":{"path":"/visual-design/components/errorabletextarea/","context":{"source":"component","name":"ErrorableTextArea"}}},{"node":{"path":"/visual-design/components/expandinggroup/","context":{"source":"component","name":"ExpandingGroup"}}},{"node":{"path":"/visual-design/components/helpmenu/","context":{"source":"component","name":"HelpMenu"}}},{"node":{"path":"/visual-design/components/iconbase/","context":{"source":"component","name":"IconBase"}}},{"node":{"path":"/visual-design/components/errorabletextinput/","context":{"source":"component","name":"ErrorableTextInput"}}},{"node":{"path":"/visual-design/components/iconsearch/","context":{"source":"component","name":"IconSearch"}}},{"node":{"path":"/visual-design/components/iconhelp/","context":{"source":"component","name":"IconHelp"}}},{"node":{"path":"/visual-design/components/iconuser/","context":{"source":"component","name":"IconUser"}}},{"node":{"path":"/visual-design/components/pagination/","context":{"source":"component","name":"Pagination"}}},{"node":{"path":"/visual-design/components/ombinfo/","context":{"source":"component","name":"OMBInfo"}}},{"node":{"path":"/visual-design/components/loadingindicator/","context":{"source":"component","name":"LoadingIndicator"}}},{"node":{"path":"/visual-design/components/progressbar/","context":{"source":"component","name":"ProgressBar"}}},{"node":{"path":"/visual-design/components/privacyagreement/","context":{"source":"component","name":"PrivacyAgreement"}}},{"node":{"path":"/visual-design/components/progressbutton/","context":{"source":"component","name":"ProgressButton"}}},{"node":{"path":"/visual-design/components/promobanner/","context":{"source":"component","name":"PromoBanner"}}},{"node":{"path":"/visual-design/components/searchmenu/","context":{"source":"component","name":"SearchMenu"}}},{"node":{"path":"/visual-design/components/segmentedprogressbar/","context":{"source":"component","name":"SegmentedProgressBar"}}},{"node":{"path":"/visual-design/components/sortabletable/","context":{"source":"component","name":"SortableTable"}}},{"node":{"path":"/visual-design/components/modal/","context":{"source":"component","name":"Modal"}}},{"node":{"path":"/visual-design/components/systemdownview/","context":{"source":"component","name":"SystemDownView"}}},{"node":{"path":"/visual-design/components/megamenu/","context":{"source":"component","name":"MegaMenu"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-application-mdx-066b1819f6f2ec3fff53.js.map