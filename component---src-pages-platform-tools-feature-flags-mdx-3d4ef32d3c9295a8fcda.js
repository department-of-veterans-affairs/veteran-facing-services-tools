(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{343:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return d}),n.d(a,"_frontmatter",function(){return u});n(42);var t=n(43),o=n.n(t),r=n(3),s=n.n(r),c=n(2),m=n.n(c),l=n(4),i=n(351),p={},d=function(e){function a(a){var n;return(n=e.call(this,a)||this).layout=i.a,n}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,n=o()(e,["components"]);return m.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:a},m.a.createElement("h1",{id:"front-end-feature-flags"},"Front end feature flags"),m.a.createElement(l.MDXTag,{name:"p",components:a},"Agile and user centric workflows often use testing of partially complete features to refine or research experiences. This document provides recommendations on using feature flags to manage new unreleased features in our continuous integration environment."),m.a.createElement("h2",{id:"enhancements-to-existing-applications"},"Enhancements to Existing Applications"),m.a.createElement(l.MDXTag,{name:"p",components:a},m.a.createElement(l.MDXTag,{name:"strong",components:a,parentName:"p"},"STAGING"),": Unreleased features should always be made available on ",m.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://staging.va.gov"}},"staging.va.gov")," using ",m.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/10380007a3ec77047be10e4fb2a42d343c22c5d3/src/platform/utilities/environment/index.js"}},"!isProduction()")),m.a.createElement(l.MDXTag,{name:"p",components:a},m.a.createElement(l.MDXTag,{name:"strong",components:a,parentName:"p"},"PRODUCTION"),": Unreleased features can be made available on www.va.gov by checking ",m.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/92811be079cac99884abc28c2c96da61f08fe2a5/src/platform/utilities/storage/localStorage.js"}},"localstorage")," for a developer-defined name/value"),m.a.createElement(l.MDXTag,{name:"ul",components:a},m.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"Turning on the enhancement can be done by adding this name/value to the local storage",m.a.createElement(l.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"With a console command ran by the user in the browser, or"),m.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"With application specific code that automatically checks when a certain query parameter is present.")))),m.a.createElement("h2",{id:"new-applications"},"New Applications"),m.a.createElement(l.MDXTag,{name:"p",components:a},m.a.createElement(l.MDXTag,{name:"strong",components:a,parentName:"p"},"STAGING"),": Unreleased applications should always be made available on ",m.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://staging.va.gov"}},"staging.va.gov")," using ",m.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/10380007a3ec77047be10e4fb2a42d343c22c5d3/src/platform/utilities/environment/index.js"}},"!isProduction()")),m.a.createElement(l.MDXTag,{name:"p",components:a},m.a.createElement(l.MDXTag,{name:"strong",components:a,parentName:"p"},"PRODUCTION"),":"),m.a.createElement(l.MDXTag,{name:"ul",components:a},m.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"Unreleased applications can be made available on www.va.gov by checking ",m.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/92811be079cac99884abc28c2c96da61f08fe2a5/src/platform/utilities/storage/localStorage.js"}},"localstorage")," for a developer-defined name/value",m.a.createElement(l.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"Turning on the application can be done by adding this name/value to the local storage",m.a.createElement(l.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"With a console command ran by the user in the browser, or"),m.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"With application specific code that automatically checks when a certain query parameter is present."))))),m.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"Unreleased applications can be made available on production behind a password by setting ",m.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"protected: yes")," in ",m.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/e1030d1a499e39eaeceb8f4bdcbd33baf7ee946d/ansible/deployment/config/revproxy-vagov/vars/react_routes.yml"}},"react_routes.yml"),". External teams should work with their DSVA contact to request support for enabling this.")),m.a.createElement("h2",{id:"new-vagov-content-pages"},"New vagov-content pages"),m.a.createElement(l.MDXTag,{name:"p",components:a},"Unreleased content pages should always be made available on ",m.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://staging.va.gov"}},"staging.va.gov")," by adding an exclusion flag to the front matter of the content page. For example, because this front matter includes ",m.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vagovprod: false"),", this content page would be excluded from the build for the production environment:"),m.a.createElement(l.MDXTag,{name:"pre",components:a},m.a.createElement(l.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-markdown"}},'---\ntitle: Apply for disability benefits\nvagovprod: false\n---\n<nav aria-label="Breadcrumb" aria-live="polite" class="va-nav-breadcrumbs"\nid="va-breadcrumbs">\n')),m.a.createElement(l.MDXTag,{name:"p",components:a},"Content pages can be excluded from any or all of these environments:"),m.a.createElement(l.MDXTag,{name:"pre",components:a},m.a.createElement(l.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-markdown"}},"vagovprod: false\nvagovstaging: false\nvagovdev: false\nlocalhost: false\n")),m.a.createElement("h2",{id:"writing-good-feature-flags"},"Writing good feature flags"),m.a.createElement(l.MDXTag,{name:"ul",components:a},m.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"New features or applications should be merged often so they can be included as part of the daily continuous integration deploy."),m.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"Feature flagged enhancements should be made with code that is ",m.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to"}},"easy to delete"),"- ideally done simply and with as few checks as possible. Repeating yourself is okay in feature flagged code.",m.a.createElement(l.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"Making code that's easy to delete ensures that deprecated code is quickly removed once a feature is released."))),m.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"Making features or applications available in production should done only as needed for testing with users.")),m.a.createElement("h2",{id:"feature-flags-for-metalsmith-code"},"Feature flags for Metalsmith code"),m.a.createElement(l.MDXTag,{name:"p",components:a},"Va.gov creates some pages based on content from the VA's Drupal CMS. The CMS has its own content model, which can sometimes change. When those changes modify the existing structure of the content model, the queries and templates in vets-website that expect a different model may break. And because the CMS and vets-website are separate systems with different deployment processes, we can't push up changes in both systems simultaneously. In order to keep the two systems in sync, we need to be able to turn features on and off in vets-website depending on what environment we're in, and update that feature state whenever a cms deployment happens."),m.a.createElement(l.MDXTag,{name:"p",components:a},"We've created some infrastructure to make this a little easier to do."),m.a.createElement("h3",{id:"creating-a-flag-and-turning-it-on-or-off"},"Creating a flag and turning it on or off"),m.a.createElement(l.MDXTag,{name:"p",components:a},"In src/site/utilities/featureFlags.js, you'll see a list of current flags and their state:"),m.a.createElement(l.MDXTag,{name:"pre",components:a},m.a.createElement(l.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"// Edit this to add new flags\nconst featureFlags = {\n  FEATURE1: 'feature1',\n};\n\n// Edit this to turn flags on or off\nconst flagsByBuildtype = {\n  // localhost: [],\n  localhost: [featureFlags.FEATURE1],\n  // vagovdev: [flags.FEATURE1],\n  vagovdev: [],\n  // vagovstaging: [flags.FEATURE1],\n  vagovstaging: [],\n  // vagovprod: [flags.FEATURE1],\n  vagovprod: [],\n};\n")),m.a.createElement(l.MDXTag,{name:"p",components:a},"In these two objects, you can create a new feature flag and set which web environments it is turned on in. Whenever you need to change what environment has a particular feature, you would add the flag to the array associate with that build type."),m.a.createElement("h3",{id:"using-flags-in-node-code"},"Using flags in Node code"),m.a.createElement(l.MDXTag,{name:"p",components:a},"There are a couple ways to use the flag in Node Javascript code. One way is to use the ",m.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"applyFeatureFlags")," helper in a file that you would like to create a feature flagged variant of:"),m.a.createElement(l.MDXTag,{name:"pre",components:a},m.a.createElement(l.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"const someQuery = 'some query info';\n\nmodule.exports = someQuery;\napplyFeatureFlags(module);\n")),m.a.createElement(l.MDXTag,{name:"p",components:a},"This helper looks through all of the enabled feature flags and checks to see if there are files with the same name as the current file, but with a feature flag in the file path before the extension."),m.a.createElement(l.MDXTag,{name:"p",components:a},"So, for example, if your file is ",m.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"healthCarePage.graphql.js")," and there's a feature flag called ",m.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"feature1"),", the helper will look for ",m.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"healthCarePage.graphql.feature1.js"),". If ",m.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"feature1")," is turned on, then it will replace the exported module data with the export from the file with the ",m.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"feature1")," suffix."),m.a.createElement(l.MDXTag,{name:"p",components:a},"If you want to make a smaller conditional logic change than creating a whole new file, you can import the featureFlags file and check the flags directly:"),m.a.createElement(l.MDXTag,{name:"pre",components:a},m.a.createElement(l.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"const { featureFlags, enabledFeatureFlags } = require('./src/site/utilities/featureFlags');\n\n...\n\nif (enabledFeatureFlags[featureFlags.FEATURE1]) {\n  // do something when the flag is on\n}\n")),m.a.createElement(l.MDXTag,{name:"p",components:a},"Keep in mind the advice in the ",m.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#writing-good-feature-flags"}},"Writing good feature flags")," section. You should write the logic in a way that is easy to remove later. It's often easier to change some logic and then add a conditional that modifies something with the flag is ",m.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"not")," enabled. That lets you simply remove the conditional later."),m.a.createElement("h3",{id:"using-feature-flags-in-liquid-templates"},"Using feature flags in Liquid templates"),m.a.createElement(l.MDXTag,{name:"p",components:a},"All liquid templates have access to the current feature flag state:"),m.a.createElement(l.MDXTag,{name:"pre",components:a},m.a.createElement(l.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-liquid"}},"{% if enabledFeatureFlags.feature1 == true %}\n  <div>Fancy new feature</div>\n{% endif %}\n")))},a}(m.a.Component),u={}},350:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}}]}}}},351:function(e,a,n){"use strict";var t=n(2),o=n.n(t),r=n(13),s=n.n(r),c=n(354),m=(n(133),n(134),n(135),n(17),n(350)),l=n(352);function i(){return o.a.createElement(l.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var a=e.item;return a.href?o.a.createElement("li",{key:a.name},o.a.createElement(l.a,{to:a.href},a.name)):o.a.createElement("li",{key:a.name},a.name," (future)")}function d(e){var a=e.items,n=e.isSublist,t=void 0!==n&&n;return a.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},a.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var u=n(353),g=n.n(u);function h(e){var a=e.location,n=g.a.sections.find(function(e){return a.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:n.items}))):null}function f(e){var a=e.children,n=e.location;return o.a.createElement(c.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a)))}n.d(a,"a",function(){return f}),f.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-tools-feature-flags-mdx-3d4ef32d3c9295a8fcda.js.map