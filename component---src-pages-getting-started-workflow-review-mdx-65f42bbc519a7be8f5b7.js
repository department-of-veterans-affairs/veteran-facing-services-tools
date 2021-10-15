(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"094v":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("3dLD"),r=["components"],l={},c={_frontmatter:l},o=s.a;function b(e){var t=e.components,a=Object(n.a)(e,r);return Object(i.b)(o,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"review"},"Review"),Object(i.b)("div",{className:"deprecation-message"},Object(i.b)("h2",null,"We're moving our docs!"),Object(i.b)("h3",null,"Find ",Object(i.b)("a",{href:"https://depo-platform-documentation.scrollhelp.site/developer-docs/Frontend-workflow:-Review.1845919891.html"},"the latest version of this page")," on the Platform website."),Object(i.b)("h3",null,"Still can't find what you're looking for? Reach out to ",Object(i.b)("a",{href:"https://dsva.slack.com/archives/CBU0KDSB1"},"#vfs-platform-support")," on Slack.")),Object(i.b)("h2",{id:"submit-pull-request"},"Submit pull request"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Pull master")," and ",Object(i.b)("strong",{parentName:"li"},"push feature branch")," to ",Object(i.b)("inlineCode",{parentName:"li"},"vets-website")," and/or ",Object(i.b)("inlineCode",{parentName:"li"},"content-build")," repositories")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git pull origin master\ngit push origin feature/12345-issue-title\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," If you are making changes in both repositories that are dependent on each other, you should give both branches in each repository the same name."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Always ",Object(i.b)("strong",{parentName:"em"},"pull master")," into your feature branch before creating a pull request.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Create a pull request")," indicating that your code is ready for review."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Request peer review")," on Github by tagging a fellow team member who you feel is qualified to review the code (this prevents the pull request from just sitting). You may also want to tag developers on other teams if the changes cover more than one application.")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Depending on the type of work done, you may need a product person to review and / or a developer to review. See ",Object(i.b)("a",{parentName:"em",href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Code%20Review%20Norms.md"},"Code Review Norms")," for more information on how we do code reviews.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use Zenhub to ",Object(i.b)("strong",{parentName:"li"},"connect")," pull request with a ",Object(i.b)("strong",{parentName:"li"},"linked issue"))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"If you use the Zenhub Chrome ",Object(i.b)("a",{parentName:"em",href:"https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd"},"extension"),', there will be a "Connect this pull request with an existing issue" section at the bottom of Github\'s create pull request UI. You can click the "Connect with an issue" button to link the PR to the original issue in Zenhub.')),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"765px"}},"\n      ",Object(i.b)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/b2d3a805c91b88df8c782fe782dad4d8/bbb77/connect-issue.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",Object(i.b)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"10.038610038610038%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAIAAADXZGvcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAX0lEQVQI1z3Lyw3DMAwEUffu5tKBgaQFc3epiNTHQBTAATKHub1t3x/PFyLfZiRFiRQo9wIKUO9jrfW5y8yI/H3OazsOK2W4+20I0AySSw7wPK219se9j1prZouIOecXjs9xAPeWp+4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"PR deployment list",title:"PR deployment list",src:"/veteran-facing-services-tools/static/b2d3a805c91b88df8c782fe782dad4d8/bbb77/connect-issue.png",srcSet:["/veteran-facing-services-tools/static/b2d3a805c91b88df8c782fe782dad4d8/a2ead/connect-issue.png 259w","/veteran-facing-services-tools/static/b2d3a805c91b88df8c782fe782dad4d8/6b9fd/connect-issue.png 518w","/veteran-facing-services-tools/static/b2d3a805c91b88df8c782fe782dad4d8/bbb77/connect-issue.png 765w"],sizes:"(max-width: 765px) 100vw, 765px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n  "),"\n    ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Change status")," of the ",Object(i.b)("strong",{parentName:"li"},"linked issue")," to ",Object(i.b)("strong",{parentName:"li"},"validate"))),Object(i.b)("h2",{id:"run-tests-and-compliance-scans"},"Run tests and compliance scans"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Jenkins")," automatically ",Object(i.b)("strong",{parentName:"li"},"builds")," and ",Object(i.b)("strong",{parentName:"li"},"runs all tests")," your feature branch:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"when the pull request is created"),Object(i.b)("li",{parentName:"ul"},"after a pull request is created when the feature branch is updated"))),Object(i.b)("li",{parentName:"ul"},"Test results are displayed on the pull request page")),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"699px"}},"\n      ",Object(i.b)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/676ea82c38454a2ba5686c7cee7b7bed/3fe45/test-results.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",Object(i.b)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"16.988416988416986%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgElEQVQI13XKSw7CIBRA0e5/T06cGndg0PCxBQoU2pLS99HUgXHizRne7hQuZ3VVQt+EEPeHVMo6//ofErsCNkOp2PXb6Gtc5jWXUuYFAJGIiImYmenHN2LGz9A1wH1twQVt+sF5qcxBP6U2IU4xlTEmH5LzoW57Azx+RDs1n9sbEGKrRYXeTTYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"PR deployment list",title:"PR deployment list",src:"/veteran-facing-services-tools/static/676ea82c38454a2ba5686c7cee7b7bed/3fe45/test-results.png",srcSet:["/veteran-facing-services-tools/static/676ea82c38454a2ba5686c7cee7b7bed/a2ead/test-results.png 259w","/veteran-facing-services-tools/static/676ea82c38454a2ba5686c7cee7b7bed/6b9fd/test-results.png 518w","/veteran-facing-services-tools/static/676ea82c38454a2ba5686c7cee7b7bed/3fe45/test-results.png 699w"],sizes:"(max-width: 699px) 100vw, 699px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n  "),"\n    ")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"See ",Object(i.b)("a",{parentName:"em",href:"/veteran-facing-services-tools/getting-started/common-tasks/test"},"Run Tests")," to run these tests locally")),Object(i.b)("h2",{id:"manually-test-change"},"Manually test change"),Object(i.b)("p",null,"Manual testing can involve some separate things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Making sure the functionality works in the web browsers users are most likely to use"),Object(i.b)("li",{parentName:"ul"},"Run the code on production-like environment. This could be done by spinning up a cloud instance that resembles production, or launching a container that is production like (such as a Docker image, etc.)"),Object(i.b)("li",{parentName:"ul"},"See if there are there any bugs or unexpected nuisances that users might encounter"),Object(i.b)("li",{parentName:"ul"},"Does it meet the requirements?")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"The person making the change is responsible")," for ensuring the change is adequately tested. Testing can include automated tests or manual testing by stakeholders on the review instance or staging build.")),Object(i.b)("h3",{id:"review-instance-automatic-creation"},"Review instance automatic creation"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Jenkins")," automatically ",Object(i.b)("strong",{parentName:"p"},"deploys")," two remote ",Object(i.b)("strong",{parentName:"p"},"review instances")," of a ",Object(i.b)("strong",{parentName:"p"},"feature branch")," when a pull request is created:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"an instance that just includes static pages content deployed by ",Object(i.b)("strong",{parentName:"p"},"va-bot"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"an instance that includes static pages and the VA.gov client application deployed by ",Object(i.b)("strong",{parentName:"p"},"va-vfs-bot")),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example of deployment links:")),Object(i.b)("p",{parentName:"li"},Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"709px"}},"\n      ",Object(i.b)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/f21fc2f0c0c4df73b16553aaefb30914/4d08a/PR-deployment-list.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",Object(i.b)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.25482625482626%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVQY002OWW7DMBBDff8jpjGKxtZuSxqNtpEsJ3VbBCX4ReCRnOrRLHjGuBBSKiWV5lxwIZb1isYY5z+N8zTYdegKeqYx0dFTKcbsUmtlTECstdZSck65lPP5pwt9/vhdNMYUqYQcnQPnwTpfW/cBDfYNW8oFEUNACNiP0fpBrRuozFbpK7U+ZSIL/uuxLowvjAupuVAWMqSqzS6MY1tSOwSMv7CPtAFZJKJ+LavN3OfP232+fczabBCu5z7gysWDKblHzBRTei+ve5WufsMv3hgcLA7Xli8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"PR deployment list",title:"PR deployment list",src:"/veteran-facing-services-tools/static/f21fc2f0c0c4df73b16553aaefb30914/4d08a/PR-deployment-list.png",srcSet:["/veteran-facing-services-tools/static/f21fc2f0c0c4df73b16553aaefb30914/a2ead/PR-deployment-list.png 259w","/veteran-facing-services-tools/static/f21fc2f0c0c4df73b16553aaefb30914/6b9fd/PR-deployment-list.png 518w","/veteran-facing-services-tools/static/f21fc2f0c0c4df73b16553aaefb30914/4d08a/PR-deployment-list.png 709w"],sizes:"(max-width: 709px) 100vw, 709px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n  "),"\n    ")))),Object(i.b)("p",null,"After a pull request is created, ",Object(i.b)("strong",{parentName:"p"},"Jenkins")," will automatically ",Object(i.b)("strong",{parentName:"p"},"rebuild")," these instances when feature branch ",Object(i.b)("strong",{parentName:"p"},"changes are pushed")),Object(i.b)("p",null,"To review dependent changes made in ",Object(i.b)("inlineCode",{parentName:"p"},"vets-website")," and ",Object(i.b)("inlineCode",{parentName:"p"},"content-build")," pull requests in the same review instance, verify both branches in each repository have the same name. The review instance deployment in both pull requests will share the same link. Changes made in either pull request will be deployed to that review instance."),Object(i.b)("p",null,"  ",Object(i.b)("em",{parentName:"p"},"You will need your browser configured to access the vetsgov-internal domain via the SOCKS proxy. Please see the ",Object(i.b)("a",{parentName:"em",href:"/veteran-facing-services-tools/getting-started/internal-tools"},"2. Access internal tools")," for detailed instructions.")),Object(i.b)("h3",{id:"review-instance-manual-creation"},"Review instance manual creation"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Jenkins")," can be ",Object(i.b)("strong",{parentName:"p"},"manually triggered")," to build a ",Object(i.b)("strong",{parentName:"p"},"review instance"),"."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Visit the ",Object(i.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/vets-review-instance-deploy/"},"Jenkins Review Application Deploy job UI")," and log in."),Object(i.b)("li",{parentName:"ol"},"Select ",Object(i.b)("strong",{parentName:"li"},"Build with Parameters")),Object(i.b)("li",{parentName:"ol"},"Specify the branch names for ",Object(i.b)("inlineCode",{parentName:"li"},"api_branch"),", ",Object(i.b)("inlineCode",{parentName:"li"},"web_branch"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"content_branch"),". These branches will be deployed together with the review instance."),Object(i.b)("li",{parentName:"ol"},"When the process is completed, the URL for the review instance will be provided at the end of the output logs.")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"A Jenkins job will run periodically and remove review instances for which the source branches no longer exist. To ensure that your instance is cleaned up appropriately, just delete the branch from the origin repository.")),Object(i.b)("h2",{id:"peer-review-and-merge"},"Peer review and merge"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Get at least one ",Object(i.b)("strong",{parentName:"li"},"pull request approval")," from a peer"),Object(i.b)("li",{parentName:"ul"},"It is recommended not to merge at the end of the day or right before the weekend unless necessary."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.blog/2016-04-01-squash-your-commits/"},"Squash your commits")," and ",Object(i.b)("strong",{parentName:"li"},"merge")," into ",Object(i.b)("strong",{parentName:"li"},"master")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Delete")," pull request branch")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"See our team's ",Object(i.b)("a",{parentName:"em",href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/code_review_guidelines.md"},"code review norms")," for details on how code review work and what needs to be checked.")))}b.isMDXComponent=!0},"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),s=a("FRpb");function r(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var l=a("8FPV");function c(e){var t=e.children,a=e.location,n=e.pageContext;return i.a.createElement(l.a,{location:a},i.a.createElement("div",{className:"vads-l-row site-l-wrapper"},i.a.createElement(s.a,{location:a}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(r,{sourceUrl:n.sourceUrl}))))}},FRpb:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("q1tI"),i=a.n(n),s=a("Wbzz");function r(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(s.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},n&&i.a.createElement(r,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(l,{isSublist:!0,items:e.items})):i.a.createElement(r,{item:e,key:e.name})}))):null}var c=a("MEl4"),o=a.n(c);function b(e){var t=e.location,a=o.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(l,{items:a.items}))):null}},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-review-mdx-65f42bbc519a7be8f5b7.js.map