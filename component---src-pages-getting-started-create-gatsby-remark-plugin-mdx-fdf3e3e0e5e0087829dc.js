(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{297:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),r=t(3),m=t.n(r),s=t(2),c=t.n(s),i=t(4),p=t(310),l={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=p.a,t}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},c.a.createElement(i.MDXTag,{name:"h2",components:n},"Create a Gatsby Remark plugin"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Gatsby uses a plugin called ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-transformer-remark/"}},"gatsby-transformer-remark"),"\nto convert markdown to html. Our MDX plugin ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-mdx/"}},"gatsby-mdx")," uses this plugin\nto convert markdown to html. We needed to create a way to add graphs to our MDX files so we tried to implement another plugin that adds the ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://mermaidjs.github.io/"}},"mermaid")," feature to markdown. The problem was that it had conflicts with MDX files. This article will detail how we added our own plugin locally to the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsby-transformer-remark")," plugin to solve this issue."),c.a.createElement(i.MDXTag,{name:"h3",components:n},"What are we doing"),c.a.createElement(i.MDXTag,{name:"p",components:n},"We needed a way to generate graphs using markdown like the code below. Normally this is done using the mermaid library. That is what we are going to use, but we need it to work with MDX files. Below is an example of what we are trying to do."),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Markdown")),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"```mermaid\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n```\n")),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"HTML Output")),c.a.createElement("div",{className:"mermaid"},"graph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Remark uses a plugin system that enables you to do some customization when the markdown gets converted into html through Remark. That is what we are going to use to convert our markdown into a graph."),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"First we need to create a plugin that we can add to the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsby-transformer-remark")," plugin."),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Below is the code we are using to generate the html to convert our code into graphs. When adding this to the plugin, this code will run during the transformation phase. In this code we are taking the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mardownAST")," and finding mermaid specific code on the page. Then we change the code to html."),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// plugins/remark/gatsby-remark-mdx-mermaid/index.js\n\nconst visit = require('unist-util-visit');\n\nmodule.exports = ({ markdownAST }, { language = 'mermaid', theme = 'default' } = {}) => {\n  visit(markdownAST, 'code', node => {\n    let lang = (node.lang || '').toLowerCase()\n    if (lang === language) {\n      node.type = 'html'\n      node.value = '<div class=\"mermaid\">{' + '`'+ node.value + '`'+ '}</div>'\n    }\n  })\n}\n")),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"This markdown code:"),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"```mermaid\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n```\n")),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Will generate:"),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'<div class="mermaid">\n`\ngraph LR\n    A[Square Rect] -- Link text --\x3e B((Circle))\n    A --\x3e C(Round Rect)\n    B --\x3e D{Rhombus}\n    C --\x3e D\n`\n</div>\n')),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Notice the back ticks inside the innerText. This was done because of MDX. MDX was interpreting the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"{}")," as JSX templating which causes an error. So we need to wrap the code in back ticks to make it work with MDX files.")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Add it to our MDX remarks plugin."),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"In our ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsby-config.js")," file we need to add our plugin to the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsby-mdx plugin"),". Because this is a Remark plugin we need to add it to ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsbyRemarkPlugins"),". This is where you can add ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gatsby-transformer-remark")," specific plugins."),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-configs.js\n\n{\n  resolve: `gatsby-mdx`,\n  options: {\n    extensions: ['.mdx'],\n    mediaTypes: ['text/x-markdown'],\n    defaultLayouts: {\n      default: require.resolve(\"./src/layouts/layout.js\"),\n    },\n    gatsbyRemarkPlugins: [\n      {\n        resolve: path.resolve(__dirname, './plugins/remark/gatsby-remark-mdx-mermaid'),\n        options: {\n          language: 'mermaid',\n          theme: 'default'\n        }\n      }\n    ],\n  }\n}\n"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Add the mermaid library so it can convert our code into SVG graphs"),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Because mermaid is a client side library we need to include it when the build is rendered on the client-side.\nTo do this we add some code to our Layout Component that will inject the script in the ",c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"componentDidMount")," lifecycle hook."),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"class Layout extends React.Component {\n  componentDidMount() {\n    window.mermaid_config = { theme: 'default', startOnLoad: true }\n    const s = document.createElement('script');\n    s.setAttribute('src', 'https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js');\n    document.head.appendChild(s);\n\n    if (window.mermaid) {\n      window.mermaid.init(undefined, document.getElementsByClassName('mermaid'));\n    }\n  }\n  .....\n}\n"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Once all this all setup we are good to go."))))},n}(c.a.Component),u={}},305:function(e,n,t){var a;e.exports=(a=t(307))&&a.default||a},306:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},307:function(e,n,t){"use strict";t.r(n);var a=t(18),o=t.n(a),r=t(2),m=t.n(r),s=t(13),c=t.n(s),i=t(94),p=t(9),l=function(e){var n=e.location,t=p.default.getResourcesForPathnameSync(n.pathname);return m.a.createElement(i.a,o()({location:n,pageResources:t},t.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=l},308:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},309:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"}]},{name:"Code organization",items:[]},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},310:function(e,n,t){"use strict";var a=t(3),o=t.n(a),r=t(306),m=t(2),s=t.n(m),c=t(13),i=t.n(c),p=t(311),l=t.n(p),d=t(68),u=t.n(d),g=(t(305),s.a.createContext({})),h=function(e){return s.a.createElement(g.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func};t(17),t(133),t(134),t(135);var f=t(308);function w(){return s.a.createElement(h,{query:"157057713",render:function(e){return s.a.createElement(E,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function E(e){var n=e.items;return n.length?s.a.createElement("ul",{className:"menu-list"},n.map(function(e){return s.a.createElement("li",{key:e.name},!!e.items&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(E,{items:e.items})),"componentList"===e.query&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(w,null)),!!e.href&&s.a.createElement("li",{key:e.name},s.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&s.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var x=t(309),b=t.n(x);function y(e){var n=e.location,t=b.a.sections.find(function(e){return n.pathname.includes("/"+e.href)});return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"input-wrap"},s.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!t&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,t.name),s.a.createElement(u.a,{className:"home-link",to:""},"Home"),s.a.createElement(E,{items:t.items})),!t&&s.a.createElement("ul",{className:"menu-list"},b.a.sections.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(u.a,{to:e.href},e.name))})))}t(312);var T=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,n=e.children,t=e.location;return s.a.createElement(h,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(y,{location:t}),s.a.createElement("div",{className:"ContentArea docSearch-content"},n))},data:r})},n}(s.a.Component);T.propTypes={children:i.a.node.isRequired};n.a=T}}]);
//# sourceMappingURL=component---src-pages-getting-started-create-gatsby-remark-plugin-mdx-fdf3e3e0e5e0087829dc.js.map