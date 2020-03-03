(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ljIB:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c})),t.d(n,"_frontmatter",(function(){return p}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP");var a=t("q1tI"),o=t.n(a),s=t("6qfE"),r=t("3dLD");var m={},c=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=r.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,t),components:n},o.a.createElement("h2",{id:"about-mdx"},"About MDX"),o.a.createElement("h3",{id:"what-is-mdx"},"What is MDX?"),o.a.createElement(s.MDXTag,{name:"p",components:n},"We will be using the .mdx format to create our documents.\nMDX is a format that lets you seamlessly use JSX in your Markdown documents.\nYou can import components, like interactive charts or notifs, and export metadata.\nThis makes writing long-form content with components a blast 🚀"),o.a.createElement(s.MDXTag,{name:"p",components:n},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://mdxjs.com/"}},"https://mdxjs.com/")),o.a.createElement("h3",{id:"examples"},"Examples"),o.a.createElement(s.MDXTag,{name:"p",components:n},"Here is a great page of examples of using MDX"),o.a.createElement(s.MDXTag,{name:"ul",components:n},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://dump.jamesknelson.com/mdxc-playground.html"}},"http://dump.jamesknelson.com/mdxc-playground.html"))),o.a.createElement("h3",{id:"things-you-can-do-with-mdx-and-gotchas"},"Things you can do with MDX and gotchas"),o.a.createElement(s.MDXTag,{name:"p",components:n},"This is documentation of findings for using MDX in our projects. Please feel\nfree to add to this document if you find anything else."),o.a.createElement("h4",{id:"inline-components"},"Inline components"),o.a.createElement(s.MDXTag,{name:"p",components:n},"You can use components inline inside your MDX files. Below is an example\nof how to do it."),o.a.createElement(s.MDXTag,{name:"ul",components:n},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"You will need to export it for it to work."),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"You can write both Function components and Class components."),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"The reason why you need to use this is when you need the parent state to change.")),o.a.createElement(s.MDXTag,{name:"p",components:n},"This example uses state to toggle the drop down."),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"// Class Component\nexport class InlineClassComponent extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      open: false\n    }\n  }\n  render() {\n    return (\n      <div className=\"site-c-reactcomp__rendered\">\n        <div style={{ backgroundColor: '#112e51' }}>\n          <DropDownPanel\n            buttonText='Helpdesk'\n            cssClass='va-dropdown'\n            isOpen={this.state.open}\n            contents='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper at eros eu suscipit. Ut imperdiet libero et luctus pretium.'\n            clickHandler={() => this.setState({ open: !this.state.open }) }>\n            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper at eros eu suscipit. Ut imperdiet libero et luctus pretium.'\n          </DropDownPanel>\n        </div>\n      </div>\n    )\n  }\n}\n\n<InlineClassComponent />\n\n// Function Component\nexport const InlinePresentationalComponent = () => (\n  <h1>Hello World</h1>\n)\n\n<InlinePresentationalComponent />\n")),o.a.createElement(s.MDXTag,{name:"p",components:n},o.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},o.a.createElement(s.MDXTag,{name:"em",components:n,parentName:"strong"},"Gotchas"))),o.a.createElement(s.MDXTag,{name:"ul",components:n},o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"MDX doesn't like newlines in between methods in a class based component."),o.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Inline components need to begin with an uppercase letter. If it starts with a\nlowercase it will not render.")),o.a.createElement(s.MDXTag,{name:"p",components:n},"Bad:"),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'export class inlineClassComponent extends React.Component {\n  constructor() {\n    super()\n  }\n\n  render() {\n    return (\n      <div className="site-c-reactcomp__rendered">\n        Hello World\n      </div>\n    )\n  }\n}\n')),o.a.createElement(s.MDXTag,{name:"p",components:n},"Good:"),o.a.createElement(s.MDXTag,{name:"pre",components:n},o.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'export class InlineClassComponent extends React.Component {\n  constructor() {\n    super()\n  }\n  render() {\n    return (\n      <div className="site-c-reactcomp__rendered">\n        Hello World\n      </div>\n    )\n  }\n}\n')))},a}(o.a.Component),p={}}}]);
//# sourceMappingURL=component---src-pages-about-mdx-mdx-e259c06596c8a527c781.js.map