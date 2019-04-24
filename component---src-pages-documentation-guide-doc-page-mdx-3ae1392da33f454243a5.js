(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{280:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),r=t(3),s=t.n(r),m=t(2),c=t.n(m),i=t(4),l=t(345),p={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},c.a.createElement("h2",{id:"how-to-add-documents"},"How to Add Documents"),c.a.createElement(i.MDXTag,{name:"p",components:n},"This is the process of how you should add new pages and documents to this website."),c.a.createElement("h3",{id:"mdx-format"},"MDX Format"),c.a.createElement(i.MDXTag,{name:"p",components:n},"We will be using the .mdx format to create our documents.\nMDX is a format that lets you seamlessly use JSX in your Markdown documents.\nYou can import components, like interactive charts or notifs, and export metadata.\nThis makes writing long-form content with components a blast 🚀"),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://mdxjs.com/"}},"https://mdxjs.com/")),c.a.createElement("h3",{id:"adding-react-component-documentation"},"Adding React Component documentation"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Adding React Components documentation in Formation."),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Take a look at the example MDX file at formation-react/src/components/AcceptTermsPrompt/AcceptTermsPrompt.mdx.\nYou can use this as a starter"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Create a .mdx file the same name as your component in the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"formation-react/src/components")," folder, adjacent to your component.")),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"- components\n  - YourComponent.js\n  - YourComponent.mdx\n"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Add the required frontmatter at the top of the page")),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  ---\n  title: AcceptTermsPrompt\n  name: AcceptTermsPrompt\n  ---\n"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"**Restart the development server")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"If you run into any errors or your page doesn't render correctly,\ntry to delete the .cache file and restart the server again"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"After you have your page setup you can add markdown and your component code."))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Add descriptions to your PropTypes in your Component files")),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"We need to convert the propType comments to jsDoc format.\nThis will not show up in the propTypes definitions on your page if you\ndon't have it in a jsDoc format."),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Here is an examples of how it should look:"),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"Changed code:"),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"  YourComponent.propTypes = {\n    /**\n     * content shown as the actual terms and conditions\n     */\n    user: PropTypes.object,\n    /**\n     * cancel button click handler\n     */\n    onCancel: PropTypes.func\n  };\n")),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},"It will look like this on the page."),c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"../../../images/proptypes.png",alt:"proptypes",title:"PropType Image"}}))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Once this is all setup you can start adding your React Component and markdown to your file."))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Start gatsby")),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"yarn develop\n"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"You should be able to see your component in the sidebar or go to the url.")),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"http://localhost:8000/yourcomponentnamelowercase\n")))),c.a.createElement("h3",{id:"adding-document-pages"},"Adding Document Pages"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Create a .mdx file in ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"src/pages")))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"Add the required frontmatter at the top of the page. You will need this if you\nwant it to display in the sidebar.")),c.a.createElement(i.MDXTag,{name:"pre",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-markdown"}},"  // Your .mdx page\n  ---\n  title: How to Add Documents\n  ---\n"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"You have the option to create React Components and add them to the MDX file.\nReact components for pages should be located in src/components")))),c.a.createElement("h3",{id:"updating-the-sidebar"},"Updating the sidebar"),c.a.createElement(i.MDXTag,{name:"p",components:n},"After you've added a page, you may want to add it to the sidebar. At ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/sidebar.js"),", you'll find the layout for\nthe main site navigation and sidebar. You can add your page where it makes sense in the site's information architecture."),c.a.createElement(i.MDXTag,{name:"p",components:n},"There are examples in the sidebar file to follow. You'll need to add an object with ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"name")," and ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"href")," properties\nfor regular links and you can also create nested sections by leaving out ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"href")," and adding an ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"items")," array to objects."),c.a.createElement("h3",{id:"graphql-sample-reference"},"GraphQl Sample Reference"),c.a.createElement(i.MDXTag,{name:"p",components:n},"  ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.gatsbyjs.org/docs/graphql-reference/"}},"https://www.gatsbyjs.org/docs/graphql-reference/")),c.a.createElement("h3",{id:"github-api-graphql-explorer"},"Github API GraphQL Explorer"),c.a.createElement(i.MDXTag,{name:"p",components:n},"  ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://developer.github.com/v4/explorer/"}},"https://developer.github.com/v4/explorer/")))},n}(c.a.Component),u={}},338:function(e,n,t){"use strict";t.d(n,"b",function(){return l});var a=t(2),o=t.n(a),r=t(13),s=t.n(r),m=t(68),c=t.n(m);t.d(n,"a",function(){return c.a});t(340);var i=o.a.createContext({}),l=function(e){return o.a.createElement(i.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},339:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},340:function(e,n,t){var a;e.exports=(a=t(342))&&a.default||a},341:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},342:function(e,n,t){"use strict";t.r(n);var a=t(18),o=t.n(a),r=t(2),s=t.n(r),m=t(13),c=t.n(m),i=t(94),l=t(9),p=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return t?s.a.createElement(i.a,o()({location:n,pageResources:t},t.json)):null};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=p},343:function(e,n,t){"use strict";var a=t(3),o=t.n(a),r=t(341),s=t(2),m=t.n(s),c=t(13),i=t.n(c),l=t(346),p=t.n(l),d=t(338),u=(t(17),t(133),t(134),t(339)),g=t.n(u),h=t(18),f=t.n(h),v=t(347),E=t.n(v),b=function(e){function n(n){var t;return(t=e.call(this,n)||this).state=g.a.sections.reduce(function(e,n){var t;return f()(((t={})[n.id]=!1,t),e)},{}),t}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props,t=n.open,a=n.onClose,o=n.location;return m.a.createElement("div",{className:E()("site-c-mobile-nav",{"is-visible":t}),id:"mobile-nav"},m.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:a,"aria-label":"Close this menu"},m.a.createElement("i",{className:"fas fa-times"})),m.a.createElement("div",{className:"usa-accordion "},g.a.sections.map(function(n){return m.a.createElement("div",{key:n.id},m.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},m.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var t;return e.setState(((t={})[n.id]=!e.state[n.id],t))},"aria-expanded":e.state[n.id]?"true":"false","aria-controls":"nav-"+n.id},n.name)),m.a.createElement("div",{id:"nav-"+n.id,"aria-hidden":e.state[n.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},m.a.createElement("ul",{className:"site-c-mobile-nav-list"},m.a.createElement("li",{className:"site-c-mobile-nav-list__item"},m.a.createElement(d.a,{className:E()("site-c-mobile-nav-list__link",{current:o.pathname===n.href}),to:n.href},"Overview")))))})))},n}(m.a.Component),N=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={navOpen:!1},t}return o()(n,e),n.prototype.render=function(){var e=this,n=this.props.location;return m.a.createElement("div",null,m.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),m.a.createElement("header",{className:"site-c-header",role:"banner"},m.a.createElement("div",{className:"site-l-wrapper"},m.a.createElement("div",{className:"site-c-header__masthead"},m.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},m.a.createElement("em",{className:"site-c-header__logo-text"},m.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},m.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",m.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),m.a.createElement("div",{className:"site-c-header__utility-links"},m.a.createElement("div",{id:"search-container",className:"site-search-container"},m.a.createElement("i",{className:"fas fa-search search-icon"}),m.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),m.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},m.a.createElement("i",{className:"fas fa-search"})),m.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),m.a.createElement("nav",{className:"site-c-header__nav"},m.a.createElement("ul",{className:"site-c-header__nav-list"},g.a.sections.map(function(e){return m.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},m.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(n.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),m.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},m.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),m.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&m.a.createElement("div",{className:"site-c-overlay is-visible"}),m.a.createElement(b,{location:n,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},n}(m.a.Component),y=(t(348),function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,n=e.children,t=e.location;return m.a.createElement(d.b,{query:"1044757290",render:function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},m.a.createElement("html",{lang:"en"})),m.a.createElement(N,{location:t}),n)},data:r})},n}(m.a.Component));y.propTypes={children:i.a.node.isRequired};n.a=y},344:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},345:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),s=t.n(r),m=t(343),c=(t(133),t(134),t(135),t(17),t(344)),i=t(338);function l(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function p(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(i.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=t(339),u=t.n(d);function g(e){var n=e.location,t=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:t.items}))):null}function h(e){var n=e.children,t=e.location;return o.a.createElement(m.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return h}),h.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-doc-page-mdx-3ae1392da33f454243a5.js.map