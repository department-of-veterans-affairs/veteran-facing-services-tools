(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),o=a("FRpb");function s(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var r=a("8FPV");function c(e){var t=e.children,a=e.location,n=e.pageContext;return i.a.createElement(r.a,{location:a},i.a.createElement("div",{className:"vads-l-row site-l-wrapper"},i.a.createElement(o.a,{location:a}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(s,{sourceUrl:n.sourceUrl}))))}},FRpb:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),i=a.n(n),o=a("Wbzz");function s(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(o.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function r(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},n&&i.a.createElement(s,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(r,{isSublist:!0,items:e.items})):i.a.createElement(s,{item:e,key:e.name})}))):null}var c=a("MEl4"),l=a.n(c);function p(e){var t=e.location,a=l.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(r,{items:a.items}))):null}},iiUM:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return p}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("3dLD"),s=["components"],r={},c={_frontmatter:r},l=o.a;function p(e){var t=e.components,a=Object(n.a)(e,s);return Object(i.b)(l,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"vagov-client-overview"},"VA.gov client overview"),Object(i.b)("div",{className:"deprecation-message"},Object(i.b)("h2",null,"We're moving our docs!"),Object(i.b)("h3",null,"Find"," ",Object(i.b)("a",{href:"https://depo-platform-documentation.scrollhelp.site/developer-docs/Frontend-architecture.1855324196.html"},"the latest version of this page")," ","on the Platform website."),Object(i.b)("h3",null,"Still can't find what you're looking for? Reach out to"," ",Object(i.b)("a",{href:"https://dsva.slack.com/archives/CBU0KDSB1"},"#vfs-platform-support")," ","on Slack.")),Object(i.b)("p",null,"Welcome to the VA digital services platform front-end overview. The goal of this article is to provide a high level overview of our front end architecture to get you oriented with the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-website"},"vets-website")," repository."),Object(i.b)("p",null,"The overall architecture for VA.gov is comprised of an API backend written in Ruby on Rails (",Object(i.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/vets-api"},"vets-api"),") and a static front-end, written in HTML, CSS, and Javascript (",Object(i.b)("inlineCode",{parentName:"p"},"vets-website"),"). There's no server-side rendering or processing for the front-end; the build process compiles everything into static resources which are served to users."),Object(i.b)("h2",{id:"content-build-process"},"Content build process"),Object(i.b)("p",null,"The build process has two primary kinds of functionality that it processes: static content pages and Javascript applications. Most of VA.gov consists of content that lives in Markdown files and the Drupal CMS, and is converted into HTML by a Metalsmith plugin. There are shared templates and other enhancements to make this content easier to structure."),Object(i.b)("p",null,"The content build process for this is controlled by a tool called ",Object(i.b)("a",{parentName:"p",href:"http://www.metalsmith.io/"},"Metalsmith"),", which is a pluggable Node.js static site generator. In general, everything in Metalsmith is a plugin, so if you're looking for specific parts of the build process, expect to check out a plugin or two. We use Metalsmith because it's flexible and because it's Javascript based, it's easy to integrate with the rest of our tools."),Object(i.b)("h2",{id:"javascript-applications"},"Javascript applications"),Object(i.b)("p",null,"Javascript applications are the other type of functionality in vets-website. These applications are written in ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," and ",Object(i.b)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux"),", and live in ",Object(i.b)("inlineCode",{parentName:"p"},"src/applications/")," in ",Object(i.b)("inlineCode",{parentName:"p"},"vets-website"),". For each app, you'll find a ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.json")," file that contains application information as well as an entry in the ",Object(i.b)("inlineCode",{parentName:"p"},"src/applications/registry.json"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.json")," is used by Webpack in the application build, while the ",Object(i.b)("inlineCode",{parentName:"p"},"registry.json")," is used by the content build. See ",Object(i.b)("a",{parentName:"p",href:"/veteran-facing-services-tools/veteran-facing-services-tools/getting-started/common-tasks/new-application/#manual-set-up"},"Creating a new application")," for more information on the difference between the ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.json")," files and the ",Object(i.b)("inlineCode",{parentName:"p"},"registry.json")," file."),Object(i.b)("p",null,"You'll find the root url of the application, which you can use to navigate to that application on the site. These applications also usually have client-side routes, so opening that root url may allow you to click to other pages that are fully client-side."),Object(i.b)("p",null,"If you're a developer, most of your time will likely be spent working on a React application. We use React because it's widely used by front end developers and provides a good balance of performance and approachability. We also use Redux to manage application state, also because it's commonly used with React and fits most of the applications on VA.gov well. We use ",Object(i.b)("a",{parentName:"p",href:"https://reacttraining.com/react-router/"},"React Router")," for client-side routing and ",Object(i.b)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," as a build tool, both of which are the ",Object(i.b)("em",{parentName:"p"},"de facto")," standards in the Javascript world. For styles we use ",Object(i.b)("a",{parentName:"p",href:"https://sass-lang.com/"},"Sass"),", and for dependency management we use ",Object(i.b)("a",{parentName:"p",href:"https://yarnpkg.com/en/"},"Yarn"),"."),Object(i.b)("h2",{id:"design-system"},"Design system"),Object(i.b)("p",null,"You will also find that our visual components and site-wide styles live in an external ",Object(i.b)("a",{parentName:"p",href:"https://department-of-veterans-affairs.github.io/design-system/"},"design system"),". This design system is based on the ",Object(i.b)("a",{parentName:"p",href:"https://designsystem.digital.gov/"},"US Web Design System"),", with some additional modifications by our team. As part of that design system, we provide a set of React components covering common patterns, which is ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@department-of-veterans-affairs/formation"},"published to npm"),". You'll likely use these components to make your apps accessible and consistent with the rest of VA.gov."),Object(i.b)("h2",{id:"routing-for-react-apps"},"Routing for React apps"),Object(i.b)("h3",{id:"production"},"Production"),Object(i.b)("p",null,"The production deployment of the vet-website front end consists of static HTML, CSS, and JS assets deployed to an Amazon S3 bucket. We have an nginx server that serves those static assets and does some extra route handling for our single page React apps."),Object(i.b)("p",null,"React applications have a single entry page created by the content build and a special nginx ",Object(i.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vetsgov/vars/react_routes.yml"},"config entry"),". Each of the React applications listed in that config are standalone single page apps, and for each of the urls listed in that section of the config, the nginx server routes anything that starts with that url to the static page at that url, instead of trying to find a content page for a client-side route with the app. See the example below for a step by step view of that process."),Object(i.b)("p",null,"When that page is loaded and the JS bundle is downloaded and parsed, React Router sees the original route, removes the base url specified in the entry page from it, and routes to the page configured in the routes for the React app."),Object(i.b)("p",null,"In summary, nginx routes a variety of different urls to the same static entry page, and React Router renders the correct component based on the route configuration client side."),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("p",null,"Here's an example using the claim status application:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"User opens ",Object(i.b)("inlineCode",{parentName:"li"},"va.gov/track-claims/your-claims/2344/detail")),Object(i.b)("li",{parentName:"ol"},"Nginx serves ",Object(i.b)("inlineCode",{parentName:"li"},"va.gov/track-claims/index.html"),", because ",Object(i.b)("inlineCode",{parentName:"li"},"/track-claims")," is configured as a React application"),Object(i.b)("li",{parentName:"ol"},"In the browser, the JS bundle loads and React Router sees a url of ",Object(i.b)("inlineCode",{parentName:"li"},"/track-claims/your-claims/2344/detail")),Object(i.b)("li",{parentName:"ol"},"Since React Router has a base url of ",Object(i.b)("inlineCode",{parentName:"li"},"/track-claims"),", it runs its routing logic on ",Object(i.b)("inlineCode",{parentName:"li"},"/your-claims/2344/detail"),", and renders the appropriate component for that url.")),Object(i.b)("p",null,"One other thing to note is that links that use the ",Object(i.b)("inlineCode",{parentName:"p"},"Link")," component or the ",Object(i.b)("inlineCode",{parentName:"p"},"router")," object in the React app use the history api to change the url without reloading the page. React Router listens for these url changes and renders the right component for you. This is why you have to use ",Object(i.b)("inlineCode",{parentName:"p"},"Link")," and not a regular ",Object(i.b)("inlineCode",{parentName:"p"},"a")," element, which results in a page refresh for the url you're trying to link to."),Object(i.b)("h3",{id:"development"},"Development"),Object(i.b)("p",null,"Locally, we've configured the webpack dev server to do the same redirects as nginx, however they are duplicated in a couple places:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/main/script/build.js"},"script/build.js")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/testing/e2e/test-server.js"},"src/platform/testing/e2e/test-server.js")," (for e2e tests)")),Object(i.b)("p",null,"You will need to update these locations as well as the nginx config when creating a new React application."))}p.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-platform-site-structure-client-overview-mdx-befefaba7dc64b721aa3.js.map