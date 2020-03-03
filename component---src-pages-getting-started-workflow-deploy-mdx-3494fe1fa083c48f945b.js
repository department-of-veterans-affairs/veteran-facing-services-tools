(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{eJaJ:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s})),t.d(a,"_frontmatter",(function(){return p}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP");var n=t("q1tI"),o=t.n(n),m=t("6qfE"),r=t("3dLD");var l={},s=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).layout=r.a,t}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this.props,a=e.components,t=function(e,a){if(null==e)return{};var t,n,o={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:a},o.a.createElement("h1",{id:"deploy"},"Deploy"),o.a.createElement(m.MDXTag,{name:"p",components:a},"Code goes through several steps to get to production. This document describes this process. It should also be noted that this is the same flow for both content and code changes."),o.a.createElement("h2",{id:"automated-deployment-schedule"},"Automated deployment schedule"),o.a.createElement(m.MDXTag,{name:"table",components:a},o.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Application"),o.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Branch"),o.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Changes in by"),o.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Deployment Start"),o.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Release History"))),o.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"vets-website"),o.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"master"),o.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"2:00pm ET M-F"),o.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"3:00pm ET M-F"),o.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/releases"}},"https://github.com/department-of-veterans-affairs/vets-website/releases"))),o.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"vets-api"),o.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"master"),o.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"2:00pm ET M-F"),o.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"3:00pm ET M-F"),o.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"td",props:{href:"https://github.com/department-of-veterans-affairs/vets-api/releases"}},"https://github.com/department-of-veterans-affairs/vets-api/releases"))))),o.a.createElement("h2",{id:"overview"},"Overview"),o.a.createElement(m.MDXTag,{name:"p",components:a},"Jenkins performs the following tasks after a pull request is merged into ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"master")),o.a.createElement(m.MDXTag,{name:"ol",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Build")," ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"master")," branch to create an deployment artifact (.tar file)"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Deploy")," to development and staging using deployment artifact"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://help.github.com/en/articles/creating-releases"}},"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Deploy")," to production using deployment artifact according to automated deployment schedule")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"A big assumption in this process is that the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"master")," should always be deployable. As such, the deployment to the staging environment is configured to happen automatically and can be used to see what something would look like in a production-like environment for any kind of manual testing/verification.")),o.a.createElement("h2",{id:"process-details"},"Process details"),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://help.github.com/en/articles/creating-releases"}},"Create a release")," in GitHub from master, tag artifacts of that commit SHA hash with release name")),o.a.createElement(m.MDXTag,{name:"p",components:a},"Every work day at the configured time a ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-automerge/"}},"Jenkins automerge job")," sends a link to the #vetsgov-engineers Slack channel with a diff between the last release and the most recent changes in ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"master"),". This commit reference is stored to ensure the diff and released version is deterministic."),o.a.createElement(m.MDXTag,{name:"p",components:a},"After a time has elapsed ( currently set to 60m ) release is created at the reference from above."),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Deploy")," to production using deployment artifacts")),o.a.createElement(m.MDXTag,{name:"p",components:a},"From here, Jenkins can kickoff a production deployment. After the deployment occurs, the normal site monitoring infrastructure will be used to valide it is working. As this process is automatic any new features should have monitoring in place before, or as a part of their deployment"),o.a.createElement("h2",{id:"rollbacks"},"Rollbacks"),o.a.createElement(m.MDXTag,{name:"p",components:a},"If a production deployment introduces issues that affect Service Level Objectives (SLOs) established for the project, the DevOps team may restore service to users by rolling back the deployment. This is accomplished by triggering a new deploy job in Jenkins using a previous release tag."),o.a.createElement(m.MDXTag,{name:"p",components:a},"The ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"use of hotfixes is discouraged"),", but may be useful in an emergency situation when ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"master")," has significantly deviated from the release and a fix to the failed production release is critical. To create a hotfix, create a branch from the last stable release tag, make changes necessary (with review), create a new release tag following the correct naming scheme, and trigger a deploy in Jenkins with the release name as a parameter."),o.a.createElement(m.MDXTag,{name:"p",components:a},"If SLOs are not affected and a fix is not critical, no rollback will be issued. Instead the fix should be applied through the standard development workflow."),o.a.createElement("h2",{id:"manual-deployment"},"Manual deployment"),o.a.createElement(m.MDXTag,{name:"p",components:a},"Two out-of-cycle deploys are supported in Jenkins:"),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"partial deploy including only static page changes (",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vagov-content")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Drupal"),")"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"full deploy of VA.gov client app and static pages")),o.a.createElement("h3",{id:"before-deploying"},"Before deploying"),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Wait for ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Jenkins")," to ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"build the change")," in ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vets-website")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Builds status can be viewed ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=master"}},"here"),". ",o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"li"},"Requires SOCKS proxy. See ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"/veteran-facing-services-tools/getting-started/internal-tools"}},"Accessing internal tools"))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"If this build fails, you may need to log into Jenkins and restart it")),o.a.createElement("h3",{id:"partial-deploy--static-page-changes-only"},"Partial deploy- static page changes only"),o.a.createElement(m.MDXTag,{name:"ol",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},"Start a deploy job"),o.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Log into Jenkins ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"here")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Click ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Build with Parameters")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Set the ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"release_wait")," option to ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"5")," minutes"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Check ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"use_latest_release")," <-- ",o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"li"},"important")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Click ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Build")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Verify commits in ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"deployment notification"))),o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"In Slack channel ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"em"},"#vetsgov-engineers"),", Jenkins will include a link that shows the exact commits being released in the ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"em"},"deploy notification"),"."))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Verify")," changes in ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"production")," once the build finishes"))),o.a.createElement("h3",{id:"full-deploy-of-vagov-client-app"},"Full deploy of VA.gov client app"),o.a.createElement(m.MDXTag,{name:"ol",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Verify that your changes are committed and that the changes since the last deploy are safe to deploy:",o.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Last deployment time"),": You can check the build ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"history")," for the time of the last deploy (usually daily at 2pm EST)"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Commit history"),": ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/commits/master"}},"Look")," for commits after the last deploy and verify they're production ready.")))),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"You may need to contact the developers of those commits to verify.")),o.a.createElement(m.MDXTag,{name:"ol",components:a,props:{start:2}},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},"Start a deploy job"),o.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Log into Jenkins ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/"}},"here")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Click ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Build with Parameters")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Set the ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"release_wait")," option to ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"5")," minutes"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Uncheck ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"use_latest_release")," <-- ",o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"li"},"important")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Click ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Build")),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Verify commits in ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"deployment notification"))),o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"In Slack channel ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"em"},"#vetsgov-engineers"),", Jenkins will include a link that shows the exact commits being released in the ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"em"},"deploy notification"),"."))),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Verify")," changes in ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"production")," once the build finishes"))))},n}(o.a.Component),p={}}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-deploy-mdx-3494fe1fa083c48f945b.js.map