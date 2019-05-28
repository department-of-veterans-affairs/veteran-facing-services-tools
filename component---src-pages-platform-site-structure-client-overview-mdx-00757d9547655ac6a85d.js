(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{338:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),s=n(3),r=n.n(s),i=n(2),c=n.n(i),p=n(4),m=n(351),l={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=m.a,n}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return c.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,n),components:t},c.a.createElement("h1",{id:"vagov-client-overview"},"VA.gov client overview"),c.a.createElement(p.MDXTag,{name:"p",components:t},"Welcome to the VA digital services platform front-end overview. The goal of this article is to provide a high level overview of our front end architecture to get you oriented with the ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website"}},"vets-website")," repository."),c.a.createElement(p.MDXTag,{name:"p",components:t},"The overall architecture for VA.gov is comprised of an API backend written in Ruby on Rails (",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-api"}},"vets-api"),") and a static front-end, written in HTML, CSS, and Javascript (",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vets-website"),"). There's no server-side rendering or processing for the front-end; the build process compiles everything into static resources which are served to users."),c.a.createElement("h2",{id:"build-process"},"Build process"),c.a.createElement(p.MDXTag,{name:"p",components:t},"The build process for this is controlled by a tool called ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://www.metalsmith.io/"}},"Metalsmith"),", which is a pluggable Node.js static site generator. In general, everything in Metalsmith is a plugin, so if you're looking for specific parts of the build process, expect to check out a plugin or two. We use Metalsmith because it's flexible and because it's Javascript based, it's easy to integrate with the rest of our tools."),c.a.createElement(p.MDXTag,{name:"p",components:t},"The build process has two primary kinds of functionality that it processes: static content pages and Javascript applications. Most of VA.gov consists of content that lives in Markdown files and is converted into HTML by a Metalsmith plugin. There are shared templates and other enhancements to make this content easier to structure. This content lives in ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages"),", which also provides the basic URL structure of the site."),c.a.createElement("h2",{id:"javascript-applications"},"Javascript applications"),c.a.createElement(p.MDXTag,{name:"p",components:t},"Javascript applications are the other type of functionality in vets-website. These applications are written in ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://reactjs.org/"}},"React")," and ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://redux.js.org/"}},"Redux")," and live in ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/applications/")," in ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vets-website"),". For each app you'll find a ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"manifest.json")," file that contains application information. You'll find the root url of the application, which you can use to navigate to that application on the site. These applications also usually have client-side routes, so opening that root url may allow you to click to other pages that are fully client-side, and not based on pages in ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages"),"."),c.a.createElement(p.MDXTag,{name:"p",components:t},"If you're a developer, most of your time will likely be spent working on a React application. We use React because it's widely used by front end developers and provides a good balance of performance and approachability. We also use Redux to manage application state, also because it's commonly used with React and fits most of the applications on VA.gov well. We use ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://reacttraining.com/react-router/"}},"React Router")," for client-side routing and ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://webpack.js.org/"}},"Webpack")," as a build tool, both of which are the ",c.a.createElement(p.MDXTag,{name:"em",components:t,parentName:"p"},"de facto")," standards in the Javascript world. For styles we use ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://sass-lang.com/"}},"Sass")," and for dependency management we use ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://yarnpkg.com/en/"}},"Yarn"),"."),c.a.createElement("h2",{id:"design-system"},"Design system"),c.a.createElement(p.MDXTag,{name:"p",components:t},"You will also find that our visual components and site-wide styles live in an external ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://department-of-veterans-affairs.github.io/design-system/"}},"design system"),". This design system is based on the ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://designsystem.digital.gov/"}},"US Web Design System"),", with some additional modifications by our team. As part of that design system, we provide a set of React components covering common patterns, which is ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.npmjs.com/package/@department-of-veterans-affairs/formation"}},"published to npm"),". You'll likely use these components to make your apps accessible and consistent with the rest of VA.gov."),c.a.createElement("h2",{id:"routing-for-react-apps"},"Routing for React apps"),c.a.createElement("h3",{id:"production"},"Production"),c.a.createElement(p.MDXTag,{name:"p",components:t},"The production deployment of the vet-website front end consists of static HTML, CSS, and JS assets deployed to an Amazon S3 bucket. We have an nginx server that serves those static assets and does some extra route handling for our single page React apps."),c.a.createElement(p.MDXTag,{name:"p",components:t},"React applications have a single entry page in the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages")," folder and a special nginx ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vetsgov/vars/react_routes.yml"}},"config entry"),". Each of the React applications listed in that config are standalone single page apps, and for each of the urls listed in that section of the config, the nginx server routes anything that starts with that url to the static page at that url, instead of trying to find a content page at that spot in the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"content/pages")," folder structure. See the example below for a step by step view of that process."),c.a.createElement(p.MDXTag,{name:"p",components:t},"When that page is loaded and the JS bundle is downloaded and parsed, React Router sees the original route, removes the base url specified in the entry page from it, and routes to the page configured in the routes for the React app."),c.a.createElement(p.MDXTag,{name:"p",components:t},"In summary, nginx routes a variety of different urls to the same static entry page, and React Router renders the correct component based on the route configuration client side."),c.a.createElement("h4",{id:"example"},"Example"),c.a.createElement(p.MDXTag,{name:"p",components:t},"Here's an example using the claim status application:"),c.a.createElement(p.MDXTag,{name:"ol",components:t},c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ol"},"User opens ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"va.gov/track-claims/your-claims/2344/detail")),c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ol"},"Nginx serves ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"va.gov/track-claims/index.html"),", because ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/track-claims")," is configured as a React application"),c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ol"},"In the browser, the JS bundle loads and React Router sees a url of ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/track-claims/your-claims/2344/detail")),c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ol"},"Since React Router has a base url of ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/track-claims"),", it runs its routing logic on ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"/your-claims/2344/detail"),", and renders the appropriate component for that url.")),c.a.createElement(p.MDXTag,{name:"p",components:t},"One other thing to note is that links that use the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Link")," component or the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"router")," object in the React app use the history api to change the url without reloading the page. React Router listens for these url changes and renders the right component for you. This is why you have to use ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Link")," and not a regular ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"a")," element, which results in a page refresh for the url you're trying to link to."),c.a.createElement("h3",{id:"development"},"Development"),c.a.createElement(p.MDXTag,{name:"p",components:t},"Locally, we've configured the webpack dev server to do the same redirects as nginx, however they are duplicated in a couple places:"),c.a.createElement(p.MDXTag,{name:"ul",components:t},c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/script/build.js"}},"script/build.js")),c.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/test-server.js"}},"src/platform/testing/e2e/test-server.js")," (for e2e tests)")),c.a.createElement(p.MDXTag,{name:"p",components:t},"You will need to update these locations as well as the nginx config when creating a new React application."))},t}(c.a.Component),u={}},350:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}}]}}}},351:function(e,t,n){"use strict";var a=n(2),o=n.n(a),s=n(13),r=n.n(s),i=n(354),c=(n(133),n(134),n(135),n(17),n(350)),p=n(352);function m(){return o.a.createElement(p.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function l(e){var t=e.item;return t.href?o.a.createElement("li",{key:t.name},o.a.createElement(p.a,{to:t.href},t.name)):o.a.createElement("li",{key:t.name},t.name," (future)")}function d(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(m,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var u=n(353),h=n.n(u);function g(e){var t=e.location,n=h.a.sections.find(function(e){return t.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:n.items}))):null}function f(e){var t=e.children,n=e.location;return o.a.createElement(i.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}n.d(t,"a",function(){return f}),f.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-site-structure-client-overview-mdx-00757d9547655ac6a85d.js.map