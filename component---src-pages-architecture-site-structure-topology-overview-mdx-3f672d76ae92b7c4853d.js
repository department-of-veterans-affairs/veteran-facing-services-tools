(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{282:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return g});a(42);var n=a(43),o=a.n(n),r=a(3),s=a.n(r),i=a(2),c=a.n(i),m=a(4),p=a(317),l={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=p.a,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return c.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,a),components:t},c.a.createElement(m.MDXTag,{name:"h1",components:t},"Topology Overview"),c.a.createElement(m.MDXTag,{name:"h2",components:t},"www.va.gov technical architecture"),c.a.createElement(m.MDXTag,{name:"p",components:t},"This document walks through the basics of the technical architecture that supports the Lighthouse Platform API and www.va.gov. This document starts with simple conceptual descriptions and becomes increasingly detailed, allowing the reader to proceed only as far as they need to."),c.a.createElement(m.MDXTag,{name:"h3",components:t},"Basic Concepts"),c.a.createElement(m.MDXTag,{name:"p",components:t},"At the highest level, users make requests to www.va.gov and api.va.gov.  These requests are routed to GovCloud, which can then 1. respond to the requests on its own (such as for static content) or 2. reach into the VA network to call an API to help respond to the request (such as to get a user's prescription information)."),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/186269ba5fb7aae904da5a83cc568079/97e46/ConceptualArchitecture.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"845px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.414201183431956%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"ConceptualArchitecture",title:"",src:"/static/186269ba5fb7aae904da5a83cc568079/97e46/ConceptualArchitecture.png",srcSet:"/static/186269ba5fb7aae904da5a83cc568079/f4a45/ConceptualArchitecture.png 259w,\n/static/186269ba5fb7aae904da5a83cc568079/ef0f6/ConceptualArchitecture.png 518w,\n/static/186269ba5fb7aae904da5a83cc568079/97e46/ConceptualArchitecture.png 845w",sizes:"(max-width: 845px) 100vw, 845px"})))),c.a.createElement(m.MDXTag,{name:"p",components:t},"In order to serve these requests, there are many pieces of infrastructure inside GovCloud. Once the request reaches GovCloud, it is first routed to a reverse proxy, which then either sends it to S3 for static content and frontend apps or to a load balancer for API content. The API instances have the ability to connect into the VA network via APIs if necessary."),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/8075278eebebd828372baff8eed6b62e/97e46/SlightlyMoreDetailedConceptualArchitecture.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"845px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.89349112426035%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"SlightlyMoreDetailedConceptualArchitecture",title:"",src:"/static/8075278eebebd828372baff8eed6b62e/97e46/SlightlyMoreDetailedConceptualArchitecture.png",srcSet:"/static/8075278eebebd828372baff8eed6b62e/f4a45/SlightlyMoreDetailedConceptualArchitecture.png 259w,\n/static/8075278eebebd828372baff8eed6b62e/ef0f6/SlightlyMoreDetailedConceptualArchitecture.png 518w,\n/static/8075278eebebd828372baff8eed6b62e/97e46/SlightlyMoreDetailedConceptualArchitecture.png 845w",sizes:"(max-width: 845px) 100vw, 845px"})))),c.a.createElement(m.MDXTag,{name:"p",components:t},"The overall process of requests to the www.va.gov website and API flows like this:"),c.a.createElement(m.MDXTag,{name:"ol",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"A user requests a web URL from www.va.gov. After passing through the Trusted Internet Connection (TIC) maintained by the VA, the request reaches the Reverse Proxies, which direct it to the private S3 bucket for that environment to load the page."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Static site content (css, images, etc.) is loaded directly from a public S3 bucket by the client browser. Some content (both static content and applications) is also loaded from the EWIS managed infrastructure."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ol"},"Requests to the API (login, forms, etc.) are routed to the API Instances by the Reverse Proxies, and make calls to backend VA services as needed to fulfill the request.")),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/ae451c2d3fd27f26d175cdbb5b1aeb75/f2cb1/vagov-Data-Flow-Basics.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1035px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.903743315508024%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"vagov Data Flow Basics",title:"",src:"/static/ae451c2d3fd27f26d175cdbb5b1aeb75/17fa4/vagov-Data-Flow-Basics.png",srcSet:"/static/ae451c2d3fd27f26d175cdbb5b1aeb75/f4a45/vagov-Data-Flow-Basics.png 259w,\n/static/ae451c2d3fd27f26d175cdbb5b1aeb75/ef0f6/vagov-Data-Flow-Basics.png 518w,\n/static/ae451c2d3fd27f26d175cdbb5b1aeb75/17fa4/vagov-Data-Flow-Basics.png 1035w,\n/static/ae451c2d3fd27f26d175cdbb5b1aeb75/f2cb1/vagov-Data-Flow-Basics.png 1122w",sizes:"(max-width: 1035px) 100vw, 1035px"})))),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Topology"),c.a.createElement(m.MDXTag,{name:"p",components:t},"This diagram contains a more detailed topology of this process. All traffic to and from the AWS environments passes through the VA network. This creates a loop architecture, in which traffic incoming from clients and outgoing from the API goes through the same VPN tunnels to the internal VA network."),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/badc833831b563f649f622bcbf3fcc67/62434/vagov-aws-topology.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1035px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.14064914992272%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"vagov aws topology",title:"",src:"/static/badc833831b563f649f622bcbf3fcc67/17fa4/vagov-aws-topology.png",srcSet:"/static/badc833831b563f649f622bcbf3fcc67/f4a45/vagov-aws-topology.png 259w,\n/static/badc833831b563f649f622bcbf3fcc67/ef0f6/vagov-aws-topology.png 518w,\n/static/badc833831b563f649f622bcbf3fcc67/17fa4/vagov-aws-topology.png 1035w,\n/static/badc833831b563f649f622bcbf3fcc67/62434/vagov-aws-topology.png 1294w",sizes:"(max-width: 1035px) 100vw, 1035px"})))),c.a.createElement(m.MDXTag,{name:"p",components:t},"This more detailed topology shows most of the components of the environment and how they fit together. There are three main VPCs, one for each environment: dev, staging, and prod. Additionally, there is a fourth VPC, utility, which contains monitoring and deployment infrastructure."),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/5b50aa639efa96bd1734aab2d10918d3/430fe/vagov-detailed-topology.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1035px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"152.36427320490367%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"vagov detailed topology",title:"",src:"/static/5b50aa639efa96bd1734aab2d10918d3/17fa4/vagov-detailed-topology.png",srcSet:"/static/5b50aa639efa96bd1734aab2d10918d3/f4a45/vagov-detailed-topology.png 259w,\n/static/5b50aa639efa96bd1734aab2d10918d3/ef0f6/vagov-detailed-topology.png 518w,\n/static/5b50aa639efa96bd1734aab2d10918d3/17fa4/vagov-detailed-topology.png 1035w,\n/static/5b50aa639efa96bd1734aab2d10918d3/d6f0c/vagov-detailed-topology.png 1553w,\n/static/5b50aa639efa96bd1734aab2d10918d3/a1bed/vagov-detailed-topology.png 2070w,\n/static/5b50aa639efa96bd1734aab2d10918d3/430fe/vagov-detailed-topology.png 2284w",sizes:"(max-width: 1035px) 100vw, 1035px"})))),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Topology Descriptions"),c.a.createElement(m.MDXTag,{name:"h4",components:t},"DNS"),c.a.createElement(m.MDXTag,{name:"p",components:t},"www.va.gov DNS round robins between two actual TIC endpoints Gateway East(GWE) at ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"152.130.96.221")," and Gateway North (GWN) at ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"152.133.106.221")," Traffic will go to whichever Gateway the user's DNS request responds with at the time of the request, balancing client traffic between them. Requests for new external DNS names should be submitted as an ESECC request by a Federal employee at ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://esecc.va.gov/"}},"https://esecc.va.gov/")),c.a.createElement(m.MDXTag,{name:"h4",components:t},"TIC"),c.a.createElement(m.MDXTag,{name:"p",components:t},"The ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Trusted_Internet_Connection"}},"Trusted Internet Connection")," (TIC) is an ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Office_of_Management_and_Budget"}},"OMB")," mandate that all external connections to government systems go through. At VA, the TIC is run by the VA NSOC Gateway Operations team.  The TIC terminates all TLS connections for external DNS names (such as www.va.gov and api.va.gov) to inspect traffic. The most important element of the TIC for our purposes are the F5 load balancers which determine where traffic goes once it leaves the TIC. More detailed information on the TIC architecture and operation can be found in the ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/docs/aws-dx-transit-spoke-architecture/architecture.md"}},"VA AWS Transit VPC")," documentation and on the ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.dhs.gov/trusted-internet-connections"}},"official TIC information page"),"."),c.a.createElement(m.MDXTag,{name:"h4",components:t},"Transit VPC"),c.a.createElement(m.MDXTag,{name:"p",components:t},'From the TIC, incoming traffic passes through an AWS Direct Connect connection into a Transit VPC. There are different Transit VPCs for each environment: dev, staging, and prod. The Transit VPC contains Cisco Cloud Services Routers (CSRs) which connect via VPN to the "spoke" VPCs (like ours). Our end of these tunnels are configured as Virtual Gateways (VGWs) within each VPC. More information on the Transit VPC architecture can be found in the ',c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/docs/aws-dx-transit-spoke-architecture/architecture.md"}},"VA AWS Transit VPC")," documentation."),c.a.createElement(m.MDXTag,{name:"h4",components:t},"Reverse Proxies and API Gateways"),c.a.createElement(m.MDXTag,{name:"p",components:t},"There are two proxies currently managing access to our APIs: Reverse Proxies and API Gateways. The Reverse Proxies run OpenResty/Nginx and are the older configuration. ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-contrib/blob/master/Developer%20Process/Kong/Overview.md"}},"The API Gateways run Kong"),", a more full-featured API gateway built on top of Nginx that we will be able to use to open the API to outside agencies as part of the Lighthouse project."),c.a.createElement(m.MDXTag,{name:"p",components:t},"The reverse proxies also manage access to the legacy EWIS content for www.va.gov; details of this can be found in ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/Work%20Practices/Engineering/EWIS-proxy-details.md"}},"EWIS Proxy Details")),c.a.createElement(m.MDXTag,{name:"h2",components:t},"Forward Proxies and VA Network"),c.a.createElement(m.MDXTag,{name:"p",components:t},"API requests to VA backend dependencies must be routed back to the VA network. This is done by a forward-proxy deployment running ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://www.haproxy.org/"}},"haproxy"),", which acts as a load balancer for the VA backends. Additionally, there are some external dependencies which must be routed back through the TIC to reach the Internet. Many of these backends are documented in ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/devops/tree/master/docs/External%20Service%20Integrations"}},"External Service Integrations")),c.a.createElement(m.MDXTag,{name:"p",components:t},"Most VA systmes also connect to other systems (for example, My HealtheVet connects to VistA and EVSS connects to BGS and VBMS), creating a dependency tree. Much of that complexity is abstracted by API calls, but it can affect our infrastructure, especially when an upstream dependency goes down."),c.a.createElement(m.MDXTag,{name:"p",components:t},"This is an outdated diagram and needs to be updated, but gives the basic idea:"),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/0a022ab02d681c7ebbdfafc73dbdba52/6da3e/VAConnections.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"720px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"VAConnections",title:"",src:"/static/0a022ab02d681c7ebbdfafc73dbdba52/6da3e/VAConnections.png",srcSet:"/static/0a022ab02d681c7ebbdfafc73dbdba52/f4a45/VAConnections.png 259w,\n/static/0a022ab02d681c7ebbdfafc73dbdba52/ef0f6/VAConnections.png 518w,\n/static/0a022ab02d681c7ebbdfafc73dbdba52/6da3e/VAConnections.png 720w",sizes:"(max-width: 720px) 100vw, 720px"})))),c.a.createElement(m.MDXTag,{name:"h2",components:t},"ID.me"),c.a.createElement(m.MDXTag,{name:"p",components:t},"This document didn't discuss how www.va.gov communicates with ID.me. This is already well documented, so check out the login flow from the front end perspective ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/www.va.gov-team/blob/master/Products/Identity/reference_documents/Login/FE_login_and_logout.md"}},"here")," and from the API perspective ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/www.va.gov-team/blob/master/Products/Identity/reference_documents/Auth/authentication_and_authorization.md"}},"here"),"."))},t}(c.a.Component),g={}},312:function(e,t,a){var n;e.exports=(n=a(314))&&n.default||n},313:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},314:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),s=a.n(r),i=a(13),c=a.n(i),m=a(94),p=a(9),l=function(e){var t=e.location,a=p.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(m.a,o()({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},315:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},316:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Start up guide",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Accessing internal tools",href:"getting-started/internal-tools"},{name:"VA.gov environments",href:"getting-started/environments"},{name:"Development workflow",href:"getting-started/workflow"},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},317:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(313),s=a(2),i=a.n(s),c=a(13),m=a.n(c),p=a(318),l=a.n(p),d=a(68),g=a.n(d),h=(a(312),i.a.createContext({})),u=function(e){return i.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func};a(17),a(133),a(134),a(135);var f=a(315);function b(){return i.a.createElement(u,{query:"157057713",render:function(e){return i.a.createElement(w,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:f})}function w(e){var t=e.items;return t.length?i.a.createElement("ul",{className:"menu-list"},t.map(function(e){return i.a.createElement("li",{key:e.name},!!e.items&&i.a.createElement("li",{key:e.name},i.a.createElement("h4",null,e.name),i.a.createElement(w,{items:e.items})),"componentList"===e.query&&i.a.createElement("li",{key:e.name},i.a.createElement("h4",null,e.name),i.a.createElement(b,null)),!!e.href&&i.a.createElement("li",{key:e.name},i.a.createElement(g.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&i.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var v=a(316),y=a.n(v);function x(e){var t=e.location,a=y.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return i.a.createElement("aside",{className:"sidebar"},i.a.createElement("div",{className:"search"},i.a.createElement("div",{className:"input-wrap"},i.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!a&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,a.name),i.a.createElement(g.a,{className:"home-link",to:""},"Home"),i.a.createElement(w,{items:a.items})),!a&&i.a.createElement("ul",{className:"menu-list"},y.a.sections.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(g.a,{to:e.href},e.name))})))}a(319);var E=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return i.a.createElement(u,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(x,{location:a}),i.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(i.a.Component);E.propTypes={children:m.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-architecture-site-structure-topology-overview-mdx-3f672d76ae92b7c4853d.js.map