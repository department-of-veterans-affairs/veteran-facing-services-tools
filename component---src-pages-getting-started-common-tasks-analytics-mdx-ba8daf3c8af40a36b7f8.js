(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n("q1tI"),r=n.n(a),i=n("Wbzz");function c(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(i.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},a&&r.a.createElement(c,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(l,{isSublist:!0,items:e.items})):r.a.createElement(c,{item:e,key:e.name})}))):null}var o=n("MEl4"),s=n.n(o);function u(e){var t=e.location,n=s.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(l,{items:n.items}))):null}function m(e){var t=e.sourceUrl;return t?r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var d=n("8FPV");function b(e){var t=e.children,n=e.location,a=e.pageContext;return r.a.createElement(d.a,{location:n},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(u,{location:n}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(m,{sourceUrl:a.sourceUrl}))))}},l0dI:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("3dLD"),c=["components"],l={},o={_frontmatter:l},s=i.a;function u(e){var t=e.components,n=Object(a.a)(e,c);return Object(r.b)(s,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"analytics"},"Analytics"),Object(r.b)("p",null,"When creating a new page or new feature there might be a need to add analytics to\ncapture events on page. In our code base you will find 2 files that relate to analytics."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"/src/platform/startup/analytics-middleware.js"),Object(r.b)("li",{parentName:"ul"},"/src/platform/monitoring/record-event.js")),Object(r.b)("h2",{id:"analytics-middlewarejs"},"analytics-middleware.js"),Object(r.b)("p",null,"This file is a plugin for MetalSmith. This is where the google analytics is\ninitialized. Events will get pushed to a ",Object(r.b)("inlineCode",{parentName:"p"},"window.dataLayer")," then evaluated then\nsent to our analytics service."),Object(r.b)("h2",{id:"record-eventjs"},"record-event.js"),Object(r.b)("p",null,"This file is our utility functions for recording analytical events. You will\nwant to use these functions for recording events on your page. The ",Object(r.b)("inlineCode",{parentName:"p"},"recordEvent"),"\nfunction will take in an object with an event property like so."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"recordEvent({\n  event: 'your-event-name',\n})\n")),Object(r.b)("p",null,"The event name is determined by your analytics team, so please make sure you\ncommunicate with them to make sure you are using the correct event."))}u.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-analytics-mdx-ba8daf3c8af40a36b7f8.js.map