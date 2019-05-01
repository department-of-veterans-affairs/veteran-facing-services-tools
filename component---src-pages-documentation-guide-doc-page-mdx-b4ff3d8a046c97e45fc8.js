(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{280:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return u});a(42);var t=a(43),o=a.n(t),r=a(3),m=a.n(r),c=a(2),p=a.n(c),s=a(4),l=a(341),i={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=l.a,a}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return p.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,a),components:n},p.a.createElement("h2",{id:"how-to-add-documents"},"How to Add Documents"),p.a.createElement(s.MDXTag,{name:"p",components:n},"This is the process of how you should add new pages and documents to this website."),p.a.createElement("h3",{id:"mdx-format"},"MDX Format"),p.a.createElement(s.MDXTag,{name:"p",components:n},"We will be using the .mdx format to create our documents.\nMDX is a format that lets you seamlessly use JSX in your Markdown documents.\nYou can import components, like interactive charts or notifs, and export metadata.\nThis makes writing long-form content with components a blast 🚀"),p.a.createElement(s.MDXTag,{name:"p",components:n},p.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://mdxjs.com/"}},"https://mdxjs.com/")),p.a.createElement("h3",{id:"adding-react-component-documentation"},"Adding React Component documentation"),p.a.createElement(s.MDXTag,{name:"p",components:n},"Adding React Components documentation in Formation."),p.a.createElement(s.MDXTag,{name:"ul",components:n},p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Take a look at the example MDX file at formation-react/src/components/AcceptTermsPrompt/AcceptTermsPrompt.mdx.\nYou can use this as a starter"))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Create a .mdx file the same name as your component in the ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"formation-react/src/components")," folder, adjacent to your component.")),p.a.createElement(s.MDXTag,{name:"pre",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"- components\n  - YourComponent.js\n  - YourComponent.mdx\n"))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Add the required frontmatter at the top of the page")),p.a.createElement(s.MDXTag,{name:"pre",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  ---\n  title: AcceptTermsPrompt\n  name: AcceptTermsPrompt\n  ---\n"))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},"**Restart the development server")),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"If you run into any errors or your page doesn't render correctly,\ntry to delete the .cache file and restart the server again"))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"After you have your page setup you can add markdown and your component code."))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Add descriptions to your PropTypes in your Component files")),p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},"We need to convert the propType comments to jsDoc format.\nThis will not show up in the propTypes definitions on your page if you\ndon't have it in a jsDoc format."),p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},"Here is an examples of how it should look:"),p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},"Changed code:"),p.a.createElement(s.MDXTag,{name:"pre",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"  YourComponent.propTypes = {\n    /**\n     * content shown as the actual terms and conditions\n     */\n    user: PropTypes.object,\n    /**\n     * cancel button click handler\n     */\n    onCancel: PropTypes.func\n  };\n")),p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},"It will look like this on the page."),p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"../../../images/proptypes.png",alt:"proptypes",title:"PropType Image"}}))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Once this is all setup you can start adding your React Component and markdown to your file."))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Start gatsby")),p.a.createElement(s.MDXTag,{name:"pre",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"yarn develop\n"))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"You should be able to see your component in the sidebar or go to the url.")),p.a.createElement(s.MDXTag,{name:"pre",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"http://localhost:8000/yourcomponentnamelowercase\n")))),p.a.createElement("h3",{id:"adding-document-pages"},"Adding Document Pages"),p.a.createElement(s.MDXTag,{name:"ul",components:n},p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Create a .mdx file in ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"src/pages")))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Add the required frontmatter at the top of the page. You will need this if you\nwant it to display in the sidebar.")),p.a.createElement(s.MDXTag,{name:"pre",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-markdown"}},"  // Your .mdx page\n  ---\n  title: How to Add Documents\n  ---\n"))),p.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"li"},p.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"You have the option to create React Components and add them to the MDX file.\nReact components for pages should be located in src/components")))),p.a.createElement("h3",{id:"updating-the-sidebar"},"Updating the sidebar"),p.a.createElement(s.MDXTag,{name:"p",components:n},"After you've added a page, you may want to add it to the sidebar. At ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/sidebar.js"),", you'll find the layout for\nthe main site navigation and sidebar. You can add your page where it makes sense in the site's information architecture."),p.a.createElement(s.MDXTag,{name:"p",components:n},"There are examples in the sidebar file to follow. You'll need to add an object with ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"name")," and ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"href")," properties\nfor regular links and you can also create nested sections by leaving out ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"href")," and adding an ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"items")," array to objects."),p.a.createElement("h3",{id:"graphql-sample-reference"},"GraphQl Sample Reference"),p.a.createElement(s.MDXTag,{name:"p",components:n},"  ",p.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/docs/graphql-reference/"}},"https://www.gatsbyjs.org/docs/graphql-reference/")),p.a.createElement("h3",{id:"github-api-graphql-explorer"},"Github API GraphQL Explorer"),p.a.createElement(s.MDXTag,{name:"p",components:n},"  ",p.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://developer.github.com/v4/explorer/"}},"https://developer.github.com/v4/explorer/")))},n}(p.a.Component),u={}},340:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},341:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(13),m=a.n(r),c=a(343),p=(a(133),a(134),a(135),a(17),a(340)),s=a(342);function l(){return o.a.createElement(s.b,{query:"157057713",render:function(e){return o.a.createElement(i,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:p})}function i(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&e.name,!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(s.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(344),u=a.n(d);function g(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(i,{items:a.items}))):null}function h(e){var n=e.children,a=e.location;return o.a.createElement(c.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return h}),h.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-doc-page-mdx-b4ff3d8a046c97e45fc8.js.map