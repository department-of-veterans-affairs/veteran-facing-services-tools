(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),i=n.n(a),o=n("FRpb");function r(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var l=n("8FPV");function c(e){var t=e.children,n=e.location,a=e.pageContext;return i.a.createElement(l.a,{location:n},i.a.createElement("div",{className:"vads-l-row site-l-wrapper"},i.a.createElement(o.a,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(r,{sourceUrl:a.sourceUrl}))))}},FRpb:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),i=n.n(a),o=n("Wbzz");function r(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(o.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(r,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(l,{isSublist:!0,items:e.items})):i.a.createElement(r,{item:e,key:e.name})}))):null}var c=n("MEl4"),p=n.n(c);function s(e){var t=e.location,n=p.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(l,{items:n.items}))):null}},Pbxj:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("3dLD"),r=["components"],l={},c={_frontmatter:l},p=o.a;function s(e){var t=e.components,n=Object(a.a)(e,r);return Object(i.b)(p,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"creating-a-new-application"},"Creating a new application"),Object(i.b)("div",{className:"deprecation-message"},Object(i.b)("h2",null,"We're moving our docs!"),Object(i.b)("h3",null,"Find ",Object(i.b)("a",{href:"https://depo-platform-documentation.scrollhelp.site/developer-docs/Creating-a-new-application.1847525496.html"},"the latest version of this page")," on the Platform website."),Object(i.b)("h3",null,"Still can't find what you're looking for? Reach out to ",Object(i.b)("a",{href:"https://dsva.slack.com/archives/CBU0KDSB1"},"#vfs-platform-support")," on Slack.")),Object(i.b)("p",null,"Note: Check out the ",Object(i.b)("a",{parentName:"p",href:"/getting-started/common-tasks/new-feature"},"Adding a new feature")," doc to make sure you're trying to add the right type of feature to VA.gov."),Object(i.b)("h2",{id:"yeoman-generator"},"Yeoman generator"),Object(i.b)("p",null,"The easiest way to create a new application is with the Yeoman application generator. You can use the ",Object(i.b)("a",{parentName:"p",href:"/platform/tools/generator"},"walkthrough")," to create your own regular or form application. The manual set up process is below, which you can read through to get a better understanding of the different pieces that are needed."),Object(i.b)("h2",{id:"manual-set-up"},"Manual set up"),Object(i.b)("p",null,'Here are the steps for manually setting up a new application. We\'re going to walk through setting up an application called "my new application."'),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a new folder for your application in ",Object(i.b)("inlineCode",{parentName:"li"},"src/applications/"),". In our case, we're using ",Object(i.b)("inlineCode",{parentName:"li"},"my-new-application"),":")),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"364px"}},"\n      ",Object(i.b)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/1436ab06bca80c351965f89c14d0f33e/e45a9/new-application-folder.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",Object(i.b)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"114.67181467181466%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAIAAACEf/j0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9UlEQVQ4y3WU6ZKrNhCF/RYpW0tLQgIEBgwYEJvxbjzX5SX5kbz/k6Tkmknmzni6VPzio1vn9GGi4pzqZNpd/Xw9Bwqcc8Y+DtjnzzXxlAThgE5INaL2QsoDzQdS7XF9mZoxiSuXc8aF4OIV7Hr268qjSU3DGusWhz24EZOKub4UwqFIAGVA2QvY8xgDLhzmhSTqpsUVRyvQCxoVNMxoVNKkJVER6ER+u8MH7DigY5IPuDmTrMfFjtVnkdQ47Yk5o6wPw0yyH2EJwYKkPWqvZLmbFftw0XlA7PtAJFDG4EmK1zDzI9ALVP8i5ZEsNyRb4XKPzUjqt1RpaZUHDvSHzn5M0w51N9xecXXC5YksN3TRoNWftNjh6jgrjzLtYunBx/ifYJ3QpH5iR1xssTnjYkvyNSoPqNzT7h4GC+5qJQR7MbYXkkWD+jvN19iMs83fpDxicxLlQYYZS2rtSPbD2Mp2Tleou5G0x/WI6zc7c7nTSauEw4SjhPPVZ9d1PzrPIchwe4GkJUmF65HphJQHVI0zc+TmFCsNv5s1CYKAwTuMsiHKem033FoiKH7K+7RHvFrP6+2GZjMhFYSZlbfYkzAnaUeXW1QdebGJXW1HexmMNE2B0v/Vbn6FOuHKBy8EnfBg4QoB/HW2Jkopu0bW54jGFW3etBeBG4COwZ9TP5Je6H2y56tgAJRL9YQNNieUr2erv6gZoTxM24vOBtfupuDfUjnxfV8IwZ6CsXCJuwss12i5jhZNgP+wxjLKGVgU6Bd6stluN5uNo1w3WTrm4FRb0Yx8/XDKHd3/w4e76K9OcxLDgw+PIjWB53n+e03iONa+L6TiYQpZT1YPlq+pOdD6HCdGOo6wRzKphBco6Tqfygr2rrYfkWxA7RWXB2ROpLureUHikiYNCZeBN5cUA/vtf/I5z6ldzOaN5Btcn7E5k8jg9kLMiMqDznrhauFqT8jvwXCYH9kMdTeICmu4OUFsUP8g2QDzfNrfZ/VZlvtYuv9F8l/1XtrGyGdvDwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"Folder tree with new application folder added",title:"Folder tree with new application folder added",src:"/static/1436ab06bca80c351965f89c14d0f33e/e45a9/new-application-folder.png",srcSet:["/static/1436ab06bca80c351965f89c14d0f33e/a2ead/new-application-folder.png 259w","/static/1436ab06bca80c351965f89c14d0f33e/e45a9/new-application-folder.png 364w"],sizes:"(max-width: 364px) 100vw, 364px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Add a manifest.json file in the new folder. This file contains important information about your application:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'{\n  // Name of your application, not Veteran facing\n  "appName": "My new application",\n  // The Webpack entry point to the bundle for your application\n  "entryFile": "./my-new-application-entry.jsx",\n  // The Webpack bundle name for your app. Must be unique.\n  "entryName": "my-new-application",\n  // The root url where your application lives\n  // This one is only used by webpack-dev-server for local development\n  "rootUrl": "/my-new-application",\n}\n')),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Add an entry to ",Object(i.b)("inlineCode",{parentName:"li"},"src/applications/registry.json")," in the ",Object(i.b)("inlineCode",{parentName:"li"},"content-build")," directory. This file contains information that the content build needs to create the landing page for your application:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'{\n  // Name of your application, not Veteran facing\n  "appName": "My new application",\n  // The Webpack bundle name for your app. Must be unique.\n  "entryName": "my-new-application",\n  // The root url where your application lives\n  "rootUrl": "/my-new-application",\n  // Properties specific to rendering your application\'s HTML landing page\n  "template": {\n    // Document title\n    "title": "My new application",\n    // Standard Metalsmith Liquid template for React applications\n    "layout": "page-react.html",\n    // <meta name="description">\n    "description": "A new application!",\n    // <meta name="keywords">\n    "keywords": "not required, but good practice for public apps",\n    // A feature toggle, indicating that this application is excluded from production builds\n    "vagovprod" false\n  }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," If you don't want to add your application to the application registry, but still want your application's tests to run in CI, you'll need to add an entry to ",Object(i.b)("inlineCode",{parentName:"p"},"src/applications/registry.scaffold.json")," instead."),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Create the file you referenced in the ",Object(i.b)("inlineCode",{parentName:"li"},"entryFile")," property above:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import 'platform/polyfills';\nimport './sass/my-new-application.scss';\n\nimport startApp from 'platform/startup';\n\nimport routes from './routes';\nimport reducer from './reducers';\nimport manifest from './manifest';\n\nstartApp({\n  url: manifest.rootUrl,\n  reducer,\n  routes,\n  entryName: manifest.entryName,\n});\n")),Object(i.b)("p",null,"This file uses our ",Object(i.b)("inlineCode",{parentName:"p"},"startApp")," helper to create a React/Redux app that has client-side routes handled with ",Object(i.b)("inlineCode",{parentName:"p"},"react-router"),". You can leave out the routes or reducer if you don't need Redux or ",Object(i.b)("inlineCode",{parentName:"p"},"react-router"),". There's also a reference to a Sass file, which will set up the styles for your application."),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Create Sass file (",Object(i.b)("inlineCode",{parentName:"li"},"src/applications/my-new-application/sass/my-new-application.sass"),"):")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scss"},'@import "~@department-of-veterans-affairs/formation/sass/shared-variables";\n\n// Your custom sass\n')),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"Create reducer (",Object(i.b)("inlineCode",{parentName:"li"},"src/applications/my-new-application/reducers/index.js"),"):")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"\nconst initialState = {\n  // whatever initial state you have\n};\n\nfunction myNewApplication(state = initialState, action) {\n  switch (action.type) {\n    case SOME_ACTION:\n      return state;\n    default:\n      return state;\n  }\n}\n\nexport default {\n  myNewApplication\n};\n")),Object(i.b)("p",null,"This is a normal Redux reducer, and can be broken up into different state slices as needed. The only thing to note is that it needs to return an object, not a function. This object will get merged with other state data and then turned into a function using Redux's ",Object(i.b)("inlineCode",{parentName:"p"},"combineReducers")," function."),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"Create routes file (",Object(i.b)("inlineCode",{parentName:"li"},"src/applications/my-new-application/routes.jsx"),"):")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Route, IndexRedirect } from 'react-router';\n\nimport MyPage from './containers/MyPage.jsx';\nimport MyNewApplicationApp from './containers/MyNewApplicationApp.jsx';\n\nconst routes = (\n  <Route path=\"/\" component={MyNewApplicationApp}>\n    <Route component={MyPage} path=\"my-page\"></Route>\n    <IndexRedirect to=\"my-page\" />\n  </Route>\n);\n\nexport default routes;\n")),Object(i.b)("p",null,"You can add new pages and whatever routed components you need in this file."),Object(i.b)("p",null,"And that's it! If you fill out the routes.jsx file with pages that exist, you should be able to start up VA.gov and see it working locally."),Object(i.b)("h2",{id:"going-to-production"},"Going to production"),Object(i.b)("p",null,"The above steps will only enable your application in our staging and dev environments. In order to enable it in production, you'll have to remove the feature toggle added into your application's entry in the ",Object(i.b)("inlineCode",{parentName:"p"},"registry.json"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'{\n  "appName": "My new application",\n  "entryName": "my-new-application",\n  "rootUrl": "/my-new-application",\n  "template": {\n    "title": "My new application",\n    "layout": "page-react.html",\n    "description": "A new application!",\n    "keywords": "not required, but good practice for public apps",\n\n    // ALLOW THIS TO SHIP TO PRODUCTION BY SETTING THIS TO TRUE\n    "vagovprod" false\n  }\n}\n')))}s.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-application-mdx-fbb585b1aab50ed431b6.js.map