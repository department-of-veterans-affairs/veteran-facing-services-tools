(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{324:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(45);var a=n(46),o=n.n(a),r=n(3),s=n.n(r),m=n(2),p=n.n(m),c=n(4),l=n(368),i={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return p.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,n),components:t},p.a.createElement("h1",{id:"vagov-content-management-system-overview"},"VA.gov content management system overview"),p.a.createElement(c.MDXTag,{name:"p",components:t},"The VA is currently in the process of moving content from several other systems into one primary content management system, powered by Drupal. VA.gov takes a decoupled approach, where content editors make change in a Drupal environment, then VA.gov build process queries that Drupal instance and transforms the resulting content into static html that is deployed on the site. Drupal does not control any Veteran-facing page rendering."),p.a.createElement(c.MDXTag,{name:"p",components:t},"In addition, there is a system that can be used to view content changes on demand, outside of the typical build process, so that content editors can preview their changes before they go live."),p.a.createElement("h2",{id:"existing-content-sources"},"Existing content sources"),p.a.createElement(c.MDXTag,{name:"p",components:t},"Content displayed on VA.gov exists in four primary locations:"),p.a.createElement(c.MDXTag,{name:"ul",components:t},p.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vagov-content"}},"vagov-content repo"),", in Markdown and YAML"),p.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"The ",p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website"}},"vets-website repo")," (footer link data in JSON, plus templating)"),p.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Teamsite, the VA's legacy content management system"),p.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Drupal, the VA's current content management system")),p.a.createElement(c.MDXTag,{name:"p",components:t},"Eventually, all this content will be consolidated and moved into Drupal."),p.a.createElement("h2",{id:"drupal-environments"},"Drupal environments"),p.a.createElement(c.MDXTag,{name:"p",components:t},"All Drupal environments require you to either be on the VA network or the SOCKS proxy."),p.a.createElement(c.MDXTag,{name:"table",components:t},p.a.createElement(c.MDXTag,{name:"thead",components:t,parentName:"table"},p.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"thead"},p.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Environment"),p.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Site url"),p.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"VA.gov environment"))),p.a.createElement(c.MDXTag,{name:"tbody",components:t,parentName:"table"},p.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"development"),p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"http://dev.cms.va.gov"}},"http://dev.cms.va.gov")),p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://dev.va.gov"}},"https://dev.va.gov"))),p.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"staging"),p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"http://staging.cms.va.gov"}},"http://staging.cms.va.gov")),p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://staging.va.gov"}},"https://staging.va.gov"))),p.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"production"),p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"http://prod.cms.va.gov"}},"http://prod.cms.va.gov")),p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://www.va.gov"}},"https://www.va.gov"))))),p.a.createElement("h2",{id:"how-content-is-transformed-into-pages"},"How content is transformed into pages"),p.a.createElement(c.MDXTag,{name:"p",components:t},"VA.gov is a static html/js/css site, built with a static site generator tool called Metalsmith. During the Metalsmith build process we query the appropriate Drupal environment with a GraphQL query. The results of that query are transformed into pages through the Metalsmith build pipeline. There are ",p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://shopify.github.io/liquid/"}},"liquid")," templates specific to page content that came from Drupal, generally denoted with a ",p.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},".drupal.liquid")," suffix. Each ",p.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"entity")," from Drupal has a corresponding ",p.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"entityType"),", which is used to choose the entry template for each ",p.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"entity")," (i.e. page) from Drupal."),p.a.createElement(c.MDXTag,{name:"ul",components:t},p.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/platform/architecture/static-site"}},"Metalsmith build process diagram")),p.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/stages/build/drupal/graphql/GetAllPages.graphql.js"}},"Primary GraphQL query")),p.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/site/layouts"}},"Entry templates"))),p.a.createElement("h2",{id:"jenkins-build-process-integration"},"Jenkins build process integration"),p.a.createElement(c.MDXTag,{name:"p",components:t},"Drupal is queried in the Jenkins build process for any vets-website branch. On Jenkins, however, there is a caching mechanism to help deal with downtime and other failures in the live Drupal environments. After any successful master build, the results of the GraphQL query and any files downloaded from Drupal during the build process are put into a tarball and uploaded to S3. For builds on any branch, if the site build (the ",p.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"npm run build")," command) fails, Jenkins will download the appropriate cache and retry the build."),p.a.createElement(c.MDXTag,{name:"ul",components:t},p.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/platform/architecture/build-deploy-flows#standard-masterpr-build"}},"Jenkins build process flow")),p.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/script/drupal-aws-cache.js"}},"Drupal/AWS cache script"))),p.a.createElement("h2",{id:"deployment"},"Deployment"),p.a.createElement(c.MDXTag,{name:"p",components:t},"A typical cms deploys content changes to users immediately, because the content is stored in the same system that renders the pages that contain that content. In our decoupled approach, however, content needs to be run through the VA.gov build process before it can go live. There are two ways of getting content onto VA.gov:"),p.a.createElement(c.MDXTag,{name:"ul",components:t},p.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/platform/architecture/build-deploy-flows#daily-deploy"}},"Scheduled daily deploy")),p.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/veteran-facing-services-tools/platform/architecture/build-deploy-flows#content-only-deploy"}},"Off schedule content only deploy"))),p.a.createElement(c.MDXTag,{name:"p",components:t},"The scheduled deploy begins at 2pm ET, and fetches new content from Drupal before deploying. The off schedule deploy is a Jenkins job that can be triggered from a button in the production Drupal environment which will get the currently released code and update it with the latest content from Drupal."),p.a.createElement(c.MDXTag,{name:"p",components:t},"Off schedule deploys can be done for all environments, however there are separate Jenkins jobs for production vs staging/dev.The main difference is that dev/staging deploys update the latest builds from vets-website master with new content and the production deploy updates the latest released code on VA.gov with new content."),p.a.createElement("h2",{id:"preview-server"},"Preview server"),p.a.createElement(c.MDXTag,{name:"p",components:t},"A typical cms also provides an easy way to preview changes before making them live, because it can render unpublished content with the templates and rendering logic in the same cms. A decoupled approach can't do this by default, so we created a preview server to emulate it. The preview servers query Drupal for the latest unpublished revision of a specified page, then run an abbreviated verion of the Metalsmith build process for that single page and return the resulting html. This is done per request and the results are not written to the server."),p.a.createElement(c.MDXTag,{name:"table",components:t},p.a.createElement(c.MDXTag,{name:"thead",components:t,parentName:"table"},p.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"thead"},p.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Environment"),p.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Site url"),p.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"VA.gov environment"))),p.a.createElement(c.MDXTag,{name:"tbody",components:t,parentName:"table"},p.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"development"),p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"http://preview-dev.vfs.va.gov"}},"http://preview-dev.vfs.va.gov")),p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://dev.va.gov"}},"https://dev.va.gov"))),p.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"staging"),p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"http://preview-staging-vfs.va.gov"}},"http://preview-staging-vfs.va.gov")),p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://staging.va.gov"}},"https://staging.va.gov"))),p.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"production"),p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"http://preview-prod.vfs.va.gov"}},"http://preview-prod.vfs.va.gov")),p.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://va.gov"}},"https://va.gov"))))),p.a.createElement(c.MDXTag,{name:"p",components:t},"The preview server is written in Node and Express, ",p.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/script/preview.js"}},"located in vets-website"),"."),p.a.createElement(c.MDXTag,{name:"p",components:t},"Requests that are made to the preview server that are not to the special ",p.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/preview")," route are proxied to the associated live site. So, for example, a request for ",p.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/health-care")," on the staging preview server will request the ",p.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/health-care")," page from staging.va.gov. If you were trying to preview an unpublished version of the ",p.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/health-care")," page you would go to ",p.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/preview?nodeId=<id of health care entity>"),"."),p.a.createElement("h3",{id:"preview-server-request-flow"},"Preview server request flow"),p.a.createElement("div",{className:"mermaid"},"graph TD\nA(Request made to preview-prod.vfs.va.gov) --\x3eB{Request made to /preview?}\nB --\x3e|No|C\nB --\x3e|Yes|D\nC[Return content of same url from va.gov]--\x3eE(Done)\nD[Get node id from nodeId url parameter]--\x3eF[Request latest unpublished revision of node id]\nD--\x3eG[Fetch latest header/footer data]\nD --\x3eH[Fetch latest JS asset manifest]\nG--\x3eI\nH--\x3eI\nF--\x3eI\nI[Run Metalsmith build pipeline on returned Drupal content] --\x3eJ\nJ[Return HTML to requestor]--\x3eK(Done)"))},t}(p.a.Component),u={}},367:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},368:function(e,t,n){"use strict";var a=n(2),o=n.n(a),r=n(14),s=n.n(r),m=n(371),p=(n(149),n(150),n(372),n(21),n(367)),c=n(369);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:p})}function i(e){var t=e.item;return t.href?o.a.createElement("li",{key:t.name},o.a.createElement(c.a,{to:t.href},t.name)):o.a.createElement("li",{key:t.name},t.name," (future)")}function d(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(i,{item:e,key:e.name})})):null}var u=n(370),g=n.n(u);function h(e){var t=e.location,n=g.a.sections.find(function(e){return t.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:n.items}))):null}function v(e){var t=e.children,n=e.location;return o.a.createElement(m.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}n.d(t,"a",function(){return v}),v.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-cms-mdx-9929b598f4b7984a36db.js.map