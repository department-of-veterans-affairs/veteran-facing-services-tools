(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("q1tI"),o=n.n(a),r=n("Wbzz");function c(e){var t=e.item;return t.href?o.a.createElement("li",{key:t.name},o.a.createElement(r.Link,{to:t.href},t.name)):o.a.createElement("li",{key:t.name},t.name," (future)")}function i(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(c,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,{isSublist:!0,items:e.items})):o.a.createElement(c,{item:e,key:e.name})}))):null}var l=n("MEl4"),s=n.n(l);function u(e){var t=e.location,n=s.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(i,{items:n.items}))):null}function m(e){var t=e.sourceUrl;return t?o.a.createElement("div",null,o.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",o.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var d=n("8FPV");function f(e){var t=e.children,n=e.location,a=e.pageContext;return o.a.createElement(d.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(u,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,o.a.createElement(m,{sourceUrl:a.sourceUrl}))))}},"3u51":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("3dLD"),c=["components"],i={},l={_frontmatter:i},s=r.a;function u(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)(s,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"creating-a-new-content-page"},"Creating a new content page"),Object(o.b)("p",null,"Note: Check out the ",Object(o.b)("a",{parentName:"p",href:"/veteran-facing-services-tools/getting-started/common-tasks/new-feature"},"Adding a new feature")," doc to make sure you're trying to add the right type of feature to VA.gov."),Object(o.b)("h2",{id:"choosing-vagov-content-or-drupal"},"Choosing vagov-content or Drupal"),Object(o.b)("p",null,"There are two ways to add a new page to VA.gov; one is by adding it in vagov-content. The other is to add it to the Drupal CMS. Drupal will eventually be the only source of content, but ",Object(o.b)("inlineCode",{parentName:"p"},"vagov-content")," is expected to be around for the near future."),Object(o.b)("p",null,"If you need to add a page to ",Object(o.b)("inlineCode",{parentName:"p"},"vagov-content"),", there is ",Object(o.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vagov-content/blob/master/docs/index.md"},"documentation")," in that repo. You should also contact the website team to coordinate with them on where the new page should live."),Object(o.b)("p",null,"If you need to add a page to Drupal, coordinate with the cms team via your project manager."))}u.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-page-mdx-cf9a876d8daeed90c604.js.map