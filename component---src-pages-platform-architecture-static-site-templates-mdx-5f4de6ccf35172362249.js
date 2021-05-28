(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz");function l(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(i.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function c(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},n&&r.a.createElement(l,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(c,{isSublist:!0,items:e.items})):r.a.createElement(l,{item:e,key:e.name})}))):null}var o=a("MEl4"),s=a.n(o);function m(e){var t=e.location,a=s.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(c,{items:a.items}))):null}function p(e){var t=e.sourceUrl;return t?r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var u=a("8FPV");function b(e){var t=e.children,a=e.location,n=e.pageContext;return r.a.createElement(u.a,{location:a},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(m,{location:a}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(p,{sourceUrl:n.sourceUrl}))))}},"8zTB":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("3dLD"),l=["components"],c={},o={_frontmatter:c},s=i.a;function m(e){var t=e.components,a=Object(n.a)(e,l);return Object(r.b)(s,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"how-templates-work-for-markdown-pages"},"How templates work for Markdown pages"),Object(r.b)("p",null,"Templates use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/leizongmin/tinyliquid/"},"tinyliquid"),", a JavaScript implementation of ",Object(r.b)("a",{parentName:"p",href:"https://shopify.github.io/liquid/"},"Liquid"),"."),Object(r.b)("p",null,'There are three "wrapper" templates currently in use for Markdown content. They\'re all in ',Object(r.b)("inlineCode",{parentName:"p"},"src/site/layouts"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page-react"),": Houses our React pages."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page-react-sidebar"),": Houses our React pages that have a sidebar."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page-breadcrumbs"),": Houses our non-React content pages."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page-playbook"),": Houses Playbook pages."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"home"),": Template for the home page"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"home"),": Template for the home page without search")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"page-breadcrumbs")," is a container template that loads layouts for the content between the header and the footer. Those are in ",Object(r.b)("inlineCode",{parentName:"p"},"content/layouts/includes/"),"."),Object(r.b)("p",null,"Templates are loaded based on the value of the ",Object(r.b)("inlineCode",{parentName:"p"},"template")," property in the ",Object(r.b)("a",{parentName:"p",href:"http://yaml.org/"},"YAML"),"/front-page data of each content file -- the text between the ",Object(r.b)("inlineCode",{parentName:"p"},"---"),". Content files can be found in ",Object(r.b)("inlineCode",{parentName:"p"},"content/pages/"),"."),Object(r.b)("h2",{id:"adding-a-new-template"},"Adding a new template"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add a new HTML + Liquid template file to ",Object(r.b)("inlineCode",{parentName:"li"},"src/site/includes")),Object(r.b)("li",{parentName:"ul"},"Update ",Object(r.b)("inlineCode",{parentName:"li"},"page-breadcrumbs")," with a new case for the new layout."),Object(r.b)("li",{parentName:"ul"},"Update the ",Object(r.b)("inlineCode",{parentName:"li"},"template")," YAML property for whichever pages should load the new template.")),Object(r.b)("h2",{id:"content-meta-data"},"Content meta data"),Object(r.b)("p",null,"To date, we've used ",Object(r.b)("a",{parentName:"p",href:"http://yaml.org/"},"YAML")," syntax in Markdown files as a way to structure data such as related links (majorlinks) and navigation cards."))}m.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-static-site-templates-mdx-5f4de6ccf35172362249.js.map