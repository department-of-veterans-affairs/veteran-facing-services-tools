(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{334:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return u}),a.d(n,"_frontmatter",function(){return d});a(42);var t=a(43),o=a.n(t),m=a(3),r=a.n(m),l=a(2),c=a.n(l),i=a(4),s=a(347),p={},u=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=s.a,a}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},c.a.createElement("h1",{id:"bundles-and-code-organization"},"Bundles and Code Organization"),c.a.createElement("h2",{id:"application-bundling-with-webpack"},"Application Bundling with Webpack"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Webpack is a modular asset bundler used to build the VA.gov client application. Its responsibilities include:"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"dependency resolution in JavaScript and CSS files,"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"splitting the project into application specific and shared resources during the build process,"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"enabling support for legacy browsers,"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"performance optimization, and"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"providing the application launch behavior that ties all of this together.")),c.a.createElement(i.MDXTag,{name:"p",components:n},"Most applications leverage the ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://webpack.js.org/plugins/commons-chunk-plugin/"}},"CommonsChunkPlugin")," to code split their source into\n- entries files that are application specific e.g. facilities-locator.entry.js, and\n- a vendor.js file containing common modules shared between entry points"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Webpage loads application specific files on demand. More information on this can be found in ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://webpack.js.org/guides/code-splitting/"}},"Webpack code splitting"))),c.a.createElement("h3",{id:"common-bundles"},"Common bundles"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"settings.js"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"adds ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"window.settings"),"- a globally available object containing build and application settings"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"generated by metasmith plugin src/site/stages/build/plugins/create-build-settings.js"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"consumed by webpack loader config/manifest-loader primarily for application routes"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"common entry files included on every page",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vendor.entry.js"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"generated by Webpack's SplitChunksPlugin"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"includes shared dependencies including react, redux, and node_modules"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"formation.js"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Formation Design System's npm module: ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/tree/master/packages/formation"}},"https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/tree/master/packages/formation")," "),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"generated by Webpack code splitting with an dynamic import in src/platform/site-wide/index.js"))))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"examples of application entry files",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"static-pages.entry.js"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"included on all non-react pages"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"e.g. ",c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.va.gov"}},"https://www.va.gov")))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"gi.entry.js"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"stand alone react app"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.va.gov/gi-bill-comparison-tool"}},"https://www.va.gov/gi-bill-comparison-tool")))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"pre-need.entry.js"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"react app that uses the forms system"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.va.gov/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/introduction"}},"https://www.va.gov/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/introduction"))))))),c.a.createElement("h2",{id:"files-overview"},"Files Overview"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/config"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"jest configs - proof of concepts- not used in CI",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"jest-integration.config.js")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"jest-vrt.config.js")))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Nightwatch e2e test runner and configurations",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nightwatch-globals-sauce.js")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nightwatch-sauce.js")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nightwatch.docker-compose.js")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"nightwatch.js")))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"sass config: ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"sass-lint.yml")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"webpack production and dev configs",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"webpack.config.js")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"webpack.dev.config.js")))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"build setup script",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"manifest-loader.js")," - passes front matter of content files to app entry files\n- ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"parse-app-settings.js")," - reads settings.js - a file containing app information generated during Metalsmith build"))))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/docs")," - best practices and troubleshooting docs"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/jenkins")," - jenkins setup, build, deploy script for ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-websites")," repo"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/script"),c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/custom-eslint")," - project specific linting plugin"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/hooks")," - -git -precommit hook"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"app-list.sh")," - bash script that outputs a list of the applications in vets-website"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"build.js")," - imports and runs build script in src/site/stages/build"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"csv-path-builder.js")," - TODO"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"heroku-postbuild.sh")," - static content builder used by Heroku when a new branch is pushed"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"mocha.js")," - unit test runner and watch task"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"prearchive.js")," - updates paths to js, css, and image assets to point to S3 asset bucket"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"prebuild.js")," - npm prebuild script that checks node version and install precommit hooks"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"preview.js")," - metalsmith build script for drupal preview"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"reset-environment.js")," - installs yarn and cleans up node_modules- used by build process"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-coverage.sh")," - runs mocha unit test coverage report"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-docker-nightwatch.sh")," - runs mock vets-api with docker"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-mockapi.sh")," - runs js mock vets-app"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-nightwatch.sh")," - test harness for running end to end tests"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-puppeteer-tests.sh")," - test harness for puppeteer tests (proof of concept)"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"run-unit-test.sh")," - runs unit tests"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"security-check.js")," - checks for security advisories in dependencies"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"update-json-schema.js")," - helper for updating dependency version of vets-jason-schema"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"watch.js")," - watch task for unit tests (proof of concept)"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/src")," - source files for vets-website web applications",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/applications")," - application specific code that's into -entry.js files"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/platform")," - shared code that's includes polyfilles, code thats injected directly into the site, or used for testing"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/site")," - Metalsmith pipeline code and templates used to generate static content pages from Drupal api or Markdown files"))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"runtime configs used locally and in CI for builders, dependency managers, linters, transcoders, and source control",c.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"babel: ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".bablerc")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"docker: ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".dockerignore"),", ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Dockerfile"),", ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"docker-compose.yml")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"eslint: ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".eslintrc"),", ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".eslintignore")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"git: ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".gitignore")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"nvm: ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".nvmrc")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"prettier (linting runtime used with eslint): ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".prettierrc")),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"yarn: ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".yarnrc"),", ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn.lock"),", ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"package.json")))),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Procfile, app.json - TODO some heroku thing"),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"json-config-example.json")," - intellisense config for supporting babel module-resolver plugin")))},n}(c.a.Component),d={}},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,n,a){"use strict";var t=a(2),o=a.n(t),m=a(13),r=a.n(m),l=a(350),c=(a(133),a(134),a(135),a(17),a(346)),i=a(348);function s(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(i.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(s,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var d=a(349),g=a.n(d);function E(e){var n=e.location,a=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:a.items}))):null}function M(e){var n=e.children,a=e.location;return o.a.createElement(l.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(E,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return M}),M.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-site-structure-bundles-and-code-organization-mdx-a47d8d00a77b6078a646.js.map