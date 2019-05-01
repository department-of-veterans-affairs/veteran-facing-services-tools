(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{324:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),r=n(3),s=n.n(r),i=n(2),m=n.n(i),c=n(4),l=n(347),d={},p=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,n),components:t},m.a.createElement("h1",{id:"uswdsfoundation"},"USWDS/Foundation"),m.a.createElement(c.MDXTag,{name:"table",components:t},m.a.createElement(c.MDXTag,{name:"thead",components:t,parentName:"table"},m.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"thead"},m.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),m.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),m.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),m.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}))),m.a.createElement(c.MDXTag,{name:"tbody",components:t,parentName:"table"},m.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Last Decision Made:")),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Keep Foundation for grid for now"),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Decision Date:")),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"05/2017")),m.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Decision:")),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Yes"),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Date:")),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"06/2017")))),m.a.createElement(c.MDXTag,{name:"p",components:t},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Revisit Criteria:")," Once keeping Foundation with an older version of USWDS starts to create too much pain for developers, or once USWDS adds additional functionality that we need."),m.a.createElement("h2",{id:"summary"},"Summary"),m.a.createElement(c.MDXTag,{name:"p",components:t},"We needed to reach a decision on whether or not to finish the work of stripping out Foundation."),m.a.createElement(c.MDXTag,{name:"p",components:t},"Pros:"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"It would streamline our front-end frameworks"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"It would reduce bloat"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"It would enable us to upgrade to the latest version of USWDS")),m.a.createElement(c.MDXTag,{name:"p",components:t},"Cons:"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"It would be a huge investment of time and resources."),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"It wasn't actually causing that much developer pain to continue to use Foundation."),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"It might be possible to reduce bloat without having to totally remove Foundation"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"USWDS didn't have all the functionality we needed out of the box.")),m.a.createElement("h2",{id:"history"},"History"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Removing Foundation from vets-website became a project our team wanted to tackle for a few reasons:\n1. We wanted to remove bloat from our bundle (both in taking out Foundation and the JavaScript it relied upon)\n2. It seemed unnecessary to be including 2 separate grid frameworks in our codebase (Foundation and USWDS)\n3. Foundation had conflicts with the latest version of USWDS, preventing us from upgrading"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Tiffany Brown (front-end dev) had been working on trying to remove Foundation from vets-website for a few months. It was a tangled problem that touched every part of Vets.gov and had cascading effects."),m.a.createElement(c.MDXTag,{name:"p",components:t},"She left the team on Friday, May 12 with the following work:\n1. The ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/549"}},"original ticket")," that includes a ton of documentation\n2. An ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/pull/5353"}},"open PR"),"\n3. ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/2739"}},"Hand-off notes")),m.a.createElement(c.MDXTag,{name:"p",components:t},"Tiffany got us pretty far before she left, but there was still a good amount of work left to do to complete this project."),m.a.createElement("h2",{id:"decision-meeting---may-18-2017"},"Decision Meeting - May 18, 2017"),m.a.createElement(c.MDXTag,{name:"p",components:t},"We set up a meeting to decide on next steps for finishing the work of stripping out Foundation."),m.a.createElement(c.MDXTag,{name:"p",components:t},"Attendees:"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Alex Yale-Loehr (Vets.gov tech lead)"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Anne Kainic (Front-end dev)"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Jeff Balboni (Front-end dev)"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Claire Hsu (Front-end dev)"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Raquel Romano (Front-end dev)"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Ben Shyong (Front-end dev)"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Eugene Doan (Front-end dev)"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Bill Hunt")),m.a.createElement(c.MDXTag,{name:"p",components:t},"There were 2 questions we had to answer:"),m.a.createElement(c.MDXTag,{name:"ol",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Was the work of stripping out Foundation and exclusively using USWDS worth the effort it was going to take?"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"If so, what was the best approach for doing it?")),m.a.createElement(c.MDXTag,{name:"p",components:t},"For question 1 (was the work worth the effort it would take), developers were not currently experiencing a lot of pain in having to work between USWDS and Foundation. We believed it might be possible to strip our jQuery and the Foundation JavaScript without having to remove the Foundation grid and visibility classes, the only part of Foundation we were currently using. This would take care of the bloat problem without having to go through the enormous effort of switching grid classes everywhere and fixing visual regression issues."),m.a.createElement(c.MDXTag,{name:"p",components:t},"An additional problem with removing Foundation was that USWDS did not provide all the functionality we needed that we currently got from Foundation (small width grid classes and visibility classes). We would either have to talk to the USWDS team and figure out a way to include those things in USWDS, or write our own styles on top of it so that we could do all the same things we were doing before with Foundation. This would mean additional time and resources."),m.a.createElement(c.MDXTag,{name:"p",components:t},"The one downside to deciding not to remove Foundation was that it seemed to conflict with the latest upgrade of USWDS. This would mean we could not keep up to date with USWDS releases."),m.a.createElement(c.MDXTag,{name:"p",components:t},"For question 2 (what was the best approach), if we decided to remove Foundation, we had 2 possible routes to do so:\n1. Have all the front-end developers devote 2-3 days of exclusively working on converting the grid classes for all the apps and content pages and get the changes merged as soon as possible."),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Advantages: the fastest solution to finishing this work."),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Disadvantages: an investment of resources and probably some pain.")),m.a.createElement(c.MDXTag,{name:"ol",components:t,props:{start:2}},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Create a parallel set of styles that did not use Foundation, and move apps and content pages over to using the new set of styles when possible.")),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Advantages: gives us the flexibility to migrate when we have time."),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Disadvantages: a lot of overhead work.")),m.a.createElement("h2",{id:"the-decision"},"The Decision"),m.a.createElement(c.MDXTag,{name:"p",components:t},"The short-term decision was to explore ways of not removing the Foundation grid."),m.a.createElement(c.MDXTag,{name:"p",components:t},"There were 3 action items that came out of this decision:\n1. Try removing jQuery and the Foundation JavaScript to ensure that everything continues to work without those two larger pieces of JavaScript.\n2. Investigate what we miss out on by not upgrading the newest version of USWDS --\x3e ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/2873"}},"GH issue with documentation"),"\n3. Talk to the 18f team about some of the features that we would need in USWDS to be able to fully use their framework (small width grid classes and visibility classes)"))},t}(m.a.Component),u={}},340:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(2),o=n.n(a),r=n(13),s=n.n(r),i=n(68),m=n.n(i);n.d(t,"a",function(){return m.a});n(342);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},341:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"visual-design",name:"Visual design",href:"/visual-design",items:[{name:"Formation components",query:"componentList"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Documentation",items:[{name:"About the schema and uiSchema objects",href:"/forms/about-the-schema-and-uischema-objects"},{name:"Available widgets",href:"/forms/available-widgets"},{name:"Common patterns",href:"/forms/common-patterns-for-building-forms"},{name:"Config options",href:"/forms/config-options"},{name:"Component hierarchy",href:"/forms/component-hierarchy"},{name:"Creating a form config file",href:"/forms/creating-a-form-config-file"},{name:"Creating custom fields and widgets",href:"/forms/creating-custom-fields-and-widgets"},{name:"Form features and usage guidelines",href:"/forms/available-features-and-usage-guidelines"}]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Site structure",items:[{name:"Client overview",href:"/platform/site-structure/client-overview"},{name:"VA.gov environments",href:"/platform/site-structure/environments"},{name:"Bundles and code organization",href:"/platform/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/platform/site-structure/styling-overview"}]},{name:"Architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/platform/architecture/metalsmith/urls"},{name:"How templates work",href:"/platform/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/platform/architecture/metalsmith/collections"}]},{name:"Teamsite",href:"/platform/architecture/teamsite"},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/platform/front-end-standards/react"},{name:"Redux standards",href:"/platform/front-end-standards/redux"},{name:"Styles",href:"/platform/front-end-standards/styles"},{name:"Accessibility",href:"/platform/front-end-standards/accessibility"},{name:"Documented Decisions",href:"/platform/front-end-standards/documented-decisions/summary"}]},{name:"Tools",items:[{name:"Visual regression testing",href:"/platform/tools/visual-regression-testing"},{name:"Feature flags",href:"/platform/tools/feature-flags"},{name:"Application generator",href:"/platform/tools/generator"}]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Documentation style guide",href:"/documentation-guide/documentation-style-guide"},{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},342:function(e,t,n){var a;e.exports=(a=n(344))&&a.default||a},343:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov | Client Applicaiton Documentation"}}}}},344:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),s=n.n(r),i=n(13),m=n.n(i),c=n(94),l=n(9),d=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?s.a.createElement(c.a,o()({location:t,pageResources:n},n.json)):null};d.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},t.default=d},345:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(343),s=n(2),i=n.n(s),m=n(13),c=n.n(m),l=n(348),d=n.n(l),p=n(340),u=(n(17),n(133),n(134),n(341)),h=n.n(u),g=n(18),f=n.n(g),v=n(349),b=n.n(v),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var n;return f()(((n={})[t.id]=!1,n),e)},{}),n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.open,a=t.onClose,o=t.location;return i.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":n}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:a,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var n;return e.setState(((n={})[t.id]=!e.state[t.id],n))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),i.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(p.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(i.a.Component),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={navOpen:!1},n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(p.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(p.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(E,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(i.a.Component),y=(n(350),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return i.a.createElement(p.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(w,{location:n}),t)},data:r})},t}(i.a.Component));y.propTypes={children:c.a.node.isRequired};t.a=y},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,t,n){"use strict";var a=n(2),o=n.n(a),r=n(13),s=n.n(r),i=n(345),m=(n(133),n(134),n(135),n(17),n(346)),c=n(340);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function d(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&e.name,!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var p=n(341),u=n.n(p);function h(e){var t=e.location,n=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:n.items}))):null}function g(e){var t=e.children,n=e.location;return o.a.createElement(i.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}n.d(t,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-uswds-foundation-mdx-2f49dbd1dc4f8b8015fa.js.map