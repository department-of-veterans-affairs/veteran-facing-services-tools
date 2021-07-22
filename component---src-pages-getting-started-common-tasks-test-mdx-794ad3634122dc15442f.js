(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),i=n.n(a),r=n("FRpb");function l(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var b=n("8FPV");function c(e){var t=e.children,n=e.location,a=e.pageContext;return i.a.createElement(b.a,{location:n},i.a.createElement("div",{className:"vads-l-row site-l-wrapper"},i.a.createElement(r.a,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(l,{sourceUrl:a.sourceUrl}))))}},FRpb:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),i=n.n(a),r=n("Wbzz");function l(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(r.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function b(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(l,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(b,{isSublist:!0,items:e.items})):i.a.createElement(l,{item:e,key:e.name})}))):null}var c=n("MEl4"),s=n.n(c);function o(e){var t=e.location,n=s.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(b,{items:n.items}))):null}},l9yS:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return o}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),r=n("3dLD"),l=["components"],b={},c={_frontmatter:b},s=r.a;function o(e){var t=e.components,n=Object(a.a)(e,l);return Object(i.b)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"running-tests"},"Running tests"),Object(i.b)("p",null,"You can run the following types of tests when building on VA.gov."),Object(i.b)("h2",{id:"prerequisite"},"Prerequisite"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/veteran-facing-services-tools/getting-started/common-tasks/run-build"},"Run or build")," the application.")),Object(i.b)("h2",{id:"test-commands"},"Test commands"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Test type"),Object(i.b)("th",{parentName:"tr",align:null},"Test all"),Object(i.b)("th",{parentName:"tr",align:null},"Test one"),Object(i.b)("th",{parentName:"tr",align:null},"Requires local build to run"),Object(i.b)("th",{parentName:"tr",align:null},"Test target"),Object(i.b)("th",{parentName:"tr",align:null},"Modules used"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Unit"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"yarn test:unit")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"yarn test:unit ./PATH-TO-TEST-FILE")),Object(i.b)("td",{parentName:"tr",align:null},"no"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"*.unit.spec.js(x)")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://mochajs.org/"},"Mocha"),", ",Object(i.b)("a",{parentName:"td",href:"http://chaijs.com/"},"Chai"),", ",Object(i.b)("a",{parentName:"td",href:"https://sinonjs.org/"},"Sinon"),", ",Object(i.b)("a",{parentName:"td",href:"https://github.com/jsdom/jsdom"},"JSDom"),", ",Object(i.b)("a",{parentName:"td",href:"https://airbnb.io/enzyme/"},"Enzyme"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Lint"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"yarn lint")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"yarn lint:js")," or ",Object(i.b)("inlineCode",{parentName:"td"},"yarn lint:sass")),Object(i.b)("td",{parentName:"tr",align:null},"no"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"*.js"),", ",Object(i.b)("inlineCode",{parentName:"td"},"*.scss")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://eslint.org/"},"ESLint"),", ",Object(i.b)("a",{parentName:"td",href:"https://prettier.io/"},"Prettier"),", ",Object(i.b)("a",{parentName:"td",href:"https://github.com/sasstools/sass-lint"},"sass-lint"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"End to end"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"yarn test:e2e")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"yarn test:e2e ./PATH-TO-TEST-FILE")),Object(i.b)("td",{parentName:"tr",align:null},"yes"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"*.e2e.spec.js")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"http://nightwatchjs.org/"},"Nightwatch.js"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Accessibility"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"yarn test:accessibility")),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"yes"),Object(i.b)("td",{parentName:"tr",align:null},"all pages in ",Object(i.b)("inlineCode",{parentName:"td"},"sitemap.xml")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"http://nightwatchjs.org/"},"Nightwatch.js"))))),Object(i.b)("h2",{id:"requires-local-build-or-run"},"Requires local build or run"),Object(i.b)("p",null,"Some tests require ",Object(i.b)("a",{parentName:"p",href:"/veteran-facing-services-tools/getting-started/common-tasks/run-build"},"running or building")," VA.gov:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Testing while running ",Object(i.b)("inlineCode",{parentName:"strong"},"watch")," task"),": Tests will automatically be run against the site running on that server."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Testing with a local build"),": If nothing is running at ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:3001")," (",Object(i.b)("inlineCode",{parentName:"li"},"vets-website")," testing) or, ",Object(i.b)("inlineCode",{parentName:"li"},"http://localhost:3002")," (",Object(i.b)("inlineCode",{parentName:"li"},"content-build")," testing), tests start an Express server and serve the build output in ",Object(i.b)("inlineCode",{parentName:"li"},"build/localhost"),".")),Object(i.b)("h2",{id:"unit-tests"},"Unit tests"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run all ",Object(i.b)("a",{parentName:"li",href:"https://mochajs.org/"},"Mocha"),"/",Object(i.b)("a",{parentName:"li",href:"http://chaijs.com/"},"Chai"),"/",Object(i.b)("a",{parentName:"li",href:"https://sinonjs.org/"},"Sinon"),"-based unit tests with the file extension ",Object(i.b)("inlineCode",{parentName:"li"},".unit.spec.js(x)")),Object(i.b)("li",{parentName:"ul"},"Use ",Object(i.b)("a",{parentName:"li",href:"https://github.com/jsdom/jsdom"},"JSDom")," and ",Object(i.b)("a",{parentName:"li",href:"https://airbnb.io/enzyme/"},"Enzyme")," to test browser and React behavior"),Object(i.b)("li",{parentName:"ul"},"Are located in ",Object(i.b)("inlineCode",{parentName:"li"},"test/")," directories near the code they're testing in ",Object(i.b)("inlineCode",{parentName:"li"},"src/"))),Object(i.b)("h2",{id:"linting"},"Linting"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Verify consistency of JavaScript"),Object(i.b)("li",{parentName:"ul"},"Enforce code formatting rules"),Object(i.b)("li",{parentName:"ul"},"Automatically run on ",Object(i.b)("inlineCode",{parentName:"li"},"git commit")," as a precommit hook")),Object(i.b)("p",null,"Set up your editor to show ESLint errors automatically as you're writing code. This makes the linter far less annoying in day to day use. ESLint has ",Object(i.b)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/integrations"},"integrations")," for nearly all popular editors."),Object(i.b)("h2",{id:"end-to-end-tests"},"End to end tests"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run all ",Object(i.b)("a",{parentName:"li",href:"http://nightwatchjs.org/"},"Nightwatch.js")," tests in headless Chrome with the file extension ",Object(i.b)("inlineCode",{parentName:"li"},".e2e.spec.js")),Object(i.b)("li",{parentName:"ul"},"Simulate an actual user completing tasks in the tools and services"),Object(i.b)("li",{parentName:"ul"},"Are located in ",Object(i.b)("inlineCode",{parentName:"li"},"test/")," directories near the application they're testing in ",Object(i.b)("inlineCode",{parentName:"li"},"src/"))),Object(i.b)("p",null,"End to end tests will only pass if they are run against their mock API server. This server is started by the end to end test automatically when vets-api is ",Object(i.b)("strong",{parentName:"p"},"not")," running."),Object(i.b)("h2",{id:"accessibility-tests"},"Accessibility tests"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A variation of e2e tests that run aXe against the content pages running in Chrome.")))}o.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-test-mdx-794ad3634122dc15442f.js.map