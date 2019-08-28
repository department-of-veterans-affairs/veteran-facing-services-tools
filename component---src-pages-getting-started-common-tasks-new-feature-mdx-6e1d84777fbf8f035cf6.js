(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{356:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p}),a.d(t,"_frontmatter",function(){return c});a(8),a(7),a(4),a(9),a(10);var n=a(1),o=a.n(n),i=a(2),r=a(334);var s={},p=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).layout=r.a,a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,a),components:t},o.a.createElement("h1",{id:"add-a-new-application-or-feature-to-vagov"},"Add a new application or feature to VA.gov"),o.a.createElement(i.MDXTag,{name:"p",components:t},"Almost everyone working on VA.gov at some point will need to build a new feature, something that doesn't fit into the existing applications or widgets we have currently. This article will help guide you to the right way to implement that new feature."),o.a.createElement("h2",{id:"types-of-features-on-vagov"},"Types of features on VA.gov"),o.a.createElement(i.MDXTag,{name:"p",components:t},"Broadly, we have three kinds of features on VA.gov: static content pages, applications, and widgets."),o.a.createElement("h3",{id:"content-pages"},"Content pages"),o.a.createElement(i.MDXTag,{name:"p",components:t},"Static ",o.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/getting-started/common-tasks/new-page"}},"content pages")," are pages that are built through the Metalsmith build process and are static html stored in AWS. If you're reading this site, you're probably not the person who would be addding one of these pages. Typically these pages are added by content editors in the vagov-content repo or in the Drupal CMS. You may, however, be tasked with adding more complex behaviors to these pages, which is discussed later in the widgets section."),o.a.createElement("h3",{id:"widgets"},"Widgets"),o.a.createElement(i.MDXTag,{name:"p",components:t},'On VA.gov, we use the term "',o.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/getting-started/common-tasks/new-widget"}},"widgets"),'" to describe features that implement some kind of dynamic behavior in a contained place on a page. Examples of this include our saved application widgets, which display information about in progress applications a signed-in user may have, which is shown on various static content pages. Typically these widgets are written in React and are lazily loaded in separate bundles from the default static pages JS bundle.'),o.a.createElement("h3",{id:"applications"},"Applications"),o.a.createElement(i.MDXTag,{name:"p",components:t},"The third type of feature are ",o.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/getting-started/common-tasks/new-application"}},"applications"),". These are Javascript applications, written with React/Redux, that control all of the UI for a page and may have multiple client-side pages. There is a static content page for each of these applications that contains only a header, footer, and ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"div")," for the React application to mount to. These applications have their own JS bundle and the most flexibility for how to render content for a Veteran to interact with."),o.a.createElement(i.MDXTag,{name:"p",components:t},"Examples of applications include our multi page forms, the claim status tracker app, etc."),o.a.createElement("h2",{id:"choosing-the-right-type"},"Choosing the right type"),o.a.createElement(i.MDXTag,{name:"p",components:t},"Generally, you want to start with a simple content page, see if that will cover your needs, and if not, move up to an application widget. If that still isn't enough, then you can create an application. Full Javascript applications come at a cost for users, so we should make sure they're justified by the requirements of the feature you're building."),o.a.createElement(i.MDXTag,{name:"p",components:t},"Content pages are the best choice if:"),o.a.createElement(i.MDXTag,{name:"ul",components:t},o.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"The content on the page or pages you need are completely static and don't change based on api or user data")),o.a.createElement(i.MDXTag,{name:"p",components:t},"Widgets are the best choice if:"),o.a.createElement(i.MDXTag,{name:"ul",components:t},o.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"You need to implement some kind of dynamic behavior based on user input or api data"),o.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"The dynamic behavior you need is a small part of the overall page"),o.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"You want content editors to have control over most of what is on the page or pages"),o.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"You have multiple pages with the same dynamic behavior and want to share code between them")),o.a.createElement(i.MDXTag,{name:"p",components:t},"Applications are the best choice if:"),o.a.createElement(i.MDXTag,{name:"ul",components:t},o.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Your feature has multiple pages that need to be dyanmically created based on user input or api data"),o.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Your feature requires a lot of interaction and very little of the page you need is static")))},n}(o.a.Component),c={}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-feature-mdx-6e1d84777fbf8f035cf6.js.map