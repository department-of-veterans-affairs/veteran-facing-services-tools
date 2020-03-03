(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{Wgst:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p})),a.d(t,"_frontmatter",(function(){return c}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP");var n=a("q1tI"),o=a.n(n),r=a("6qfE"),m=a("3dLD");var s={},p=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).layout=m.a,a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,a),components:t},o.a.createElement("h1",{id:"vetsgov-front-end-best-practices-wip"},"vets.gov Front End Best Practices (WIP)"),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"Last Updated:")," April 28, 2017"),o.a.createElement("h2",{id:"overview"},"Overview"),o.a.createElement(r.MDXTag,{name:"p",components:t},"This is an initial pass at the best practices followed in vets.gov front-end development."),o.a.createElement("h3",{id:"objective"},"Objective"),o.a.createElement(r.MDXTag,{name:"p",components:t},"To promote a consistent approach to vets.gov front-end development by outlining an evolving set of best practices."),o.a.createElement("h3",{id:"background"},"Background"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Over the last year, we have launched a number of different single-page React/Redux apps on vets.gov, in addition to building digital forms using a ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form"}},"form-builder library")," that reuses the same code to run multiple React apps for different forms. This document is an attempt to begin collecting best practices for React/Redux development that the team has and continues to lean toward when architecting and developing front-end applications."),o.a.createElement("h3",{id:"high-order-guidelines"},"High Order Guidelines"),o.a.createElement(r.MDXTag,{name:"p",components:t},"This is a placeholder for any high-level paradigms we settle on. For now, it's merely a laundry list of debatable topics:"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"li"},"PropTypes"),": we try to define PropTypes to make it easier for newcomers to understand what can be passed to a component."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"What to put into a selector vs. reducer vs. action"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"How we map backend data to the state?")),o.a.createElement("h3",{id:"reactredux-guidelines"},"React/Redux Guidelines"),o.a.createElement("h4",{id:"components-vs-containers"},"Components vs. containers"),o.a.createElement(r.MDXTag,{name:"p",components:t},"A common React/Redux application architecture is to divide your React components into two types: regular components and container components. These are also sometimes referred to as a dumb and smart components. Container components connect to the Redux store using the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"react-redux")," library's ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"connect")," function and map a specific part of the state object to the props of a React component. Regular components are just plain React components; they take in props and they can have internal state (though we generally avoid this; see below)."),o.a.createElement(r.MDXTag,{name:"p",components:t},"In general, we try to use regular components whenever possible and only a few container components. The reason for this is because tying a component to the Redux store couples it to a particular slice of the state of your application, as well as coupling it to a particular way of organizing your state. So refactoring a lot of container components can be difficult. Debugging can also be difficult with a lot of container components, because they interrupt the usual flow of data down through components. Instead of all data being passed down via props from a single component at the top of the component tree, intermediate components might pull in different parts of the Redux state and pass down that data as props to other components, creating a mix of data combined from different connections to the Redux state."),o.a.createElement(r.MDXTag,{name:"p",components:t},'There are benefits to using container components, though. It can be painful to pass lots of props all the way down to the leaf components in a component tree and container components allow you to "reset" and grab specific data from the store without all that wiring. They can also improve performance, because passing props down from the root of the component tree means that all intermediate components will re-render whenever data changes. Container components can send data down to their children without all the parents of the container component re-rendering.'),o.a.createElement(r.MDXTag,{name:"p",components:t},"On vets.gov, we normally use a single container component per page (or independent widget, like login), and only use other container components if there's a compelling reason for doing so. Our apps have a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"containers")," folder and a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"components")," folder that we divide components between."),o.a.createElement("h4",{id:"using-setstate-in-react-components"},"Using setState in React components"),o.a.createElement(r.MDXTag,{name:"p",components:t},"We also generally avoid ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setState")," inside regular components. This isn't because ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setState")," is bad, necessarily, but because it can be hard to track down data changes due to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setState")," when you're expecting all changes to go through the single Redux store. It can also be tricky to keep that state in sync with the data from the Redux store passed in as props. So, when we do use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setState"),", it's typically for ephemeral UI state, or state that would be more difficult to follow if it were put in the store and passed down through props."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Keep in mind that these are general conventions, not iron-clad rules, and we should revist them as we gain more experience using React and Redux."),o.a.createElement("h3",{id:"existing-guides-and-tools"},"Existing Guides and Tools"),o.a.createElement(r.MDXTag,{name:"p",components:t},"We have a set of ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/.eslintrc"}},"ESLint rules")," that extend the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/airbnb/javascript"}},"AirBnB style guide")," and also use the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://prettier.io"}},"Prettier")," ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://prettier.io/docs/en/eslint.html"}},"ESLint rules"),". There is a pre-commit hook that prevents committing code that fails the ESLint rules. Developers should all be using ESLint plugins in their dev environments to catch lint-able things. In lieu of using an ESLint editor plugin, developers can run the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"lint:js:fix")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"lint:js:changed:fix")," NPM scripts to fix all errors that ESLint can auto-fix."),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"p"},"TODO: list any notable exceptions here.")),o.a.createElement("h3",{id:"project-structure-and-code-location"},"Project Structure and Code Location"),o.a.createElement(r.MDXTag,{name:"p",components:t},"The structure of our React app's is described in ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/StartANewReactApp.md"}},"How to Start a New ReactJS Project")),o.a.createElement(r.MDXTag,{name:"p",components:t},"A number (and soon all) of our forms use the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"react-json-schemaform"))," (or rjsf) library. To learn more about those, see ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/walkthrough.md"}},"schemaform walkthrough")," and this ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/form-config.md"}},"form config cookbook"),"."),o.a.createElement("h3",{id:"related-documents"},"Related Documents"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/Work%20Practices/Engineering/DocumentedDecisions/Redux.md"}},"Using Redux"))),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/StartANewReactApp.md"}},"How to Start a New ReactJS Project"))),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/walkthrough.md"}},"Schemaform walkthrough"))),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/form-config.md"}},"Form config cookbook")),o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"li"},"Existing posts/articles on best practices that we may or may not agree with but can pull topics from:"),o.a.createElement(r.MDXTag,{name:"ul",components:t,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://medium.com/@nesbtesh/react-best-practices-a76fd0fbef21"}},"React best practices")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e"}},"Redux best practices")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/markerikson/react-redux-links/blob/master/react-architecture.md"}},"Long list of links about react architecture and best practices")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://reactrocket.com/post/react-redux-optimization/"}},"Redux isn't slow, you're just doing it wrong - An optimization guide"))))),o.a.createElement("h3",{id:"revision-history"},"Revision History"),o.a.createElement(r.MDXTag,{name:"table",components:t},o.a.createElement(r.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Date"),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Revisions Made"),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Author"),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Reviewed By"))),o.a.createElement(r.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"March 1, 2017"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Skeleton document based on outline of ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"Javascript/Node.js.md"}},"Node.js Best Practices")),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}})),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"April 28, 2017"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Pulled in content from discussion in ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/659"}},"#659")),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}})),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"May 17, 2017"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Added information about React component types and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"setState")," usage"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}})))))},n}(o.a.Component),c={}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-react-mdx-f0d185003491ca60b3eb.js.map