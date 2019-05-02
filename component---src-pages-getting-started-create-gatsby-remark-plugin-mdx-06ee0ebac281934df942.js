(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{302:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return u});a(42);var t=a(43),o=a.n(t),r=a(3),m=a.n(r),s=a(2),c=a.n(s),i=a(4),p=a(341),l={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=p.a,a}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,a),components:n},c.a.createElement("h2",{id:"create-a-gatsby-remark-plugin"},"Create a Gatsby Remark plugin"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Gatsby uses a plugin called ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-transformer-remark/"}},"gatsby-transformer-remark"),"\nto convert markdown to html. Our MDX plugin ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-mdx/"}},"gatsby-mdx")," uses this plugin\nto convert markdown to html. We needed to create a way to add graphs to our MDX files so we tried to implement another plugin that adds the ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://mermaidjs.github.io/"}},"mermaid")," feature to markdown. The problem was that it had conflicts with MDX files. This article will detail how we added our own plugin locally to the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsby-transformer-remark")," plugin to solve this issue."),c.a.createElement("h3",{id:"what-are-we-doing"},"What are we doing"),c.a.createElement(i.MDXTag,{name:"p",components:n},"We needed a way to generate graphs using markdown like the code below. Normally this is done using the mermaid library. That is what we are going to use, but we need it to work with MDX files. Below is an example of what we are trying to do."),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Markdown")),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"```mermaid\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n```\n")),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"HTML Output")),c.a.createElement("div",{className:"mermaid"},"graph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Remark uses a plugin system that enables you to do some customization when the markdown gets converted into html through Remark. That is what we are going to use to convert our markdown into a graph."),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"First we need to create a plugin that we can add to the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsby-transformer-remark")," plugin."),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Below is the code we are using to generate the html to convert our code into graphs. When adding this to the plugin, this code will run during the transformation phase. In this code we are taking the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mardownAST")," and finding mermaid specific code on the page. Then we change the code to html."),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// plugins/remark/gatsby-remark-mdx-mermaid/index.js\n\nconst visit = require('unist-util-visit');\n\nmodule.exports = ({ markdownAST }, { language = 'mermaid', theme = 'default' } = {}) => {\n  visit(markdownAST, 'code', node => {\n    let lang = (node.lang || '').toLowerCase()\n    if (lang === language) {\n      node.type = 'html'\n      node.value = '<div class=\"mermaid\">{' + '`'+ node.value + '`'+ '}</div>'\n    }\n  })\n}\n")),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"This markdown code:"),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"```mermaid\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n```\n")),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Will generate:"),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'<div class="mermaid">\n`\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n`\n</div>\n')),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Notice the back ticks inside the innerText. This was done because of MDX. MDX was interpreting the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"{}")," as JSX templating which causes an error. So we need to wrap the code in back ticks to make it work with MDX files.")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Add it to our MDX remarks plugin."),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"In our ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsby-config.js")," file we need to add our plugin to the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsby-mdx plugin"),". Because this is a Remark plugin we need to add it to ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsbyRemarkPlugins"),". This is where you can add ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsby-transformer-remark")," specific plugins."),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-configs.js\n\n{\n  resolve: `gatsby-mdx`,\n  options: {\n    extensions: ['.mdx'],\n    mediaTypes: ['text/x-markdown'],\n    defaultLayouts: {\n      default: require.resolve(\"./src/layouts/layout.js\"),\n    },\n    gatsbyRemarkPlugins: [\n      {\n        resolve: path.resolve(__dirname, './plugins/remark/gatsby-remark-mdx-mermaid'),\n        options: {\n          language: 'mermaid',\n          theme: 'default'\n        }\n      }\n    ],\n  }\n}\n"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Add the mermaid library so it can convert our code into SVG graphs"),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Because mermaid is a client side library we need to include it when the build is rendered on the client-side.\nTo do this we add some code to our Layout Component that will inject the script in the ",c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"componentDidMount")," lifecycle hook."),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"class Layout extends React.Component {\n  componentDidMount() {\n    window.mermaid_config = { theme: 'default', startOnLoad: true }\n    const s = document.createElement('script');\n    s.setAttribute('src', 'https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js');\n    document.head.appendChild(s);\n\n    if (window.mermaid) {\n      window.mermaid.init(undefined, document.getElementsByClassName('mermaid'));\n    }\n  }\n  .....\n}\n"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Once all this all setup we are good to go."))))},n}(c.a.Component),u={}},340:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},341:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(13),m=a.n(r),s=a(343),c=(a(133),a(134),a(135),a(17),a(340)),i=a(342);function p(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(l,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function l(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(i.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(344),u=a.n(d);function g(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(l,{items:a.items}))):null}function h(e){var n=e.children,a=e.location;return o.a.createElement(s.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return h}),h.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-create-gatsby-remark-plugin-mdx-06ee0ebac281934df942.js.map