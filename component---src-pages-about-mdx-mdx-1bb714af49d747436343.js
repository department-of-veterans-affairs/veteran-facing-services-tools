(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3dLD":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("q1tI"),o=t.n(a),s=t("Wbzz");function r(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(s.Link,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function l(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map((function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(r,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,{isSublist:!0,items:e.items})):o.a.createElement(r,{item:e,key:e.name})}))):null}var c=t("MEl4"),i=t.n(c);function m(e){var n=e.location,t=i.a.sections.find((function(e){return n.pathname.includes(e.href)}));return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(l,{items:t.items}))):null}function u(e){var n=e.sourceUrl;return n?o.a.createElement("div",null,o.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",o.a.createElement("a",{href:n},"Edit this page on GitHub")):null}var p=t("8FPV");function d(e){var n=e.children,t=e.location,a=e.pageContext;return o.a.createElement(p.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(m,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n,o.a.createElement(u,{sourceUrl:a.sourceUrl}))))}},ljIB:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return m}));var a=t("zLVn"),o=(t("q1tI"),t("7ljp")),s=t("3dLD"),r=["components"],l={},c={_frontmatter:l},i=s.a;function m(e){var n=e.components,t=Object(a.a)(e,r);return Object(o.b)(i,Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"about-mdx"},"About MDX"),Object(o.b)("h3",{id:"what-is-mdx"},"What is MDX?"),Object(o.b)("p",null,"We will be using the .mdx format to create our documents.\nMDX is a format that lets you seamlessly use JSX in your Markdown documents.\nYou can import components, like interactive charts or notifs, and export metadata.\nThis makes writing long-form content with components a blast 🚀"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://mdxjs.com/"},"https://mdxjs.com/")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"Here is a great page of examples of using MDX"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://dump.jamesknelson.com/mdxc-playground.html"},"http://dump.jamesknelson.com/mdxc-playground.html"))),Object(o.b)("h3",{id:"things-you-can-do-with-mdx-and-gotchas"},"Things you can do with MDX and gotchas"),Object(o.b)("p",null,"This is documentation of findings for using MDX in our projects. Please feel\nfree to add to this document if you find anything else."),Object(o.b)("h4",{id:"inline-components"},"Inline components"),Object(o.b)("p",null,"You can use components inline inside your MDX files. Below is an example\nof how to do it."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You will need to export it for it to work."),Object(o.b)("li",{parentName:"ul"},"You can write both Function components and Class components."),Object(o.b)("li",{parentName:"ul"},"The reason why you need to use this is when you need the parent state to change.")),Object(o.b)("p",null,"This example uses state to toggle the drop down."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// Class Component\nexport class InlineClassComponent extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      open: false\n    }\n  }\n  render() {\n    return (\n      <div className=\"site-c-reactcomp__rendered\">\n        <div style={{ backgroundColor: '#112e51' }}>\n          <DropDownPanel\n            buttonText='Helpdesk'\n            cssClass='va-dropdown'\n            isOpen={this.state.open}\n            contents='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper at eros eu suscipit. Ut imperdiet libero et luctus pretium.'\n            clickHandler={() => this.setState({ open: !this.state.open }) }>\n            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper at eros eu suscipit. Ut imperdiet libero et luctus pretium.'\n          </DropDownPanel>\n        </div>\n      </div>\n    )\n  }\n}\n\n<InlineClassComponent />\n\n// Function Component\nexport const InlinePresentationalComponent = () => (\n  <h1>Hello World</h1>\n)\n\n<InlinePresentationalComponent />\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Gotchas"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"MDX doesn't like newlines in between methods in a class based component."),Object(o.b)("li",{parentName:"ul"},"Inline components need to begin with an uppercase letter. If it starts with a\nlowercase it will not render.")),Object(o.b)("p",null,"Bad:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'export class inlineClassComponent extends React.Component {\n  constructor() {\n    super()\n  }\n\n  render() {\n    return (\n      <div className="site-c-reactcomp__rendered">\n        Hello World\n      </div>\n    )\n  }\n}\n')),Object(o.b)("p",null,"Good:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'export class InlineClassComponent extends React.Component {\n  constructor() {\n    super()\n  }\n  render() {\n    return (\n      <div className="site-c-reactcomp__rendered">\n        Hello World\n      </div>\n    )\n  }\n}\n')))}m.isMDXComponent=!0},zLVn:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-about-mdx-mdx-1bb714af49d747436343.js.map