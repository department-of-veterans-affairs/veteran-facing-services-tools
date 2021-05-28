(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),l=a.n(n),o=a("Wbzz");function i(e){var t=e.item;return t.href?l.a.createElement("li",{key:t.name},l.a.createElement(o.Link,{to:t.href},t.name)):l.a.createElement("li",{key:t.name},t.name," (future)")}function r(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?l.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?l.a.createElement("li",{key:e.name},n&&l.a.createElement(i,{item:e}),!n&&l.a.createElement("h2",{className:"heading-level-4"},e.name),l.a.createElement(r,{isSublist:!0,items:e.items})):l.a.createElement(i,{item:e,key:e.name})}))):null}var s=a("MEl4"),b=a.n(s);function c(e){var t=e.location,a=b.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?l.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},l.a.createElement("div",{className:"site-c-sidenav"},l.a.createElement(r,{items:a.items}))):null}function p(e){var t=e.sourceUrl;return t?l.a.createElement("div",null,l.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",l.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var m=a("8FPV");function d(e){var t=e.children,a=e.location,n=e.pageContext;return l.a.createElement(m.a,{location:a},l.a.createElement("div",{className:"vads-l-row"},l.a.createElement(c,{location:a}),l.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,l.a.createElement(p,{sourceUrl:n.sourceUrl}))))}},eJaJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return c}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),o=a("3dLD"),i=["components"],r={},s={_frontmatter:r},b=o.a;function c(e){var t=e.components,a=Object(n.a)(e,i);return Object(l.b)(b,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"deploy"},"Deploy"),Object(l.b)("p",null,"Code goes through several steps to get to production. This document describes this process. It should also be noted that this is the same flow for both content and code changes."),Object(l.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#automated-deployment-schedule"},"Automated deployment schedule")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#overview"},"Overview")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#automated-process-details"},"Automated process details")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#rollbacks"},"Rollbacks")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#creating-a-vets-website-release"},"Creating a vets-website Release")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#hotfixes"},"Hotfixes")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#vets-website-manual-deployment"},"vets-website Manual deployment"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#before-deploying"},"Before deploying")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#full-production-deploy-of-vets-website"},"Full production deploy of vets-website")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#manual-deployment-of-vets-website-to-staging-or-dev"},"Manual deployment of vets-website to staging or dev")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#content-build-manual-deployment"},"content-build Manual deployment"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#content-only-production-deploy"},"Content-only production deploy")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#full-production-deploy-of-content-build"},"Full production deploy of content-build")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#manual-deployment-of-content-build-to-staging-or-dev"},"Manual deployment of content-build to staging or dev")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#dealing-with-flaky-unit-tests"},"Dealing with Flaky Unit Tests"))),Object(l.b)("h2",{id:"automated-deployment-schedule"},"Automated deployment schedule"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Application"),Object(l.b)("th",{parentName:"tr",align:null},"Branch"),Object(l.b)("th",{parentName:"tr",align:null},"Changes in by"),Object(l.b)("th",{parentName:"tr",align:null},"Deployment Start"),Object(l.b)("th",{parentName:"tr",align:null},"Release Information"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"vets-website"),Object(l.b)("td",{parentName:"tr",align:null},"master"),Object(l.b)("td",{parentName:"tr",align:null},"2:00pm ET M-F"),Object(l.b)("td",{parentName:"tr",align:null},"3:00pm ET M-F"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://github.com/department-of-veterans-affairs/vets-website/releases"},"vets-website release history"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"content-build"),Object(l.b)("td",{parentName:"tr",align:null},"master"),Object(l.b)("td",{parentName:"tr",align:null},"2:00pm ET M-F"),Object(l.b)("td",{parentName:"tr",align:null},"3:00pm ET M-F"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://github.com/department-of-veterans-affairs/content-build/releases"},"content-build release history"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"vets-api"),Object(l.b)("td",{parentName:"tr",align:null},"master"),Object(l.b)("td",{parentName:"tr",align:null},"2:00pm ET M-F"),Object(l.b)("td",{parentName:"tr",align:null},"3:00pm ET M-F"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://github.com/department-of-veterans-affairs/vets-api/releases"},"vets-api release history"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"content-build (content only)"),Object(l.b)("td",{parentName:"tr",align:null},"master"),Object(l.b)("td",{parentName:"tr",align:null},"9am-12pm Hourly, 1:45pm, 4pm, 5pm ET M-F"),Object(l.b)("td",{parentName:"tr",align:null},"(same)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://github.com/department-of-veterans-affairs/content-build/releases/latest"},"content-build latest release"))))),Object(l.b)("h2",{id:"overview"},"Overview"),Object(l.b)("p",null,"Jenkins performs the following tasks after a pull request is merged into ",Object(l.b)("inlineCode",{parentName:"p"},"master")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Build")," ",Object(l.b)("inlineCode",{parentName:"li"},"master")," branch to create an deployment artifact (.tar file)"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Deploy")," to development and staging using deployment artifact"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://help.github.com/en/articles/creating-releases"},"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Deploy")," to production using deployment artifact according to automated deployment schedule")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"A big assumption in this process is that the ",Object(l.b)("inlineCode",{parentName:"em"},"master")," should always be deployable. As such, the deployment to the staging environment is configured to happen automatically and can be used to see what something would look like in a production-like environment for any kind of manual testing/verification.")),Object(l.b)("h2",{id:"automated-process-details"},"Automated process details"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Every work day at the configured time the ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/vets-gov-autodeploy-vets-website/"},"vets-gov-autodeploy-vets-website")," and ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/vets-gov-autodeploy-content-build/"},"vets-gov-autodeploy-content-build")," jobs will run."),Object(l.b)("li",{parentName:"ul"},"The autodeploy jobs will call the ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/releases/job/vets-website/"},"vets-website release")," and ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/releases/job/content-build/"},"content-build release")," jobs which create a ",Object(l.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/releases"},"vets-website release")," and ",Object(l.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/content-build/releases"},"content-build release"),"."),Object(l.b)("li",{parentName:"ul"},"Release artifacts are deployed to production by the ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovprod/"},"vets-website-vagovprod")," and ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/content-build-vagovprod/"},"content-build-vagovprod")," jobs. These jobs should ",Object(l.b)("em",{parentName:"li"},"not")," be triggered manually.")),Object(l.b)("h2",{id:"rollbacks"},"Rollbacks"),Object(l.b)("p",null,"If a production deployment introduces issues that affect Service Level Objectives (SLOs)\nestablished for the project, you may restore service to users by rolling back\nto a previous deployment. This is accomplished by triggering a new deploy job in Jenkins using a\nprevious release tag. Typical deployment times are under 5mins."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Identify the release you want to rollback to by visiting the ",Object(l.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/releases"},"vets-website")," or ",Object(l.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/content-build/releases"},"content-build")," release log(s)"),Object(l.b)("li",{parentName:"ol"},"Click on the commit ID in the left column of the release you want to reference"),Object(l.b)("li",{parentName:"ol"},"Copy the commit ref (it will be a long string like: ",Object(l.b)("inlineCode",{parentName:"li"},"7c74702605561a33a5a6edbe46a95ac43dddb1df"),")"),Object(l.b)("li",{parentName:"ol"},"Visit the ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovprod/build?delay=0sec"},"vets-website")," or ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/content-build-vagovprod/build?delay=0sec"},"content-build")," prod deploy job(s)"),Object(l.b)("li",{parentName:"ol"},"Enter the ref value into the ref field"),Object(l.b)("li",{parentName:"ol"},'Click "Build"')),Object(l.b)("p",null,"If SLOs are not affected and a fix is not critical, no rollback will be issued. Instead the fix should\nbe applied through the standard development workflow."),Object(l.b)("h2",{id:"creating-a-vets-website-release"},"Creating a vets-website Release"),Object(l.b)("p",null,"If the commit you are trying to release to does not have an official release tag, you have to create one:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Update your local master branch"),Object(l.b)("li",{parentName:"ol"},"Check out the commit you want"),Object(l.b)("li",{parentName:"ol"},"Note the latest release from the ",Object(l.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/releases"},"vets-website release log")),Object(l.b)("li",{parentName:"ol"},"Visit the ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/releases/job/vets-website/build?delay=0sec"},"release job in Jenkins")),Object(l.b)("li",{parentName:"ol"},"Make sure the commit you want to use has ",Object(l.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/commits/master"},"passed through the build pipeline in master")),Object(l.b)("li",{parentName:"ol"},'Replace the "ref" value with the commit you want to use to create the release (it will be a long string like: ',Object(l.b)("inlineCode",{parentName:"li"},"7c74702605561a33a5a6edbe46a95ac43dddb1df"),")"),Object(l.b)("li",{parentName:"ol"},'Click "Build"'),Object(l.b)("li",{parentName:"ol"},"You should now see it in the ",Object(l.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/releases"},"vets-website release log")," and can follow the normal rollback steps.")),Object(l.b)("p",null,"This should create a new release, and deploy it to va.gov."),Object(l.b)("h2",{id:"creating-a-content-build-release"},"Creating a content-build Release"),Object(l.b)("p",null,"If the commit you are trying to release to does not have an official release tag, you have to create one:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Update your local master branch"),Object(l.b)("li",{parentName:"ol"},"Check out the commit you want"),Object(l.b)("li",{parentName:"ol"},"Note the latest release from the ",Object(l.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/content-build/releases"},"content-build release log")),Object(l.b)("li",{parentName:"ol"},"Visit the ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/releases/job/content-build/"},"release job in Jenkins")),Object(l.b)("li",{parentName:"ol"},"Make sure the commit you want to use has ",Object(l.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/content-build/commits/master"},"passed through the build pipeline in master")),Object(l.b)("li",{parentName:"ol"},'Replace the "ref" value with the commit you want to use to create the release (it will be a long string like: ',Object(l.b)("inlineCode",{parentName:"li"},"7c74702605561a33a5a6edbe46a95ac43dddb1df"),")"),Object(l.b)("li",{parentName:"ol"},'Click "Build"'),Object(l.b)("li",{parentName:"ol"},"You should now see it in the ",Object(l.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/content-build/releases"},"content-build release log")," and can follow the normal rollback steps.")),Object(l.b)("p",null,"This should create a new release, and deploy it to va.gov."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," Verify that there are no ",Object(l.b)("a",{parentName:"p",href:"#automated-deployment-schedule"},"scheduled")," ",Object(l.b)("a",{parentName:"p",href:"http://jenkins.vfs.va.gov/job/deploys/job/content-build-content-autodeploy/"},"content releases")," around the time of creating a release. A following release can override your manual release if started before your release has finished."),Object(l.b)("h2",{id:"hotfixes"},"Hotfixes"),Object(l.b)("p",null,"The ",Object(l.b)("strong",{parentName:"p"},"use of hotfixes is discouraged"),", but may be useful in an emergency situation when ",Object(l.b)("inlineCode",{parentName:"p"},"master"),'\nhas significantly deviated from the release and a fix to the failed production release is critical.\nTo create a hotfix, create a branch from the last stable release tag, make changes necessary (with review),\ncreate a new release tag following the correct naming scheme, and trigger a deploy in Jenkins with the\nrelease name as a parameter. This documentation is above, in the "Creating a Release" section.'),Object(l.b)("h2",{id:"vets-website-manual-deployment"},"vets-website Manual deployment"),Object(l.b)("p",null,"Out-of-band deploys may be performed in accordance with Platform ",Object(l.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/deployment-policy.md#requesting-out-of-band-deploys"},"deployment policy"),"."),Object(l.b)("h3",{id:"before-deploying"},"Before deploying"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Wait for ",Object(l.b)("strong",{parentName:"li"},"Jenkins")," to ",Object(l.b)("strong",{parentName:"li"},"build the change")," in ",Object(l.b)("inlineCode",{parentName:"li"},"vets-website")),Object(l.b)("li",{parentName:"ul"},"Builds status can be viewed ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vetsgov-internal/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=master"},"here"),". ",Object(l.b)("em",{parentName:"li"},"Requires SOCKS proxy. See ",Object(l.b)("a",{parentName:"em",href:"/getting-started/internal-tools"},"Accessing internal tools"))),Object(l.b)("li",{parentName:"ul"},"If this build fails, you may need to log into Jenkins and restart it")),Object(l.b)("h3",{id:"full-production-deploy-of-vets-website"},"Full production deploy of vets-website"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Verify that your changes are committed and that the changes since the last deploy are safe to deploy:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Last deployment time"),": You can check the build ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"},"history")," for the time of the last deploy (usually daily at 2pm EST)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Commit history"),": ",Object(l.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/commits/master"},"Look")," for commits after the last deploy and verify they're production ready.")))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"You may need to contact the developers of those commits to verify.")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Start a deploy job"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Log into Jenkins ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"},"here")),Object(l.b)("li",{parentName:"ul"},"Click ",Object(l.b)("strong",{parentName:"li"},"Build with Parameters")," ",Object(l.b)("em",{parentName:"li"},"(contact ",Object(l.b)("a",{parentName:"em",href:"https://dsva.slack.com/archives/CJYRZK2HH"},"#vsp-operations")," if you don't see this option and think you should)")),Object(l.b)("li",{parentName:"ul"},"Set the ",Object(l.b)("strong",{parentName:"li"},"release_wait")," option to ",Object(l.b)("strong",{parentName:"li"},"5")," minutes"),Object(l.b)("li",{parentName:"ul"},"Uncheck ",Object(l.b)("strong",{parentName:"li"},"use_latest_release")," <-- ",Object(l.b)("em",{parentName:"li"},"important")),Object(l.b)("li",{parentName:"ul"},"Click ",Object(l.b)("strong",{parentName:"li"},"Build")),Object(l.b)("li",{parentName:"ul"},"Verify commits in ",Object(l.b)("strong",{parentName:"li"},"deployment notification"))),Object(l.b)("p",{parentName:"li"},Object(l.b)("em",{parentName:"p"},"In the ",Object(l.b)("a",{parentName:"em",href:"https://dsva.slack.com/archives/C0MQ281DJ"},"#vfs-platform-builds")," Slack channel, Jenkins will include a link that shows the exact commits being released in the ",Object(l.b)("strong",{parentName:"em"},"deploy notification"),"."))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Verify")," changes in ",Object(l.b)("strong",{parentName:"p"},"production")," once the build finishes"))),Object(l.b)("h3",{id:"manual-deployment-of-vets-website-to-staging-or-dev"},"Manual deployment of vets-website to staging or dev"),Object(l.b)("p",null,"When staging deployments get clogged up or staging as a whole falls behind production\n(for various reasons) you may need to execute a manual deployment for staging. To do this\nuse the following steps: "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Visit the ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovstaging/"},"vets-website vagovstaging")," job in Jenkins (or ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovdev/"},"vets-website vagovdev")," for dev)"),Object(l.b)("li",{parentName:"ol"},"Click ",Object(l.b)("strong",{parentName:"li"},"Build with Parameters")),Object(l.b)("li",{parentName:"ol"},"Make sure the commit you want to use has ",Object(l.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/commits/master"},"passed through the build pipeline in master")),Object(l.b)("li",{parentName:"ol"},'Replace the "ref" value with the commit you want to use to create the release (it will be a long string like: ',Object(l.b)("inlineCode",{parentName:"li"},"7c74702605561a33a5a6edbe46a95ac43dddb1df"),")"),Object(l.b)("li",{parentName:"ol"},"Click ",Object(l.b)("strong",{parentName:"li"},"Build")),Object(l.b)("li",{parentName:"ol"},"You can watch the deployment process from the ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovstaging/"},"vets-website vagovstaging")," (or ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovdev/"},"vets-website vagovdev")," for dev) status page in Jenkins "),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://frontend-support-dashboard.now.sh/"},"Confirm that your deployed commit is on staging"))),Object(l.b)("h2",{id:"content-build-manual-deployment"},"content-build Manual deployment"),Object(l.b)("p",null,"Out-of-band deploys may be performed in accordance with Platform ",Object(l.b)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/deployment-policy.md#requesting-out-of-band-deploys"},"deployment policy"),"."),Object(l.b)("p",null,"Multiple manual deploys are supported in Jenkins:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Partial deploy including only static page changes (",Object(l.b)("inlineCode",{parentName:"li"},"vagov-content")," and ",Object(l.b)("inlineCode",{parentName:"li"},"Drupal"),")"),Object(l.b)("li",{parentName:"ul"},"Full deploy of VA.gov static pages")),Object(l.b)("h3",{id:"content-only-production-deploy"},"Content-only production deploy"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Start a deploy job"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-content-build/"},"Login to Jenkins")),Object(l.b)("li",{parentName:"ul"},"Click ",Object(l.b)("strong",{parentName:"li"},"Build with Parameters")),Object(l.b)("li",{parentName:"ul"},"Set the ",Object(l.b)("strong",{parentName:"li"},"release_wait")," option to ",Object(l.b)("strong",{parentName:"li"},"5")," minutes"),Object(l.b)("li",{parentName:"ul"},"Check ",Object(l.b)("strong",{parentName:"li"},"use_latest_release")," <-- ",Object(l.b)("em",{parentName:"li"},"important")),Object(l.b)("li",{parentName:"ul"},"Click ",Object(l.b)("strong",{parentName:"li"},"Build")),Object(l.b)("li",{parentName:"ul"},"Verify commits in ",Object(l.b)("strong",{parentName:"li"},"deployment notification"))),Object(l.b)("p",{parentName:"li"},Object(l.b)("em",{parentName:"p"},"In the ",Object(l.b)("a",{parentName:"em",href:"https://dsva.slack.com/archives/C0MQ281DJ"},"#vfs-platform-builds")," Slack channel, Jenkins will include a link that shows the exact commits being released in the ",Object(l.b)("strong",{parentName:"em"},"deploy notification"),".")))),Object(l.b)("h3",{id:"full-production-deploy-of-content-build"},"Full production deploy of content-build"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Verify that your changes are committed and that the changes since the last deploy are safe to deploy:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Last deployment time"),": You can check the build ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-content-build/"},"history")," for the time of the last deploy (usually daily at 2pm EST)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Commit history"),": ",Object(l.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/content-build/commits/master"},"Look")," for commits after the last deploy and verify they're production ready.")))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"You may need to contact the developers of those commits to verify.")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Start a deploy job",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-content-build/"},"Login to Jenkins")),Object(l.b)("li",{parentName:"ul"},"Click ",Object(l.b)("strong",{parentName:"li"},"Build with Parameters")," ",Object(l.b)("em",{parentName:"li"},"(contact ",Object(l.b)("a",{parentName:"em",href:"https://dsva.slack.com/archives/CJYRZK2HH"},"#vsp-operations")," if you don't see this option and think you should)")),Object(l.b)("li",{parentName:"ul"},"Set the ",Object(l.b)("strong",{parentName:"li"},"release_wait")," option to ",Object(l.b)("strong",{parentName:"li"},"5")," minutes"),Object(l.b)("li",{parentName:"ul"},"Uncheck ",Object(l.b)("strong",{parentName:"li"},"use_latest_release")," <-- ",Object(l.b)("em",{parentName:"li"},"important")),Object(l.b)("li",{parentName:"ul"},"Click ",Object(l.b)("strong",{parentName:"li"},"Build")),Object(l.b)("li",{parentName:"ul"},"Verify commits in ",Object(l.b)("strong",{parentName:"li"},"deployment notification"))))),Object(l.b)("h3",{id:"manual-deployment-of-content-build-to-staging-or-dev"},"Manual deployment of content-build to staging or dev"),Object(l.b)("p",null,"When staging deployments get clogged up or staging as a whole falls behind production\n(for various reasons) you may need to execute a manual deployment for staging. To do this\nuse the following steps: "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Visit the ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/content-build-vagovstaging/"},"content-build vagovstaging")," job in Jenkins (or ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/content-build-vagovdev/"},"content-build vagovdev"),")"),Object(l.b)("li",{parentName:"ol"},"Click ",Object(l.b)("strong",{parentName:"li"},"Build with Parameters")),Object(l.b)("li",{parentName:"ol"},"Make sure the commit you want to use has ",Object(l.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/content-build/commits/master"},"passed through the build pipeline in master")),Object(l.b)("li",{parentName:"ol"},'Replace the "ref" value with the commit you want to use to create the release (it will be a long string like: ',Object(l.b)("inlineCode",{parentName:"li"},"7c74702605561a33a5a6edbe46a95ac43dddb1df"),")"),Object(l.b)("li",{parentName:"ol"},"Click ",Object(l.b)("strong",{parentName:"li"},"Build")),Object(l.b)("li",{parentName:"ol"},"You can watch the deployment process from the ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/content-build-vagovstaging/"},"content-build vagovstaging")," (or ",Object(l.b)("a",{parentName:"li",href:"http://jenkins.vfs.va.gov/job/deploys/job/content-build-vagovdev/"},"content-build vagovdev"),") status page in Jenkins ")),Object(l.b)("h2",{id:"dealing-with-flaky-unit-tests"},"Dealing with Flaky Unit Tests"),Object(l.b)("p",null,"A test fixture is a fixed state so the results should be repeatable. A flaky test is a test\nwhich could fail or pass for the same configuration. In monitoring the deploy of vets-website\nwe often have to deal with flaky tests in a few specific situations:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"A flaky test inside of a pull request"),Object(l.b)("li",{parentName:"ol"},"A flaky test in ",Object(l.b)("inlineCode",{parentName:"li"},"master")," when an autodeploy is ",Object(l.b)("em",{parentName:"li"},"not")," nearing"),Object(l.b)("li",{parentName:"ol"},"A flaky test in ",Object(l.b)("inlineCode",{parentName:"li"},"master")," when an auto-deploy is nearing")),Object(l.b)("p",null,"To tell if an auto-deploy is nearing you can refer to the table at the top of this document."),Object(l.b)("h4",{id:"a-flaky-test-inside-of-a-pull-request"},"A flaky test inside of a pull request"),Object(l.b)("p",null,"If a unit test fails in a pull request, no one is alerted so it’s more likely that it gets refreshed\nto unblock the work or skipped in the PR, then reviewed by the code owner. This action is the\nresponsibility of the pull request owner and has no effect on the daily deploy."),Object(l.b)("h4",{id:"a-flaky-test-in-master-when-an-autodeploy-is-not-nearing"},"A flaky test in master when an autodeploy is not nearing"),Object(l.b)("p",null,"If a unit test fails in master and a deploy is not nearing (or has already happened for the day),\nthe failure can be ignored as inconsequential. However, the pipeline should still be refreshed\nin order to tell if the test is flaky or legitamately failing. The relevant code owner should\nthen be alerted so they can either skip or fix the test before the next deploy (at the discretion\nof the test owner)."),Object(l.b)("h4",{id:"a-flaky-test-in-master-when-an-auto-deploy-is-nearing"},"A flaky test in master when an auto-deploy is nearing"),Object(l.b)("p",null,"If a unit test fails in ",Object(l.b)("inlineCode",{parentName:"p"},"master")," and a scheduled deploy is nearing, the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/orgs/department-of-veterans-affairs/teams/frontend-review-group"},"Front-end Tools support\nteam member")," should\nrefresh the pipeline immediately, open up a pull request to skip the test, and alert the code owner\nfor a fix and/or pull request approval to skip the test. Ideally the test gets fixed, but in reality,\nthe process to merge can often take longer than is allowed for by the timing of the deploy. This is\nwhy it is important to have a pull request opened immediately to skip the test if needed - no need\nto wait for the code owner, delays can fail the deploy. This is the most common reason for a failed\ndeploy so we should all be on high alert for it while on a support rotation."),Object(l.b)("p",null,"As the pull request is running through the pipeline, the support engineer should keep\nrefreshing the master pipeline just in case it catches and is successful to prevent a failed deploy.\nEven if the deploy is successful, the test should be either fixed or skipped as to not block future\ndeploys."))}c.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-deploy-mdx-0533ec6ee9a2b09c401a.js.map