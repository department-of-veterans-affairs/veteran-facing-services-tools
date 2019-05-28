(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{280:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(42);var a=t(43),o=t.n(a),r=t(3),s=t.n(r),c=t(2),m=t.n(c),p=t(4),l=t(347),i={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return m.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,t),components:n},m.a.createElement("h2",{id:"how-to-create-a-gatsby-plugin"},"How to Create a Gatsby Plugin"),m.a.createElement("h3",{id:"creating-a-local-gatsby-plugin"},"Creating a Local Gatsby Plugin"),m.a.createElement(p.MDXTag,{name:"p",components:n},"Here we are going to show you how to create a local plugin for Gatsby."),m.a.createElement(p.MDXTag,{name:"ul",components:n},m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"Create a plugin folder in ",m.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},"/plugins")),m.a.createElement(p.MDXTag,{name:"pre",components:n,parentName:"li"},m.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell"}},"$ mkdir gatsby-example-plugin\n"))),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"CD into the folder"),m.a.createElement(p.MDXTag,{name:"pre",components:n,parentName:"li"},m.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell"}},"$ cd gatsby-example-plugin\n"))),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"Initialize Node.js using npm. Plugins need to be a Node project."),m.a.createElement(p.MDXTag,{name:"pre",components:n,parentName:"li"},m.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell"}},"$ npm init --yes\n"))),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"Now you can add the Gatsby specific files like gatsby-node.js, gatsby-browser, etc. in your plugin folder."),m.a.createElement(p.MDXTag,{name:"pre",components:n,parentName:"li"},m.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"gatsby-example-plugin\n  - gatsby-node.js\n  - gatsby-browser.js\n"))),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"To use the plugin you need to add it to the ",m.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},"gatsby-config.js")," file."),m.a.createElement(p.MDXTag,{name:"pre",components:n,parentName:"li"},m.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-config.js\n\nmodule.exports = {\n  siteMetadata: {\n    description: `Resources and documention for the Development within the VA.gov project`,\n    siteUrl: `https://department-of-veterans-affairs.github.io/veteran-facing-services-tools`,\n    title: `VA.gov Developer's Documentations`,\n    sidebar: require('./src/sidebar.js')\n  },\n  pathPrefix: '/veteran-facing-services-tools',\n  plugins: [\n    `gatsby-plugin-react-helmet`,\n    {\n      resolve: `gatsby-source-filesystem`,\n      options: {\n        name: `images`,\n        path: `${__dirname}/src/images`,\n      },\n    },\n    `gatsby-transformer-sharp`,\n    `gatsby-plugin-sharp`,\n    {\n      resolve: `gatsby-plugin-manifest`,\n      options: {\n        name: `vagov-documentation`,\n        short_name: `vagov-documentation`,\n        start_url: `/`,\n      },\n    },\n    `gatsby-example-plugin`,\n  ],\n}\n"))),m.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(p.MDXTag,{name:"p",components:n,parentName:"li"},"If you would like to debug your build process code, you can run"),m.a.createElement(p.MDXTag,{name:"pre",components:n,parentName:"li"},m.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell"}},"$ yarn develop:inspect\n")))))},n}(m.a.Component),d={}},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),s=t.n(r),c=t(350),m=(t(133),t(134),t(135),t(17),t(346)),p=t(348);function l(){return o.a.createElement(p.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(p.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(i,{item:e,key:e.name})})):null}var d=t(349),g=t.n(d);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:t.items}))):null}function b(e){var n=e.children,t=e.location;return o.a.createElement(c.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return b}),b.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-creating-gatsby-plugins-mdx-f03d8816369868d40683.js.map