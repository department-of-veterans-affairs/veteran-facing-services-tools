(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),o=a.n(n),r=a("FRpb");function i(e){var t=e.sourceUrl;return t?o.a.createElement("div",null,o.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",o.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var s=a("8FPV");function c(e){var t=e.children,a=e.location,n=e.pageContext;return o.a.createElement(s.a,{location:a},o.a.createElement("div",{className:"vads-l-row site-l-wrapper"},o.a.createElement(r.a,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,o.a.createElement(i,{sourceUrl:n.sourceUrl}))))}},FRpb:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("q1tI"),o=a.n(n),r=a("Wbzz");function i(e){var t=e.item;return t.href?o.a.createElement("li",{key:t.name},o.a.createElement(r.Link,{to:t.href},t.name)):o.a.createElement("li",{key:t.name},t.name," (future)")}function s(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?o.a.createElement("li",{key:e.name},n&&o.a.createElement(i,{item:e}),!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(s,{isSublist:!0,items:e.items})):o.a.createElement(i,{item:e,key:e.name})}))):null}var c=a("MEl4"),l=a.n(c);function b(e){var t=e.location,a=l.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(s,{items:a.items}))):null}},Wgst:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("3dLD"),i=["components"],s={},c={_frontmatter:s},l=r.a;function b(e){var t=e.components,a=Object(n.a)(e,i);return Object(o.b)(l,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"vetsgov-front-end-best-practices-wip"},"vets.gov Front End Best Practices (WIP)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Last Updated:")," April 28, 2017"),Object(o.b)("div",{className:"deprecation-message"},Object(o.b)("h2",null,"We're moving our docs!"),Object(o.b)("h3",null,"Find ",Object(o.b)("a",{href:"https://depo-platform-documentation.scrollhelp.site/developer-docs/Best-practices.1824489781.html"},"the latest version of this page")," on the Platform website."),Object(o.b)("h3",null,"Still can't find what you're looking for? Reach out to ",Object(o.b)("a",{href:"https://dsva.slack.com/archives/CBU0KDSB1"},"#vfs-platform-support")," on Slack.")),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"This is an initial pass at the best practices followed in vets.gov front-end development."),Object(o.b)("h3",{id:"objective"},"Objective"),Object(o.b)("p",null,"To promote a consistent approach to vets.gov front-end development by outlining an evolving set of best practices."),Object(o.b)("h3",{id:"background"},"Background"),Object(o.b)("p",null,"Over the last year, we have launched a number of different single-page React/Redux apps on vets.gov, in addition to building digital forms using a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mozilla-services/react-jsonschema-form"},"form-builder library")," that reuses the same code to run multiple React apps for different forms. This document is an attempt to begin collecting best practices for React/Redux development that the team has and continues to lean toward when architecting and developing front-end applications."),Object(o.b)("h3",{id:"high-order-guidelines"},"High Order Guidelines"),Object(o.b)("p",null,"This is a placeholder for any high-level paradigms we settle on. For now, it's merely a laundry list of debatable topics:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"PropTypes"),": we try to define PropTypes to make it easier for newcomers to understand what can be passed to a component."),Object(o.b)("li",{parentName:"ul"},"What to put into a selector vs. reducer vs. action"),Object(o.b)("li",{parentName:"ul"},"How we map backend data to the state?")),Object(o.b)("h3",{id:"reactredux-guidelines"},"React/Redux Guidelines"),Object(o.b)("h4",{id:"components-vs-containers"},"Components vs. containers"),Object(o.b)("p",null,"A common React/Redux application architecture is to divide your React components into two types: regular components and container components. These are also sometimes referred to as a dumb and smart components. Container components connect to the Redux store using the ",Object(o.b)("inlineCode",{parentName:"p"},"react-redux")," library's ",Object(o.b)("inlineCode",{parentName:"p"},"connect")," function and map a specific part of the state object to the props of a React component. Regular components are just plain React components; they take in props and they can have internal state (though we generally avoid this; see below)."),Object(o.b)("p",null,"In general, we try to use regular components whenever possible and only a few container components. The reason for this is because tying a component to the Redux store couples it to a particular slice of the state of your application, as well as coupling it to a particular way of organizing your state. So refactoring a lot of container components can be difficult. Debugging can also be difficult with a lot of container components, because they interrupt the usual flow of data down through components. Instead of all data being passed down via props from a single component at the top of the component tree, intermediate components might pull in different parts of the Redux state and pass down that data as props to other components, creating a mix of data combined from different connections to the Redux state."),Object(o.b)("p",null,'There are benefits to using container components, though. It can be painful to pass lots of props all the way down to the leaf components in a component tree and container components allow you to "reset" and grab specific data from the store without all that wiring. They can also improve performance, because passing props down from the root of the component tree means that all intermediate components will re-render whenever data changes. Container components can send data down to their children without all the parents of the container component re-rendering.'),Object(o.b)("p",null,"On vets.gov, we normally use a single container component per page (or independent widget, like login), and only use other container components if there's a compelling reason for doing so. Our apps have a ",Object(o.b)("inlineCode",{parentName:"p"},"containers")," folder and a ",Object(o.b)("inlineCode",{parentName:"p"},"components")," folder that we divide components between."),Object(o.b)("h4",{id:"using-setstate-in-react-components"},"Using setState in React components"),Object(o.b)("p",null,"We also generally avoid ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," inside regular components. This isn't because ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," is bad, necessarily, but because it can be hard to track down data changes due to ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," when you're expecting all changes to go through the single Redux store. It can also be tricky to keep that state in sync with the data from the Redux store passed in as props. So, when we do use ",Object(o.b)("inlineCode",{parentName:"p"},"setState"),", it's typically for ephemeral UI state, or state that would be more difficult to follow if it were put in the store and passed down through props."),Object(o.b)("p",null,"Keep in mind that these are general conventions, not iron-clad rules, and we should revist them as we gain more experience using React and Redux."),Object(o.b)("h3",{id:"existing-guides-and-tools"},"Existing Guides and Tools"),Object(o.b)("p",null,"We have a set of ",Object(o.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/.eslintrc"},"ESLint rules")," that extend the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/airbnb/javascript"},"AirBnB style guide")," and also use the ",Object(o.b)("a",{parentName:"p",href:"https://prettier.io"},"Prettier")," ",Object(o.b)("a",{parentName:"p",href:"https://prettier.io/docs/en/eslint.html"},"ESLint rules"),". There is a pre-commit hook that prevents committing code that fails the ESLint rules. Developers should all be using ESLint plugins in their dev environments to catch lint-able things. In lieu of using an ESLint editor plugin, developers can run the ",Object(o.b)("inlineCode",{parentName:"p"},"lint:js:fix")," or ",Object(o.b)("inlineCode",{parentName:"p"},"lint:js:changed:fix")," NPM scripts to fix all errors that ESLint can auto-fix."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"TODO: list any notable exceptions here.")),Object(o.b)("h3",{id:"project-structure-and-code-location"},"Project Structure and Code Location"),Object(o.b)("p",null,"The structure of our React app's is described in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/StartANewReactApp.md"},"How to Start a New ReactJS Project")),Object(o.b)("p",null,"A number (and soon all) of our forms use the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mozilla-services/react-jsonschema-form"},Object(o.b)("inlineCode",{parentName:"a"},"react-json-schemaform"))," (or rjsf) library. To learn more about those, see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/walkthrough.md"},"schemaform walkthrough")," and this ",Object(o.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/form-config.md"},"form config cookbook"),"."),Object(o.b)("h3",{id:"related-documents"},"Related Documents"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/veteran-facing-services-tools/Work%20Practices/Engineering/DocumentedDecisions/Redux.md"},"Using Redux"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/StartANewReactApp.md"},"How to Start a New ReactJS Project"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/walkthrough.md"},"Schemaform walkthrough"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/form-config.md"},"Form config cookbook")),Object(o.b)("p",{parentName:"li"},"Existing posts/articles on best practices that we may or may not agree with but can pull topics from:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://medium.com/@nesbtesh/react-best-practices-a76fd0fbef21"},"React best practices")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e"},"Redux best practices")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/react-architecture.md"},"Long list of links about react architecture and best practices")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://reactrocket.com/post/react-redux-optimization/"},"Redux isn't slow, you're just doing it wrong - An optimization guide"))))),Object(o.b)("h3",{id:"revision-history"},"Revision History"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Date"),Object(o.b)("th",{parentName:"tr",align:null},"Revisions Made"),Object(o.b)("th",{parentName:"tr",align:null},"Author"),Object(o.b)("th",{parentName:"tr",align:null},"Reviewed By"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"March 1, 2017"),Object(o.b)("td",{parentName:"tr",align:null},"Skeleton document based on outline of ",Object(o.b)("a",{parentName:"td",href:"Javascript/Node.js.md"},"Node.js Best Practices")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"April 28, 2017"),Object(o.b)("td",{parentName:"tr",align:null},"Pulled in content from discussion in ",Object(o.b)("a",{parentName:"td",href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/659"},"#659")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"May 17, 2017"),Object(o.b)("td",{parentName:"tr",align:null},"Added information about React component types and ",Object(o.b)("inlineCode",{parentName:"td"},"setState")," usage"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})))))}b.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-react-mdx-fd0be7f6ec9100a4247c.js.map