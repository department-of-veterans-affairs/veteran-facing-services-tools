(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{Pbxj:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return c})),n.d(a,"_frontmatter",(function(){return s}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var t=n("q1tI"),o=n.n(t),r=n("6qfE"),p=n("3dLD");var i={},c=function(e){var a,n;function t(a){var n;return(n=e.call(this,a)||this).layout=p.a,n}return n=e,(a=t).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n,t.prototype.render=function(){var e=this.props,a=e.components,n=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,n),components:a},o.a.createElement("h1",{id:"creating-a-new-application"},"Creating a new application"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Note: Check out the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/veteran-facing-services-tools/getting-started/common-tasks/new-feature"}},"Adding a new feature")," doc to make sure you're trying to add the right type of feature to VA.gov."),o.a.createElement("h2",{id:"yeoman-generator"},"Yeoman generator"),o.a.createElement(r.MDXTag,{name:"p",components:a},"The easiest way to create a new application is with the Yeoman application generator. You can use the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/veteran-facing-services-tools/platform/tools/generator"}},"walkthrough")," to create your own regular or form application. The manual set up process is below, which you can read through to get a better understanding of the different pieces that are needed."),o.a.createElement("h2",{id:"manual-set-up"},"Manual set up"),o.a.createElement(r.MDXTag,{name:"p",components:a},'Here are the steps for manually setting up a new application. We\'re going to walk through setting up an application called "my new application."'),o.a.createElement(r.MDXTag,{name:"ol",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Create a new folder for your application in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"src/applications/"),". In our case, we're using ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"my-new-application"),":")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"364px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/ff4ea6577c5ba2ce4ec94c9b5de5b2c2/e45a9/new-application-folder.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"114.83516483516483%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"Folder tree with new application folder added",title:"Folder tree with new application folder added",src:"/veteran-facing-services-tools/static/ff4ea6577c5ba2ce4ec94c9b5de5b2c2/e45a9/new-application-folder.png",srcSet:"/veteran-facing-services-tools/static/ff4ea6577c5ba2ce4ec94c9b5de5b2c2/a2ead/new-application-folder.png 259w,\n/veteran-facing-services-tools/static/ff4ea6577c5ba2ce4ec94c9b5de5b2c2/e45a9/new-application-folder.png 364w",sizes:"(max-width: 364px) 100vw, 364px",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px"},loading:"lazy"})))),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:2}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Add a manifest.json file in the new folder. This file contains important information about your application:")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},'{\n  // Name of your application, not Veteran facing\n  "appName": "My new application",\n  // The Webpack entry point to the bundle for your application\n  "entryFile": "./my-new-application-entry.jsx",\n  // The Webpack bundle name for your app. Must be unique.\n  "entryName": "my-new-application",\n  // The root url where your application lives\n  "rootUrl": "/my-new-application",\n  // Properties specific to rendering your application\'s HTML landing page\n  "template": {\n    // Document title\n    "title": "My new application",\n    // Standard Metalsmith Liquid template for React applications\n    "layout": "page-react.html",\n    // <meta name="description">\n    "description": "A new application!",\n    // <meta name="keywords">\n    "keywords": "not required, but good practice for public apps",\n    // A feature flag, indicating that this application is excluded from production builds\n    "vagovprod" false\n  }\n}\n')),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:3}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Create the file you referenced in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"entryFile")," property above:")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx"}},"import 'platform/polyfills';\nimport './sass/my-new-application.scss';\n\nimport startApp from '../../platform/startup';\n\nimport routes from './routes';\nimport reducer from './reducers';\nimport manifest from './manifest';\n\nstartApp({\n  url: manifest.rootUrl,\n  reducer,\n  routes,\n  entryName: manifest.entryName,\n});\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"This file uses our ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"startApp")," helper to create a React/Redux app that has client-side routes handled with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-router"),". You can leave out the routes or reducer if you don't need Redux or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-router"),". There's also a reference to a Sass file, which will set up the styles for your application."),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:4}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Create Sass file (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"src/applications/my-new-application/sass/my-new-application.sass"),"):")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-scss"}},'@import "~@department-of-veterans-affairs/formation/sass/shared-variables";\n\n// Your custom sass\n')),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:5}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Create reducer (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"src/applications/my-new-application/reducers/index.js"),"):")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"const initialState = {\n  // whatever initial state you have\n};\n\nfunction myNewApplication(state = initialState, action) {\n  switch (action.type) {\n    case SOME_ACTION:\n      return state;\n    default:\n      return state;\n  }\n}\n\nexport default {\n  myNewApplication\n};\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"This is a normal Redux reducer, and can be broken up into different state slices as needed. The only thing to note is that it needs to return an object, not a function. This object will get merged with other state data and then turned into a function using Redux's ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"combineReducers")," function."),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:6}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Create routes file (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"src/applications/my-new-application/routes.jsx"),"):")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx"}},"import React from 'react';\nimport { Route, IndexRedirect } from 'react-router';\n\nimport MyPage from './containers/MyPage.jsx';\nimport MyNewApplicationApp from './containers/MyNewApplicationApp.jsx';\n\nconst routes = (\n  <Route path=\"/\" component={MyNewApplicationApp}>\n    <Route component={MyPage} path=\"my-page\"></Route>\n    <IndexRedirect to=\"my-page\" />\n  </Route>\n);\n\nexport default routes;\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"You can add new pages and whatever routed components you need in this file."),o.a.createElement(r.MDXTag,{name:"p",components:a},"And that's it! If you fill out the routes.jsx file with pages that exist, you should be able to start up VA.gov and see it working locally."),o.a.createElement("h2",{id:"going-to-production"},"Going to production"),o.a.createElement(r.MDXTag,{name:"p",components:a},"The above steps will only enable your application in our staging and dev environments. In order to enable it in production, you'll have to remove the feature flag added into your application's ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"manifest.json"),"."),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},'{\n  "appName": "My new application",\n  "entryFile": "./my-new-application-entry.jsx",\n  "entryName": "my-new-application",\n  "rootUrl": "/my-new-application",\n  "template": {\n    "title": "My new application",\n    "layout": "page-react.html",\n    "description": "A new application!",\n    "keywords": "not required, but good practice for public apps",\n\n    // ALLOW THIS TO SHIP TO PRODUCTION BY REMOVING LINE BELOW\n    // "vagovprod" false\n  }\n}\n')))},t}(o.a.Component),s={}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-application-mdx-c38bd9d4838790131150.js.map