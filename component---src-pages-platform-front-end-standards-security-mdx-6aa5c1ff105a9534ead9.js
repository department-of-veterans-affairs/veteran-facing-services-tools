(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"3dLD":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),r=n.n(a),o=n("Wbzz");function i(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(o.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},a&&r.a.createElement(i,{item:e}),!a&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(l,{isSublist:!0,items:e.items})):r.a.createElement(i,{item:e,key:e.name})}))):null}var s=n("MEl4"),c=n.n(s);function b(e){var t=e.location,n=c.a.sections.find((function(e){return t.pathname.includes(e.href)}));return n?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(l,{items:n.items}))):null}function m(e){var t=e.sourceUrl;return t?r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var u=n("8FPV");function p(e){var t=e.children,n=e.location,a=e.pageContext;return r.a.createElement(u.a,{location:n},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(b,{location:n}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(m,{sourceUrl:a.sourceUrl}))))}},Cbul:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),o=n("3dLD"),i=["components"],l={},s={_frontmatter:l},c=o.a;function b(e){var t=e.components,n=Object(a.a)(e,i);return Object(r.b)(c,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"overview"},"Overview"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"vets-website")," uses modern browser features to provide a secure experience for veterans. In general, these features are automatically included through the deployment process and require no configuration by front end engineers. "),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"This is an overview not an implementation guide. These rules apply to VA.gov production environments. Not all security features will be used in local, development, or staging environments.")," "),Object(r.b)("h2",{id:"https"},"HTTPS"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All connections made to VA.gov must be secure (HTTPS)"),Object(r.b)("li",{parentName:"ul"},"VA.gov implements HSTS and automatically redirects to a secure protocol if a non secure connection is attempted ")),Object(r.b)("h2",{id:"cross-origin-resource-sharing-cors"},"Cross-Origin Resource Sharing (CORS)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Some cross origin connections made to VA.gov must support CORS including ",Object(r.b)("strong",{parentName:"li"},"all")," XHR connections and web font downloads. "),Object(r.b)("li",{parentName:"ul"},"Updates to CORS headers returned by ",Object(r.b)("inlineCode",{parentName:"li"},"vets-api")," services or ",Object(r.b)("inlineCode",{parentName:"li"},"vets-website")," assets must be made through the devops team and must be reviewed by the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/orgs/department-of-veterans-affairs/teams/frontend-review-group"},"frontend review group"),". Example:  ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Your application is on a VA.gov subdomain, needs to connect to ",Object(r.b)("inlineCode",{parentName:"li"},"vets-api"),", but is not currently listed in the allowed origins"))),Object(r.b)("li",{parentName:"ul"},"More ",Object(r.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"info on cors")),Object(r.b)("li",{parentName:"ul"},"CORS configurations: ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/devops/blob/ec2b1802c10e1e48d475a97f75a5a14fd6e552e7/terraform/environments/dsva-vagov-prod/main.tf#L177-L180"},"production")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/devops/blob/cbab63cdf0595f4172b43d90cd46233997b37324/terraform/environments/dsva-vagov-staging/s3_buckets.tf#L16-L19"},"staging"))))),Object(r.b)("h2",{id:"content-security-policy-csp"},"Content Security Policy (CSP)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All VA.gov pages return a Content Security Policy header that allows only known scripts to run on the page"),Object(r.b)("li",{parentName:"ul"},"The CSP is enforced i.e. not set to ",Object(r.b)("inlineCode",{parentName:"li"},"report-only")),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"report-uri")," points to a VA platform error capturing service (Sentry)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"VA.gov throttles these reports by including the ",Object(r.b)("inlineCode",{parentName:"li"},"report-uri")," only on a small % of responses"))),Object(r.b)("li",{parentName:"ul"},"Updates to CSP headers returned by or ",Object(r.b)("inlineCode",{parentName:"li"},"vets-website")," assets must be made through the devops team and must be reviewed by the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/orgs/department-of-veterans-affairs/teams/frontend-review-group"},"frontend review group")),Object(r.b)("li",{parentName:"ul"},"More ",Object(r.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"info on CSP")),Object(r.b)("li",{parentName:"ul"},"CSP configurations:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-prod.yml"},"production")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-staging.yml"},"staging")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-dev.yml"},"dev"))))))}b.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-security-mdx-6aa5c1ff105a9534ead9.js.map