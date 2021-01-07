(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a("q1tI"),i=a.n(n),o=a("Wbzz");function r(){return i.a.createElement(o.StaticQuery,{query:"68798663",render:function(e){return i.a.createElement(l,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function c(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(o.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},n&&i.a.createElement(c,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?i.a.createElement("li",{key:e.name},n&&i.a.createElement(c,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(r,null)):i.a.createElement(c,{item:e,key:e.name})}))):null}var s=a("MEl4"),p=a.n(s);function m(e){var t=e.location,a=p.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(l,{items:a.items}))):null}function d(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var u=a("8FPV");function g(e){var t=e.children,a=e.location,n=e.pageContext;return i.a.createElement(u.a,{location:a},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(m,{location:a}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(d,{sourceUrl:n.sourceUrl}))))}},Pbxj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("3dLD"),r={},c={_frontmatter:r},l=o.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.mdx)(l,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"creating-a-new-application"},"Creating a new application"),Object(i.mdx)("p",null,"Note: Check out the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/getting-started/common-tasks/new-feature"}),"Adding a new feature")," doc to make sure you're trying to add the right type of feature to VA.gov."),Object(i.mdx)("h2",{id:"yeoman-generator"},"Yeoman generator"),Object(i.mdx)("p",null,"The easiest way to create a new application is with the Yeoman application generator. You can use the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/platform/tools/generator"}),"walkthrough")," to create your own regular or form application. The manual set up process is below, which you can read through to get a better understanding of the different pieces that are needed."),Object(i.mdx)("h2",{id:"manual-set-up"},"Manual set up"),Object(i.mdx)("p",null,'Here are the steps for manually setting up a new application. We\'re going to walk through setting up an application called "my new application."'),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},"Create a new folder for your application in ",Object(i.mdx)("inlineCode",{parentName:"li"},"src/applications/"),". In our case, we're using ",Object(i.mdx)("inlineCode",{parentName:"li"},"my-new-application"),":")),Object(i.mdx)("p",null,Object(i.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"364px"}}),"\n      ",Object(i.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/1436ab06bca80c351965f89c14d0f33e/e45a9/new-application-folder.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(i.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"114.67181467181466%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAIAAACEf/j0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC70lEQVQ4y3VU23KjOhD0X2zZSBohJEBgwIABYYPv16zLsXcf9vz/l5yRKzknmziqKT1QtKbV3aOBSkums2F3DcvVGBi4rsv5e4Hdv1+DQEkQHuiMNidnfqH1npVL2uxIexmaU5Y2Pp7mCuGKZ2A/sKergGUti1ui5yTuwU+4VNwPpRAecwQwjvUEHCAYXOHxIKZJN6yuJFmAnrCkYnHBkpplc5pUkc7klzu8gz1kntJySWZnWvSk2vL2LLKW5D01Z6fo47iQ/FuwhGhC896ZX+l0O6p28aQLgNr/gUrkzOGBFM/BPEyQrdP+pPWBTte0WJB6R8yJti+50tIqDy6wbzqHKcs7p3sl8ytpjqQ+4hFsMnMWv1i1Jc1hVB9k3qUygHf6H8A6Q8EfsAOpNsSccaflyqn3Tr1j3S2OJq6vlRD8CW1UG/v0N1aukO1o/Qf5E3MU9V7GBc9ajf98Q1vZzvkCaaNspD2R9sVyrrc6mys0Uni4f/bZ9/33zmOICjK/ABqbNYjnGDvk3JxG5uCaY6o0/G3WIIoiDm9gp1gmRa9twq0lgpGHvA97xLN4Xl9fndFISAVxYeWtdjQuad6x6cZpDm61Tn1tqT0djDzPgbH/1Z79jHXmqhCCGL+40cQXAi1+DlZK2RhZnxOWNmz2ooME/AjTCuGYhYkM4uCDPZ8FA7wY0rZgg9445Wq0+M3MCer9cH7RxdK32RTul6kchGEo8OCHYDyeku4C05UzXSWTWUR+WGM5FlgosE/owXqzWa/XnvL9bOqZvddsxOzkru5evWW7f9zlTfRXb3YUy7u7vFe5iTAY4dsapGmqsblUbpxD0dPFnZcrZvasPaeZkZ4nbEl8G0QQKel7H5YV7E3tMKHFEkeSYDDMkXY3Na5oio/BjMbTKBhLRoD/9Z58nOfcBnP2Qss1ac84GDQxGDhqTjgbuuiFr7ECIb8OhofzbGeoewV8gNBwc4TUOP0d6cC4HPa3UXuW9S6V/n8h/Rf1XtrG74Cy1QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"Folder tree with new application folder added",title:"Folder tree with new application folder added",src:"/veteran-facing-services-tools/static/1436ab06bca80c351965f89c14d0f33e/e45a9/new-application-folder.png",srcSet:["/veteran-facing-services-tools/static/1436ab06bca80c351965f89c14d0f33e/a2ead/new-application-folder.png 259w","/veteran-facing-services-tools/static/1436ab06bca80c351965f89c14d0f33e/e45a9/new-application-folder.png 364w"],sizes:"(max-width: 364px) 100vw, 364px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(i.mdx)("ol",{start:2},Object(i.mdx)("li",{parentName:"ol"},"Add a manifest.json file in the new folder. This file contains important information about your application:")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'{\n  // Name of your application, not Veteran facing\n  "appName": "My new application",\n  // The Webpack entry point to the bundle for your application\n  "entryFile": "./my-new-application-entry.jsx",\n  // The Webpack bundle name for your app. Must be unique.\n  "entryName": "my-new-application",\n  // The root url where your application lives\n  // This one is only used by webpack-dev-server for local development\n  "rootUrl": "/my-new-application",\n}\n')),Object(i.mdx)("ol",{start:3},Object(i.mdx)("li",{parentName:"ol"},"Add an entry to ",Object(i.mdx)("inlineCode",{parentName:"li"},"src/applications/registry.json"),". This file contains information that the content build needs to create the landing page for your application:")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'{\n  // Name of your application, not Veteran facing\n  "appName": "My new application",\n  // The Webpack bundle name for your app. Must be unique.\n  "entryName": "my-new-application",\n  // The root url where your application lives\n  "rootUrl": "/my-new-application",\n  // Properties specific to rendering your application\'s HTML landing page\n  "template": {\n    // Document title\n    "title": "My new application",\n    // Standard Metalsmith Liquid template for React applications\n    "layout": "page-react.html",\n    // <meta name="description">\n    "description": "A new application!",\n    // <meta name="keywords">\n    "keywords": "not required, but good practice for public apps",\n    // A feature toggle, indicating that this application is excluded from production builds\n    "vagovprod" false\n  }\n}\n')),Object(i.mdx)("ol",{start:4},Object(i.mdx)("li",{parentName:"ol"},"Create the file you referenced in the ",Object(i.mdx)("inlineCode",{parentName:"li"},"entryFile")," property above:")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import 'platform/polyfills';\nimport './sass/my-new-application.scss';\n\nimport startApp from 'platform/startup';\n\nimport routes from './routes';\nimport reducer from './reducers';\nimport manifest from './manifest';\n\nstartApp({\n  url: manifest.rootUrl,\n  reducer,\n  routes,\n  entryName: manifest.entryName,\n});\n")),Object(i.mdx)("p",null,"This file uses our ",Object(i.mdx)("inlineCode",{parentName:"p"},"startApp")," helper to create a React/Redux app that has client-side routes handled with ",Object(i.mdx)("inlineCode",{parentName:"p"},"react-router"),". You can leave out the routes or reducer if you don't need Redux or ",Object(i.mdx)("inlineCode",{parentName:"p"},"react-router"),". There's also a reference to a Sass file, which will set up the styles for your application."),Object(i.mdx)("ol",{start:5},Object(i.mdx)("li",{parentName:"ol"},"Create Sass file (",Object(i.mdx)("inlineCode",{parentName:"li"},"src/applications/my-new-application/sass/my-new-application.sass"),"):")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),'@import "~@department-of-veterans-affairs/formation/sass/shared-variables";\n\n// Your custom sass\n')),Object(i.mdx)("ol",{start:6},Object(i.mdx)("li",{parentName:"ol"},"Create reducer (",Object(i.mdx)("inlineCode",{parentName:"li"},"src/applications/my-new-application/reducers/index.js"),"):")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"\nconst initialState = {\n  // whatever initial state you have\n};\n\nfunction myNewApplication(state = initialState, action) {\n  switch (action.type) {\n    case SOME_ACTION:\n      return state;\n    default:\n      return state;\n  }\n}\n\nexport default {\n  myNewApplication\n};\n")),Object(i.mdx)("p",null,"This is a normal Redux reducer, and can be broken up into different state slices as needed. The only thing to note is that it needs to return an object, not a function. This object will get merged with other state data and then turned into a function using Redux's ",Object(i.mdx)("inlineCode",{parentName:"p"},"combineReducers")," function."),Object(i.mdx)("ol",{start:7},Object(i.mdx)("li",{parentName:"ol"},"Create routes file (",Object(i.mdx)("inlineCode",{parentName:"li"},"src/applications/my-new-application/routes.jsx"),"):")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { Route, IndexRedirect } from 'react-router';\n\nimport MyPage from './containers/MyPage.jsx';\nimport MyNewApplicationApp from './containers/MyNewApplicationApp.jsx';\n\nconst routes = (\n  <Route path=\"/\" component={MyNewApplicationApp}>\n    <Route component={MyPage} path=\"my-page\"></Route>\n    <IndexRedirect to=\"my-page\" />\n  </Route>\n);\n\nexport default routes;\n")),Object(i.mdx)("p",null,"You can add new pages and whatever routed components you need in this file."),Object(i.mdx)("p",null,"And that's it! If you fill out the routes.jsx file with pages that exist, you should be able to start up VA.gov and see it working locally."),Object(i.mdx)("h2",{id:"going-to-production"},"Going to production"),Object(i.mdx)("p",null,"The above steps will only enable your application in our staging and dev environments. In order to enable it in production, you'll have to remove the feature toggle added into your application's entry in the ",Object(i.mdx)("inlineCode",{parentName:"p"},"registry.json"),"."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'{\n  "appName": "My new application",\n  "entryName": "my-new-application",\n  "rootUrl": "/my-new-application",\n  "template": {\n    "title": "My new application",\n    "layout": "page-react.html",\n    "description": "A new application!",\n    "keywords": "not required, but good practice for public apps",\n\n    // ALLOW THIS TO SHIP TO PRODUCTION BY SETTING THIS TO TRUE\n    "vagovprod" false\n  }\n}\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-application-mdx-53a2eb1ab0a15edb6d7e.js.map