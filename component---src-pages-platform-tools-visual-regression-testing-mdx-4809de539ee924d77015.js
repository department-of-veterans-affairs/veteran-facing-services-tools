(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{334:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"_frontmatter",function(){return p});n(42);var a=n(43),o=n.n(a),s=n(3),r=n.n(s),i=n(2),m=n.n(i),c=n(4),l=n(347),d={},u=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,n),components:t},m.a.createElement("h1",{id:"visual-regression-testing"},"Visual Regression Testing"),m.a.createElement(c.MDXTag,{name:"p",components:t},"This is the first iteration of visual regression testing. It is useful to detect side effects or scope of visual changes."),m.a.createElement(c.MDXTag,{name:"p",components:t},"It works by gathering the links for the site using the sitemap, then opening an chromium instance using Puppeteer to navigate throughout the site, capturing an image of each page. The developer must first create the baseline image set for comparisons (sometimes called the golden set), then after making their changes, run an additional task to make the comparison."),m.a.createElement("h1",{id:"how-to-use"},"How to use"),m.a.createElement(c.MDXTag,{name:"ol",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Start the local website instance")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Generate your baseline/golden image set for desktop with the following command"),m.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:visual:baseline")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Note - These images should be generated before your changes, so you may want to switch to the master branch before running this command. This will create the directory ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"site-root/logs/visual-regression/baseline/desktop")," with all of the website images."))),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Generate your baseline/golden image set for mobile with the following command"),m.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:visual:baseline -- --mobile")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Note - These images should be generated before your changes, so you may want to switch to the master branch before running this command. This will create the directory ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"site-root/logs/visual-regression/baseline/mobile")," with all of the website images."))),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Make your changes")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Run the visual regression test for desktop"),m.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:visual")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},'Screenshots of the website (updated to have your changes) will be stored in memory and compared to the baseline images created in step 3. If the images are different, a "diff" image will be generated and stored in the ',m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"site-root/logs/visual-regression/diffs/desktop")," directory"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"All pages that have changed will be outputted as test case failures"))),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Run the visual regression test for mobile"),m.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:visual -- mobile")),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},'Screenshots of the website (updated to have your changes) will be stored in memory and compared to the baseline images created in step 3. If the images are different, a "diff" image will be generated and stored in the ',m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"site-root/logs/visual-regression/diffs/mobile")," directory"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"All pages that have changed will be outputted as test case failures")))),m.a.createElement("h1",{id:"limitationsideas-going-forward"},"Limitations/ideas going forward"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Right now this is really limited to being useful for the developer, which I think is a good foundation if we decide to expand on it. Some thoughts -\n1. All screenshots are stored in a git-ignored directory\n- All images are stored in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"logs/visual-regression"),", with two subdirectories, one being for the baseline and the other for diffs. This was the minimal implementation and what I considered to be a good stopping point for the first iteration.\n- Do we want to include them in version control? And if so, will we store images using the commit SHA?\n2. Tests fail on all pages that don't match the baseline\n- This means that intentionally-changed pages are detected as test failures the same as pages that may have been changed visually as an unintended side affect.\n- If we want to plug this into our build pipeline, this will have to be addressed, meaning that we'll need a way for developers to sign off on pages that were intentionally changed.\n3. Does not scroll or resize the browser window\n- This means that with this current implementation, we're only testing it on the desktop viewport. It wouldn't be very difficult to change the window size and take new screenshots as part of the automated tests but I wanted to avoid overkill on the first iteration.\n4. Uses the sitemap to navigate throughout the site\n- Pages not included in the sitemap will not be evaluated by this tool.\n5. Does not interact with the page at all\n- This means that style for elements that are visible only after certain user interactions will not be evaluated."))},t}(m.a.Component),p={}},340:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(2),o=n.n(a),s=n(13),r=n.n(s),i=n(68),m=n.n(i);n.d(t,"a",function(){return m.a});n(342);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},341:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},342:function(e,t,n){var a;e.exports=(a=n(344))&&a.default||a},343:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},344:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),s=n(2),r=n.n(s),i=n(13),m=n.n(i),c=n(94),l=n(9),d=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,o()({location:t,pageResources:n},n.json)):null};d.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},t.default=d},345:function(e,t,n){"use strict";var a=n(3),o=n.n(a),s=n(343),r=n(2),i=n.n(r),m=n(13),c=n.n(m),l=n(348),d=n.n(l),u=n(340),p=(n(17),n(133),n(134),n(341)),h=n.n(p),g=n(18),f=n.n(g),v=n(349),b=n.n(v),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var n;return f()(((n={})[t.id]=!1,n),e)},{}),n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.open,a=t.onClose,o=t.location;return i.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":n}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:a,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var n;return e.setState(((n={})[t.id]=!e.state[t.id],n))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),i.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(u.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(i.a.Component),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={navOpen:!1},n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(u.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(u.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(E,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(i.a.Component),y=(n(350),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return i.a.createElement(u.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(w,{location:n}),t)},data:s})},t}(i.a.Component));y.propTypes={children:c.a.node.isRequired};t.a=y},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}}]}}}},347:function(e,t,n){"use strict";var a=n(2),o=n.n(a),s=n(13),r=n.n(s),i=n(345),m=(n(133),n(134),n(135),n(17),n(346)),c=n(340);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function d(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var u=n(341),p=n.n(u);function h(e){var t=e.location,n=p.a.sections.find(function(e){return t.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:n.items}))):null}function g(e){var t=e.children,n=e.location;return o.a.createElement(i.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}n.d(t,"a",function(){return g}),g.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-tools-visual-regression-testing-mdx-4809de539ee924d77015.js.map