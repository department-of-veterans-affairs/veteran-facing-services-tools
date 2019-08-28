(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{377:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return m}),n.d(a,"_frontmatter",function(){return i});n(8),n(7),n(4),n(9),n(10);var t=n(1),o=n.n(t),r=n(2),s=n(334);var l={},m=function(e){var a,n;function t(a){var n;return(n=e.call(this,a)||this).layout=s.a,n}return n=e,(a=t).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n,t.prototype.render=function(){var e=this.props,a=e.components,n=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,n),components:a},o.a.createElement("h1",{id:"accessibility-standards"},"Accessibility standards"),o.a.createElement("h2",{id:"three-rules-for-link-and-button-success-sup-idheading33sup"},"Three rules for link and button success ",o.a.createElement("sup",{id:"heading3"},"3")),o.a.createElement(r.MDXTag,{name:"ol",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Links go to to another page OR jump to an anchor ID in the current page",o.a.createElement(r.MDXTag,{name:"ol",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"SUCCESS CRITERIA:"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Respond to ENTER keypress"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"The browser URL changes"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"HTML5 history object changes. (Not applicable if using React Router.)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Avoid hash route URLs if possible. These interfere with in-page anchor links, and were common with early SPA libraries like Backbone. (Not applicable if using React Router.)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Append anchor links to URL when a link points to an in-page anchor ID (skip nav, tabs)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Do not add role=“button” to links. Screen readers announce the link as “button”, and changes user"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Recommended to underline links when in paragraphs or blocks of text"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Buttons perform a UI action",o.a.createElement(r.MDXTag,{name:"ol",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"SUCCESS CRITERIA:"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Respond to ENTER, SPACEBAR keypresses"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Perform UI actions that do not change the URL or load a new page"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Call to action links can look like buttons as long as:",o.a.createElement(r.MDXTag,{name:"ol",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"SUCCESS CRITERIA:"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Load another page URL (see rule #1 success criteria)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Announce themselves as “links” to screen readers and assistive devices")))),o.a.createElement("h2",{id:"common-link-and-button-scenarios-sup-idheading44sup"},"Common link and button scenarios ",o.a.createElement("sup",{id:"heading4"},"4")),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Imagine copy/pasting a URL into a new browser window, sight unseen. Good scenarios for a LINK:",o.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"You expect the page to load scrolled down somewhere"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"You have a call to action that navigates to another page"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"You are loading a second or third tab, pre-selected"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Imagine you are presenting users with an action that does not load a new page. Good scenarios for a BUTTON:",o.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"You have a conditional message that the user should trigger or dismiss"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"You are adding or removing something like a receipt, prescription, appeal"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Show/hide accordions"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Submit a form asynchronously"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Submit an asynchronous request, then redirect users based on the server response. This is a middle ground, but feels like a good case for using a button, considering the original function was asynchronous and might keep users on the same page depending on the response."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Open and close a modal dialog"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Alert boxes or confirmations"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Do not underline button text. Better to have a halo, background color, or border with plenty of hit space."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Underline link text"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Calls to action links can omit the underline, but would be well served with a design that distinguishes them from buttons. Use these sparingly, maybe one per page.")))))},t}(o.a.Component),i={}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-accessibility-mdx-6c0ffb94c49b29f9a050.js.map