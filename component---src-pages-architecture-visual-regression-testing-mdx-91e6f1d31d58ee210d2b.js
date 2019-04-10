(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{283:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),r=n(3),m=n.n(r),i=n(2),s=n.n(i),c=n(4),l=n(317),p={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return s.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},s.a.createElement(c.MDXTag,{name:"h1",components:t},"Visual Regression Testing"),s.a.createElement(c.MDXTag,{name:"p",components:t},"This is the first iteration of visual regression testing. It is useful to detect side effects or scope of visual changes."),s.a.createElement(c.MDXTag,{name:"p",components:t},"It works by gathering the links for the site using the sitemap, then opening an chromium instance using Puppeteer to navigate throughout the site, capturing an image of each page. The developer must first create the baseline image set for comparisons (sometimes called the golden set), then after making their changes, run an additional task to make the comparison."),s.a.createElement(c.MDXTag,{name:"h1",components:t},"How to use"),s.a.createElement(c.MDXTag,{name:"ol",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Start the local website instance")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Generate your baseline/golden image set for desktop with the following command"),s.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:visual:baseline")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Note - These images should be generated before your changes, so you may want to switch to the master branch before running this command. This will create the directory ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"site-root/logs/visual-regression/baseline/desktop")," with all of the website images."))),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Generate your baseline/golden image set for mobile with the following command"),s.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:visual:baseline -- --mobile")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Note - These images should be generated before your changes, so you may want to switch to the master branch before running this command. This will create the directory ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"site-root/logs/visual-regression/baseline/mobile")," with all of the website images."))),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Make your changes")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Run the visual regression test for desktop"),s.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:visual")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},'Screenshots of the website (updated to have your changes) will be stored in memory and compared to the baseline images created in step 3. If the images are different, a "diff" image will be generated and stored in the ',s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"site-root/logs/visual-regression/diffs/desktop")," directory"),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"All pages that have changed will be outputted as test case failures"))),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},s.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"li"},"Run the visual regression test for mobile"),s.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"npm run test:visual -- mobile")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},'Screenshots of the website (updated to have your changes) will be stored in memory and compared to the baseline images created in step 3. If the images are different, a "diff" image will be generated and stored in the ',s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"site-root/logs/visual-regression/diffs/mobile")," directory"),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"All pages that have changed will be outputted as test case failures")))),s.a.createElement(c.MDXTag,{name:"h1",components:t},"Limitations/ideas going forward"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Right now this is really limited to being useful for the developer, which I think is a good foundation if we decide to expand on it. Some thoughts -\n1. All screenshots are stored in a git-ignored directory\n- All images are stored in ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"logs/visual-regression"),", with two subdirectories, one being for the baseline and the other for diffs. This was the minimal implementation and what I considered to be a good stopping point for the first iteration.\n- Do we want to include them in version control? And if so, will we store images using the commit SHA?\n2. Tests fail on all pages that don't match the baseline\n- This means that intentionally-changed pages are detected as test failures the same as pages that may have been changed visually as an unintended side affect.\n- If we want to plug this into our build pipeline, this will have to be addressed, meaning that we'll need a way for developers to sign off on pages that were intentionally changed.\n3. Does not scroll or resize the browser window\n- This means that with this current implementation, we're only testing it on the desktop viewport. It wouldn't be very difficult to change the window size and take new screenshots as part of the automated tests but I wanted to avoid overkill on the first iteration.\n4. Uses the sitemap to navigate throughout the site\n- Pages not included in the sitemap will not be evaluated by this tool.\n5. Does not interact with the page at all\n- This means that style for elements that are visible only after certain user interactions will not be evaluated."))},t}(s.a.Component),u={}},312:function(e,t,n){var a;e.exports=(a=n(314))&&a.default||a},313:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},314:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),m=n.n(r),i=n(13),s=n.n(i),c=n(94),l=n(9),p=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(c.a,o()({location:t,pageResources:n},n.json))};p.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=p},315:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},316:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Start up guide",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Accessing internal tools",href:"getting-started/internal-tools"},{name:"VA.gov environments",href:"getting-started/environments"},{name:"Development workflow",href:"getting-started/workflow"},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},317:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(313),m=n(2),i=n.n(m),s=n(13),c=n.n(s),l=n(318),p=n.n(l),d=n(68),u=n.n(d),h=(n(312),i.a.createContext({})),g=function(e){return i.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};n(17),n(133),n(134),n(135);var f=n(315);function b(){return i.a.createElement(g,{query:"157057713",render:function(e){return i.a.createElement(w,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function w(e){var t=e.items;return t.length?i.a.createElement("ul",{className:"menu-list"},t.map(function(e){return i.a.createElement("li",{key:e.name},!!e.items&&i.a.createElement("li",{key:e.name},i.a.createElement("h4",null,e.name),i.a.createElement(w,{items:e.items})),"componentList"===e.query&&i.a.createElement("li",{key:e.name},i.a.createElement("h4",null,e.name),i.a.createElement(b,null)),!!e.href&&i.a.createElement("li",{key:e.name},i.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&i.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var E=n(316),v=n.n(E);function y(e){var t=e.location,n=v.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return i.a.createElement("aside",{className:"sidebar"},i.a.createElement("div",{className:"search"},i.a.createElement("div",{className:"input-wrap"},i.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,n.name),i.a.createElement(u.a,{className:"home-link",to:""},"Home"),i.a.createElement(w,{items:n.items})),!n&&i.a.createElement("ul",{className:"menu-list"},v.a.sections.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(u.a,{to:e.href},e.name))})))}n(319);var T=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return i.a.createElement(g,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(y,{location:n}),i.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(i.a.Component);T.propTypes={children:c.a.node.isRequired};t.a=T}}]);
//# sourceMappingURL=component---src-pages-architecture-visual-regression-testing-mdx-91e6f1d31d58ee210d2b.js.map