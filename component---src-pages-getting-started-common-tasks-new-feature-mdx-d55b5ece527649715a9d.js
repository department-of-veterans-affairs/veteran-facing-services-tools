(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("q1tI"),i=a.n(n),o=a("Wbzz");function r(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(o.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function s(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},n&&i.a.createElement(r,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(s,{isSublist:!0,items:e.items})):i.a.createElement(r,{item:e,key:e.name})}))):null}var l=a("MEl4"),c=a.n(l);function u(e){var t=e.location,a=c.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(s,{items:a.items}))):null}function p(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var d=a("8FPV");function h(e){var t=e.children,a=e.location,n=e.pageContext;return i.a.createElement(d.a,{location:a},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(u,{location:a}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(p,{sourceUrl:n.sourceUrl}))))}},GkaH:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("3dLD"),r=["components"],s={},l={_frontmatter:s},c=o.a;function u(e){var t=e.components,a=Object(n.a)(e,r);return Object(i.b)(c,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"add-a-new-application-or-feature-to-vagov"},"Add a new application or feature to VA.gov"),Object(i.b)("p",null,"Almost everyone working on VA.gov at some point will need to build a new feature, something that doesn't fit into the existing applications or widgets we have currently. This article will help guide you to the right way to implement that new feature."),Object(i.b)("h2",{id:"types-of-features-on-vagov"},"Types of features on VA.gov"),Object(i.b)("p",null,"Broadly, we have three kinds of features on VA.gov: static content pages, applications, and widgets."),Object(i.b)("h3",{id:"content-pages"},"Content pages"),Object(i.b)("p",null,"Static ",Object(i.b)("a",{parentName:"p",href:"/getting-started/common-tasks/new-page"},"content pages")," are pages that are built through the Metalsmith build process and are static html stored in AWS. If you're reading this site, you're probably not the person who would be addding one of these pages. Typically these pages are added by content editors in the vagov-content repo or in the Drupal CMS. You may, however, be tasked with adding more complex behaviors to these pages, which is discussed later in the widgets section."),Object(i.b)("h3",{id:"widgets"},"Widgets"),Object(i.b)("p",null,'On VA.gov, we use the term "',Object(i.b)("a",{parentName:"p",href:"/getting-started/common-tasks/new-widget"},"widgets"),'" to describe features that implement some kind of dynamic behavior in a contained place on a page. Examples of this include our saved application widgets, which display information about in progress applications a signed-in user may have, which is shown on various static content pages. Typically these widgets are written in React and are lazily loaded in separate bundles from the default static pages JS bundle.'),Object(i.b)("h3",{id:"applications"},"Applications"),Object(i.b)("p",null,"The third type of feature are ",Object(i.b)("a",{parentName:"p",href:"/getting-started/common-tasks/new-application"},"applications"),". These are Javascript applications, written with React/Redux, that control all of the UI for a page and may have multiple client-side pages. There is a static content page for each of these applications that contains only a header, footer, and ",Object(i.b)("inlineCode",{parentName:"p"},"div")," for the React application to mount to. These applications have their own JS bundle and the most flexibility for how to render content for a Veteran to interact with."),Object(i.b)("p",null,"Examples of applications include our multi page forms, the claim status tracker app, etc."),Object(i.b)("h2",{id:"choosing-the-right-type"},"Choosing the right type"),Object(i.b)("p",null,"Generally, you want to start with a simple content page, see if that will cover your needs, and if not, move up to an application widget. If that still isn't enough, then you can create an application. Full Javascript applications come at a cost for users, so we should make sure they're justified by the requirements of the feature you're building."),Object(i.b)("p",null,"Content pages are the best choice if:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The content on the page or pages you need are completely static and don't change based on api or user data")),Object(i.b)("p",null,"Widgets are the best choice if:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You need to implement some kind of dynamic behavior based on user input or api data"),Object(i.b)("li",{parentName:"ul"},"The dynamic behavior you need is a small part of the overall page"),Object(i.b)("li",{parentName:"ul"},"You want content editors to have control over most of what is on the page or pages"),Object(i.b)("li",{parentName:"ul"},"You have multiple pages with the same dynamic behavior and want to share code between them")),Object(i.b)("p",null,"Applications are the best choice if:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Your feature has multiple pages that need to be dyanmically created based on user input or api data"),Object(i.b)("li",{parentName:"ul"},"Your feature requires a lot of interaction and very little of the page you need is static")))}u.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-feature-mdx-d55b5ece527649715a9d.js.map