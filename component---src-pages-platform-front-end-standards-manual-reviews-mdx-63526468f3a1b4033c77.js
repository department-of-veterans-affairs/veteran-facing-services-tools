(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),i=n.n(a),r=n("FRpb");function o(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var l=n("8FPV");function c(e){var t=e.children,n=e.location,a=e.pageContext;return i.a.createElement(l.a,{location:n},i.a.createElement("div",{className:"vads-l-row site-l-wrapper"},i.a.createElement(r.a,{location:n}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(o,{sourceUrl:a.sourceUrl}))))}},AyTq:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),r=n("3dLD"),o=["components"],l={},c={_frontmatter:l},s=r.a;function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"automated-code-quality"},"Automated code quality"),Object(i.b)("p",null,"Each pull request (PR) on ",Object(i.b)("inlineCode",{parentName:"p"},"vets-website")," runs through an automated process that looks for code additions and modifications that don't meet code quality standards. If no issues are found, the code does not need to be reviewed by a VSP engineer. If a potential issue is found, a bot will leave an automated comment and request a manual review from the ",Object(i.b)("strong",{parentName:"p"},"va-platform-cop-frontend"),"."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://images.zenhubusercontent.com/5e387fa505ac7e30c820a2da/a09c4c8c-ae32-4142-8fa5-0fc81b6a1892",alt:"Screen Shot"})),Object(i.b)("h2",{id:"manual-reviews"},"Manual reviews"),Object(i.b)("p",null,"The following items trigger a manual review:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A call to ",Object(i.b)("inlineCode",{parentName:"li"},"Sentry")),Object(i.b)("li",{parentName:"ul"},"ESLint being disabled"),Object(i.b)("li",{parentName:"ul"},"An icon is added with ",Object(i.b)("inlineCode",{parentName:"li"},"<i ..."))),Object(i.b)("h3",{id:"sentry-calls"},"Sentry calls"),Object(i.b)("p",null,"VSP reviews logs to Sentry to ensure that any new logs are useful and do not contain personally identifiable information (PII)."),Object(i.b)("p",null,"Examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Do not log an entire request response if all that's important is an error code."),Object(i.b)("li",{parentName:"ul"},"Do not log PII such as names, emails, or user IDs.")),Object(i.b)("h3",{id:"eslint"},"ESLint"),Object(i.b)("p",null,"VSP enforces ",Object(i.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/frontend/eslint"},"ESLint rules")," through CircleCI to enforce code quality. ESLint rules are included in the ",Object(i.b)("inlineCode",{parentName:"p"},".eslintrc")," file, which is located in the root folder. Any rules that VSP is ",Object(i.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/eslint/adding-new-rules.md"},"testing for inclusion")," are located in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/main/circle.eslint.json"},Object(i.b)("inlineCode",{parentName:"a"},"circle.eslint.json"))," file."),Object(i.b)("p",null,"When ESLint rules are disabled, VSP will review each case individually."),Object(i.b)("h3",{id:"icons"},"Icons"),Object(i.b)("p",null,"VSP uses Font Awesome as a dependency, which uses the ",Object(i.b)("inlineCode",{parentName:"p"},"<i>")," tag for adding icons. Sometimes an icon is used as decoration, but other times it is used to convey meaning to the user. VSP reviews the code to ensure that whenever an icon is being used to convey meaning, the meaning is also conveyed to a screen reader."),Object(i.b)("h2",{id:"actions-to-take"},"Actions to take"),Object(i.b)("p",null,"If a manual review is triggered, you can use the error information provided in the comment to identify the problem and resolve any errors. A member of the VSP team will review the PR and confirm that all issues have been resolved or will follow up with more feedback."))}u.isMDXComponent=!0},FRpb:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),i=n.n(a),r=n("Wbzz");function o(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(r.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},a&&i.a.createElement(o,{item:e}),!a&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(l,{isSublist:!0,items:e.items})):i.a.createElement(o,{item:e,key:e.name})}))):null}var c=n("MEl4"),s=n.n(c);function u(e){var t=e.location,n=s.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(l,{items:n.items}))):null}},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-manual-reviews-mdx-63526468f3a1b4033c77.js.map