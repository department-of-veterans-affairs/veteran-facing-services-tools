(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{362:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return d}),t.d(a,"_frontmatter",function(){return g});t(45);var n=t(46),o=t.n(n),s=t(3),r=t.n(s),i=t(2),m=t.n(i),c=t(4),p=t(368),l={},d=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=p.a,t}return r()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:a},m.a.createElement("h1",{id:"teamsite-overview"},"Teamsite Overview"),m.a.createElement(c.MDXTag,{name:"p",components:a},"Updated from ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12779#issue-356005850"}},"TeamSite Technical Solution and Implementation")),m.a.createElement(c.MDXTag,{name:"p",components:a},"EWIS serves much of the existing content on www.va.gov (e.g. www.va.gov/health) and to accomodate this our systems serve that request from our version of the site on sites that exist on the same domain."),m.a.createElement(c.MDXTag,{name:"p",components:a},m.a.createElement(c.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://user-images.githubusercontent.com/215266/45632257-195abc80-ba5a-11e8-9f7c-76c63fb14ac4.png",alt:"ewis"}})),m.a.createElement(c.MDXTag,{name:"p",components:a},"Requests to subdomain hosts such as www.benefits.va.gov are not proxied through our systems and are not under our control. Content for these sites exists on TeamSite: a content management system utilized by the VA to manage content across several properties at the VA. Each property in TeamSite consists of perl-based template files, which on publish rendered content to a file store. The rendered content contains server side includes, which reference content from a directory called ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"va_files"),", which has shared header and footer functionality."),m.a.createElement(c.MDXTag,{name:"p",components:a},"There are no consistent staging/production environments for TeamSite properties, and there are multiple variants of header and footer functionality in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"va_files")," (attached to this issue). For properties that do have staging and production variants, they reference the same version of header and footer content. A change to the header or footer will affect both the staging and production versions of a property."),m.a.createElement("h2",{id:"scripts-and-teamsite-administration"},"Scripts and Teamsite Administration"),m.a.createElement(c.MDXTag,{name:"p",components:a},"The header injection markup is added to Teamsite templates by their administrator. Current point of contact for this is:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Josh Tuscher ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"mailto:Joshua.Tuscher@va.gov"}},"Joshua.Tuscher@va.gov"))),m.a.createElement(c.MDXTag,{name:"p",components:a},"Current markup added to Teamsite templates:"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-html"}},'<style type="text/css">.brand-consolidation-deprecated { display: none !important; } </style>\n<link rel="stylesheet" href="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/styleConsolidated.css" />\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/js/settings.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/polyfills.entry.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/vendor.entry.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/generated/proxy-rewrite.entry.js"><\/script>\n<script type="text/javascript" src="https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/js/vendor/uswds.min.js"><\/script>\n')),m.a.createElement("h2",{id:"teamsite-behavior-and-whitelisting-pages"},"Teamsite Behavior and Whitelisting Pages"),m.a.createElement(c.MDXTag,{name:"p",components:a},"There are an unknown number of Teamsite templates that drive the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<head>")," content on Teamsite pages and there are several pages that receive the above markup that ",m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"p"},"should not")," show the va.gov header. The proxy rewrite application uses a ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/b770f380270722228563e56629af440c64342157/src/applications/proxy-rewrite/proxy-rewrite-whitelist.json"}},"whitelist")," to drive the activation of the header content. Example whitelist entry:"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},'{\n  "hostname": "www.benefits.va.gov",\n  "pathnameBeginning": "/",\n  "cookieOnly": false\n},\n')),m.a.createElement(c.MDXTag,{name:"p",components:a},"Pages can be whitelisted in two ways:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"cookieOnly: false")," - the header will always activate"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"cookieOnly: true")," - the header will activate when ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"proxyRewrite")," cookie is set to true.")),m.a.createElement(c.MDXTag,{name:"p",components:a},"This cookie can be set in the console by running ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'document.cookie = "proxyRewrite=true;"')),m.a.createElement("h3",{id:"considerations-when-editing-and-testing-the-whitelist"},"Considerations when editing and testing the whitelist"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Some Teamsites redirect to both ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"subdomain.va.gov")," and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"www.subdomain.va.gov")," (sometimes alternating between the two). Always test the redirect behavior of the first level of links on the page and ensure that both hosts are whitelisted if necessary."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"New hostnames need to be added to our ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"allowed_origins")," ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/c5687fc1b483eaea17a1191eb41440fb560d01d6/terraform/environments/dsva-vagov-prod/main.tf#L277"}},"here")," and ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/c5687fc1b483eaea17a1191eb41440fb560d01d6/terraform/environments/dsva-vagov-prod/main.tf#L290"}},"here"),". Subdomains are considered separate hostnames by CORS and the browser performs CORS checks on all of the webfonts injected by the Teamsite header scripts. Terraform updates are not automatically deployed- work with a Devops engineer to deploy these changes."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"There are at least two behaviors provided by the Teamsite system for adding the inline scripts to the page:",m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"as part of the initial document response, or"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"injected as part of a Teamsite sourced JavaScript.")))),m.a.createElement("h1",{id:"proxy-rewrite"},"Proxy Rewrite"),m.a.createElement(c.MDXTag,{name:"p",components:a},"The ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"proxy-rewrite"),' application is used to inject site-wide VA.gov components into pages that are outside of the www.va.gov build and publish process. The affected sites are generally referred to as "TeamSite", because TeamSite is the name of the CMS use for those pages.'),m.a.createElement(c.MDXTag,{name:"p",components:a},"This works by -"),m.a.createElement(c.MDXTag,{name:"ol",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},"A request is sent to a VA.gov website"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},"The content requested from the Teamsite servers and passed through the www.va.gov proxy"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ol"},"A code snippet included in the Teamsite page downloads the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"proxy-rewrite")," app which overwrites the Teamsite header and footer with VA.gov content")),m.a.createElement(c.MDXTag,{name:"p",components:a},"Because the Teamsite template containing the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"proxy-rewrite")," snippet is used both on sites that should and shouldn't show the VA.gov header, the script is governed by an allow list contained in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"proxy-rewrite-whitelist.json"),"."),m.a.createElement("h2",{id:"local-dev"},"Local Dev"),m.a.createElement(c.MDXTag,{name:"p",components:a},"Since Teamsite content is not run through the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vets-website")," build process, testing changes on Teamsite requires running local or staging changes against the production pages. The ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"proxy-rewrite")," app supports targeting a specific environment for testing:"),m.a.createElement(c.MDXTag,{name:"p",components:a},"For example: ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://staging.va.gov/health/?targetEnvironment=vagovstaging"}},"https://staging.va.gov/health/?targetEnvironment=vagovstaging")),m.a.createElement(c.MDXTag,{name:"p",components:a},"The default behavior for ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://staging.va.gov/health"}},"https://staging.va.gov/health")," is to load the production assets. when the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"targetEnvironment")," is set, the loader well delete the production nodes from the DOM and add script and style nodes for the target environment."),m.a.createElement(c.MDXTag,{name:"p",components:a},"The injection script will support any of ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/site/constants/environments.js"}},"these")," environment names set as the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"targetEnvironment"),"."),m.a.createElement(c.MDXTag,{name:"p",components:a},"Caveats:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Style node deletions will prompt a rebuilding of the CSSOM but removing script nodes doesn't undo any JS that was run before the JS node was removed. For most cases this should not impact testing as the application specific code doesn't run but JS that is executed before the application (e.g. polyfills) will always run the production code first.")),m.a.createElement("h2",{id:"charles-proxy"},"Charles Proxy"),m.a.createElement(c.MDXTag,{name:"p",components:a},"You can also use an application called Charles Proxy to map the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"proxy-rewrite")," bundles of TeamSite pages to your local machine. This way you can navigate directly to ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"https://www.va.gov/health/")," and when the request for the production bundle of ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"proxy-rewrite")," is sent, Charles will have overridden that file to instead be served locally. Instructions to set this up are located here, ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Teamsite.md"}},"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Teamsite.md"),"."),m.a.createElement("h2",{id:"teamsite-visual-regression-testing"},"Teamsite Visual Regression Testing"),m.a.createElement(c.MDXTag,{name:"p",components:a},"Both scripts compare production Teamsite header and footer against images in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vets-website")," repo"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"npm run vrt")," - test fails and generates diff images when images differ")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"npm run vrt:baseline")," - test always succeeds and replaces existing baseline images when images differ")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"li"},"If no baseline images exist for a test, both scripts will"),m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"succeed on each test that has no baseline image and"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"generate a new baseline image for it."))),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:a,parentName:"li"},"Diff images are removed automatically when their associated test succeeds."))),m.a.createElement("h3",{id:"details"},"Details"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"compares snapsshots of ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"<header>")," and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},".footerNav")," on current subdomain Teamsite pages"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/americanexpress/jest-image-snapshot"}},"jest-image-snapshot")," uses ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/mapbox/pixelmatch"}},"pixelmatch")," to detect failure"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Diff images show ",m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"left center right")," the ",m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"baseline diff new")," images\n",m.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/5a17b2d964eabc99d64cc80f162d629b/823b0/diff-image-example.png",style:{display:"block"},target:"_blank",rel:"noopener"},m.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"954px"}},m.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.22431865828093%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),m.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Example Diff Image",title:"",src:"/veteran-facing-services-tools/static/5a17b2d964eabc99d64cc80f162d629b/823b0/diff-image-example.png",srcSet:"/veteran-facing-services-tools/static/5a17b2d964eabc99d64cc80f162d629b/f4a45/diff-image-example.png 259w,\n/veteran-facing-services-tools/static/5a17b2d964eabc99d64cc80f162d629b/ef0f6/diff-image-example.png 518w,\n/veteran-facing-services-tools/static/5a17b2d964eabc99d64cc80f162d629b/823b0/diff-image-example.png 954w",sizes:"(max-width: 954px) 100vw, 954px"}))))),m.a.createElement("h2",{id:"what-to-do-when-the-test-fails"},"What To Do When The Test Fails"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"If needed, run ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"npm run vrt")," locally"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"The test log will show a",m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Summary of successes and failures\n",m.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/400d2319ab2aa3aa265d23c4d2ae4f20/f84ea/vrt-test-summary-example.png",style:{display:"block"},target:"_blank",rel:"noopener"},m.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"632px"}},m.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.24683544303798%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),m.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Test Summary Example",title:"",src:"/veteran-facing-services-tools/static/400d2319ab2aa3aa265d23c4d2ae4f20/f84ea/vrt-test-summary-example.png",srcSet:"/veteran-facing-services-tools/static/400d2319ab2aa3aa265d23c4d2ae4f20/f4a45/vrt-test-summary-example.png 259w,\n/veteran-facing-services-tools/static/400d2319ab2aa3aa265d23c4d2ae4f20/ef0f6/vrt-test-summary-example.png 518w,\n/veteran-facing-services-tools/static/400d2319ab2aa3aa265d23c4d2ae4f20/f84ea/vrt-test-summary-example.png 632w",sizes:"(max-width: 632px) 100vw, 632px"})))),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Failure details for each test with path to diff image for failure\n",m.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/6232fdddf6807315c33286cd4092d1bd/a5722/cli-failure-example.png",style:{display:"block"},target:"_blank",rel:"noopener"},m.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"733px"}},m.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.42837653478853%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),m.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Failure Detail Example",title:"",src:"/veteran-facing-services-tools/static/6232fdddf6807315c33286cd4092d1bd/a5722/cli-failure-example.png",srcSet:"/veteran-facing-services-tools/static/6232fdddf6807315c33286cd4092d1bd/f4a45/cli-failure-example.png 259w,\n/veteran-facing-services-tools/static/6232fdddf6807315c33286cd4092d1bd/ef0f6/cli-failure-example.png 518w,\n/veteran-facing-services-tools/static/6232fdddf6807315c33286cd4092d1bd/a5722/cli-failure-example.png 733w",sizes:"(max-width: 733px) 100vw, 733px"})))))),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"If failure is caused by production issue"),m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Repair issue and publish to production"),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Verify ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"npm run test:vrt")," succeeds"))),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"If failure is caused by an update"),m.a.createElement(c.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Run ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"npm run test:vrt:baseline")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Check in new baseline images to ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vets-website"))))))},a}(m.a.Component),g={}},367:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},368:function(e,a,t){"use strict";var n=t(2),o=t.n(n),s=t(14),r=t.n(s),i=t(371),m=(t(149),t(150),t(372),t(21),t(367)),c=t(369);function p(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function l(e){var a=e.item;return a.href?o.a.createElement("li",{key:a.name},o.a.createElement(c.a,{to:a.href},a.name)):o.a.createElement("li",{key:a.name},a.name," (future)")}function d(e){var a=e.items,t=e.isSublist,n=void 0!==t&&t;return a.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},a.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&o.a.createElement(l,{item:e}),!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&o.a.createElement(l,{item:e}),!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var g=t(370),h=t.n(g);function u(e){var a=e.location,t=h.a.sections.find(function(e){return a.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:t.items}))):null}function v(e){var a=e.children,t=e.location;return o.a.createElement(i.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(u,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a)))}t.d(a,"a",function(){return v}),v.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-teamsite-mdx-96d1fbd383d6d79e6542.js.map