(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),i=a.n(n),o=a("Wbzz");function r(e){var t=e.item;return t.href?i.a.createElement("li",{key:t.name},i.a.createElement(o.Link,{to:t.href},t.name)):i.a.createElement("li",{key:t.name},t.name," (future)")}function c(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?i.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?i.a.createElement("li",{key:e.name},n&&i.a.createElement(r,{item:e}),!n&&i.a.createElement("h2",{className:"heading-level-4"},e.name),i.a.createElement(c,{isSublist:!0,items:e.items})):i.a.createElement(r,{item:e,key:e.name})}))):null}var s=a("MEl4"),l=a.n(s);function p(e){var t=e.location,a=l.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?i.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},i.a.createElement("div",{className:"site-c-sidenav"},i.a.createElement(c,{items:a.items}))):null}function b(e){var t=e.sourceUrl;return t?i.a.createElement("div",null,i.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",i.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var m=a("8FPV");function d(e){var t=e.children,a=e.location,n=e.pageContext;return i.a.createElement(m.a,{location:a},i.a.createElement("div",{className:"vads-l-row"},i.a.createElement(p,{location:a}),i.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,i.a.createElement(b,{sourceUrl:n.sourceUrl}))))}},kDfQ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("3dLD"),r=["components"],c={},s={_frontmatter:c},l=o.a;function p(e){var t=e.components,a=Object(n.a)(e,r);return Object(i.b)(l,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"downtime-notifications"},"Downtime Notifications"),Object(i.b)("p",null,"Downtime Notications are a mechanism for handling outages of external services in the consuming front-end applications."),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Available as a React component in ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/monitoring/DowntimeNotification/index.jsx"},"vets-website"),"."),Object(i.b)("li",{parentName:"ul"},"Consumers of the React component register required-services as dependencies via React props"),Object(i.b)("li",{parentName:"ul"},"Driven by ",Object(i.b)("a",{parentName:"li",href:"https://dsva.pagerduty.com/maintenance_windows"},"PagerDuty maintenance windows")," so that downtime for a certain service can be scheduled without requiring a deployment. ",Object(i.b)("a",{parentName:"li",href:"https://support.pagerduty.com/docs/maintenance-windows"},"More info on PagerDuty maintenance windows"),"."),Object(i.b)("li",{parentName:"ul"},"After a maintenance window is added in Pager Duty, an application wrapped in the Downtime Notification React component typically responds in one of three ways:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Rendering the application as normal if the maintenance window does not start for upwards of an hour."),Object(i.b)("li",{parentName:"ol"},"Displaying a dismissible modal informing the user of upcoming downtime and rendering the application as usual if the maintenance window starts within the hour."),Object(i.b)("li",{parentName:"ol"},"Rendering an alert banner informing the user of active downtime instead of rendering the application if the maintenance window has already started.")))),Object(i.b)("h2",{id:"how-to-use"},"How to use"),Object(i.b)("p",null,"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Identify required-services for the application",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"These services should be available in ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/platform/monitoring/DowntimeNotification/config/externalServices.js"},"externalServices")," if they have not already been. The value must match that in the devops ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/devops/blob/a4b5432061ae60a4f77952bbe5f668a1355ee007/ansible/deployment/config/vets-api/prod-settings.local.yml.j2#L232"},"config"),"."),Object(i.b)("li",{parentName:"ul"},"These dependencies may not be directly accessed by your application, but are more likely to be dependencies of the API method(s) consumed by your application. For example, the Search app requires Search.gov to function, even though it doesn't directly hit Search.gov.")))),Object(i.b)("h3",{id:"forms-library-applications"},"Forms library applications"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Import the services enum")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import { externalServices } from 'platform/monitoring/DowntimeNotification'\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Add a ",Object(i.b)("inlineCode",{parentName:"li"},"downtime")," property and ",Object(i.b)("inlineCode",{parentName:"li"},"dependencies")," array to the root of the form config. For example:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," downtime: {\n    dependencies: [externalServices.evss, externalServices.emis, externalServices.mvi, externalServices.vet360],\n  },\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Add additional properties to ",Object(i.b)("inlineCode",{parentName:"li"},"downtime")," as needed:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"message"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"a react component displayed in place of the default downtime message"),Object(i.b)("li",{parentName:"ul"},"custom downtime messages are discouraged"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"requiredForPrefill"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"true"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"given a user is logged in, when any services in the dependencies array are down, then display downtime notification before starting a form"),Object(i.b)("li",{parentName:"ul"},"given a user is logged in and has a saved form, when any services in the dependency array are down, then display the downtime notification before application submission"),Object(i.b)("li",{parentName:"ul"},"given a user is not logged in,"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"false")," ","[default]",": when any services in the dependencies array are down, then display the downtime notification before application submission")))),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"If you need your FormBuilder app to have downtime notifications on intro page you also need to follow React implimentation below",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The above implimentation only adds downtime notifications to the review page. Most forms will probably require to also the notifications on intro page so users dont find out at the end of the form.")))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"The DowntimeNotifications component wraps the ",Object(i.b)("inlineCode",{parentName:"em"},"FormStartControls")," on the introduction page and the ",Object(i.b)("inlineCode",{parentName:"em"},"SubmitController")," on the review page. Users can edit and save forms for later during a downtime unless ",Object(i.b)("inlineCode",{parentName:"em"},"requiredForPrefill")," is true.")),Object(i.b)("h3",{id:"react-applications"},"React applications"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Import the Downtime Notification React component into the application React code, usually the topmost container."),Object(i.b)("li",{parentName:"ol"},"In the render method, render a Downtime Notification React component passing the identified dependencies as props and the affected components as React children.")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"Suppose an application ",Object(i.b)("em",{parentName:"p"},"My App")," leverages a service called ",Object(i.b)("em",{parentName:"p"},"Fancy Service"),", and ",Object(i.b)("em",{parentName:"p"},"Fancy Service")," was known to be offline for maintenance every now and then. During those timeframes, it is desirable to show a message to the user explaining that ",Object(i.b)("em",{parentName:"p"},"My App")," is unavailable at this time so that users aren't given the impression that they are running into unexpected errors and so that ",Object(i.b)("em",{parentName:"p"},"Fancy Service")," isn't needlessly hit. This should also be easy for engineers to do, without requiring any deployments to publish/unpublish the messaging. This is a pretty typical use case for the ",Object(i.b)("inlineCode",{parentName:"p"},"DowntimeNotification")," React component."),Object(i.b)("h4",{id:"react-code"},"React code"),Object(i.b)("p",null,"First, the topmost React container of My App is modified to import and consume the Downtime Notification React component."),Object(i.b)("p",null,"Note that ",Object(i.b)("inlineCode",{parentName:"p"},"MyAppDataGrid")," would issue the API request to ",Object(i.b)("em",{parentName:"p"},"Fancy Service")," during ",Object(i.b)("inlineCode",{parentName:"p"},"componentDidMount"),", rather than ",Object(i.b)("inlineCode",{parentName:"p"},"MyApp"),". This is because ",Object(i.b)("inlineCode",{parentName:"p"},"MyAppDataGrid")," is passed a child component to ",Object(i.b)("inlineCode",{parentName:"p"},"DowntimeNotification"),". ",Object(i.b)("inlineCode",{parentName:"p"},"DowntimeNotification")," will fetch the currently-registered maintenance windows from the VA API (which in return reads the maintenance windows from PagerDuty), and if it discovers active downtime for ",Object(i.b)("inlineCode",{parentName:"p"},"fancyService"),", then the ",Object(i.b)("inlineCode",{parentName:"p"},"componentDidMount")," lifecycle method of ",Object(i.b)("inlineCode",{parentName:"p"},"MyAppDataGrid")," will not execute. This way, API requests to Fancy Service won't continue to send during downtime."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"src/applications/my-app/containers/MyApp.jsx")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { connect } from 'react-redux';\n\nimport {\n  DowntimeNotification,\n  externalServices,\n} from 'platform/monitoring/DowntimeNotifications';\n\nimport { fetchFromFancyService } from '../actions';\n\nimport MyAppDataGrid from '../components/MyAppDataGrid';\n\nclass MyApp extends React.component {\n  render() {\n    return (\n      <>\n        <h1>My App</h1>\n        <DowntimeNotification\n          appTitle=\"my app\"\n          dependencies={[externalServices.fancyService]}\n        >\n          <MyAppDataGrid\n            fetchFromFancyService={this.props.fetchFromFancyService}\n          />\n        </DowntimeNotification>\n      </>\n    );\n  }\n}\n\nconst mapStateToProps = state => store.myApp;\n\nconst mapDispatchToProps = {\n  fetchFromFancyService,\n};\n\nexport default connect(mapStateToProps, mapDispatchToProps)(MyApp);\n")),Object(i.b)("p",null,"The render-flow for this container is:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"MyApp"),"'s ",Object(i.b)("inlineCode",{parentName:"li"},"render")," method is executed"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"DowntimeNotification")," issues a GET request to the VA API for all registered maintenance windows."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"DowntimeNotification")," processes the response JSON data into a map."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"DowntimeNotification")," searches the downtime map for a service called ",Object(i.b)("inlineCode",{parentName:"li"},"fancyService"),", as passed in its ",Object(i.b)("inlineCode",{parentName:"li"},"dependencies")," prop."),Object(i.b)("li",{parentName:"ol"},"If downtime for ",Object(i.b)("inlineCode",{parentName:"li"},"fancyService")," is found:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If the current time is in the timeframe of the downtime window, render an alert banner informing the user that this application is undergoing maintenance."),Object(i.b)("li",{parentName:"ul"},"Otherwise, ",Object(i.b)("inlineCode",{parentName:"li"},"DowntimeNotification")," will renders its children, in this case ",Object(i.b)("inlineCode",{parentName:"li"},"MyAppDataGrid"),". A dismissible modal is also rendered if downtime is approaching within the hour.")))),Object(i.b)("h4",{id:"what-the-notification-looks-like-one-hour-before-service-goes-down-with-no-custom-content"},"What the notification looks like one hour before service goes down with no custom content"),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1035px"}},"\n      ",Object(i.b)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/5313a1393677cd1e7d0f153b512148fa/29007/downtime-one-hour-before.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",Object(i.b)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.52895752895753%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2UlEQVQoz22S3U/TUBiH+d/kggv31e+u7ek2etiGaGLijVFjQqZhSoKJf4PyMYE13QLzygtj4p2KQ1GC0m58BFycU+PWYv11C4s0a568OT3tc97znvOOyXpe0vMiCaIckEum8vKQ/iRmJJIFSnr6f8YkPSeRnBh8y8FMiOnLjBphtQinYRDlSZTX47wuKEYyNR2WoxyJ8SQhpRkpg7/vFR+Zlc3lkvlszVotV81KzarWViu124WHvGKomSsX5LiYgowIeSImmdam0zh4+66+82n38+7e1vsP9e2Pf1zvyco60hDj6gUZTiIw07xCJ2Ly4sr6m636y1evQX17x3YaWKLXc58ur6GEsDw4D4AXFGxaG6enrb0v+7bdODg8Oj4+aTYPfd9fKo3KLKhUUKcQRS0b4UjZ2vjWajlO8+u+A+xgYHtnZ0ul8giZUyhgFSpoWRSPE2r/6h6dtDqdTrv9o9vtua6LzIsjax5n6DhLLzFGJJnHfVSfv/j51//+2/PPH8/z+tselZmVJ7mkgcgGMTNz/ebs/fk7s0Vwt/CgUFwozC3MzT++duMWmiR8Vbg9AXtWaTBQafy8SYIO4QgjZwC6QNSmQmZfVimWxGnj2wBtcmbIcDKkDfgHuN5kXkql7tAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"downtime one hour before",title:"downtime one hour before",src:"/static/5313a1393677cd1e7d0f153b512148fa/e3189/downtime-one-hour-before.png",srcSet:["/static/5313a1393677cd1e7d0f153b512148fa/a2ead/downtime-one-hour-before.png 259w","/static/5313a1393677cd1e7d0f153b512148fa/6b9fd/downtime-one-hour-before.png 518w","/static/5313a1393677cd1e7d0f153b512148fa/e3189/downtime-one-hour-before.png 1035w","/static/5313a1393677cd1e7d0f153b512148fa/44d59/downtime-one-hour-before.png 1553w","/static/5313a1393677cd1e7d0f153b512148fa/29007/downtime-one-hour-before.png 1600w"],sizes:"(max-width: 1035px) 100vw, 1035px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n  "),"\n    ")),Object(i.b)("h4",{id:"this-is-what-the-downtime-notification-looks-like-during-downtime-period"},"This is what the downtime notification looks like during downtime period"),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1035px"}},"\n      ",Object(i.b)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/c4dacf0ea06b09905c2c69912c512342/203d3/downtime-during-downtime-period.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",Object(i.b)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"76.44787644787644%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9ElEQVQoz31S2ZKjMAzM///WPu7TVi4mExJCCMYcxjYGHzKwsjNHpmprVY1oGbUtJG8s+GGyanJMmk7qTppR255zLmTfBy+Q8BDHUMRQsJ47BxsLy6C90sAGg/p+sJNxmCQH1YeXlMOABF+cB46PiPs6gM06j4vjy7wss0esi5+RRFuj9x5X5qd/flo/bbPqgqa/3tJ7kryd3s/4HJPT6T1Fsj8k53PKn8UKgaTve2MMyp5boLhk99/5g+Z5nmX57ZZfr+juGZLsll4zQqqSVOh5NGvt98nLdNfNH1Kx7Xa32x/3h+N2dzgck8gTrOWaZef0kl6ubdvi+T/Eqyaq2TGuKK1pXdcNWos+ArOlijYohd3C8Kd4ndfVr/+x2LmA9QufYmPd/nTdny6XvDR+1bBMMKM3MJtIAvzyQWCB+UXswBe0y0mDIC2nTNQ9Qt5blbcjYQOGVScoggWC+d9iAGAs3J2uY9gPnATg3QEYDQwTWMyFAABcdM7ZH3PG6WOfqorS0K46dAsb1TS0bi+P7nxvSkIfZUUqWpREjePXkOPJ3pcNf1D+qHlR96SVpBWPWuAicqVGazRqxmlCjsmvrQxi0nDayQo1tC8oQ15Q3AX1oua6lQb8/M85hLJx+lgwjRYKZ0JrDc46a+VoufoQv/7t0/4ClkxU+TXVDKcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"downtime during downtime period",title:"downtime during downtime period",src:"/static/c4dacf0ea06b09905c2c69912c512342/e3189/downtime-during-downtime-period.png",srcSet:["/static/c4dacf0ea06b09905c2c69912c512342/a2ead/downtime-during-downtime-period.png 259w","/static/c4dacf0ea06b09905c2c69912c512342/6b9fd/downtime-during-downtime-period.png 518w","/static/c4dacf0ea06b09905c2c69912c512342/e3189/downtime-during-downtime-period.png 1035w","/static/c4dacf0ea06b09905c2c69912c512342/203d3/downtime-during-downtime-period.png 1322w"],sizes:"(max-width: 1035px) 100vw, 1035px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n  "),"\n    ")),Object(i.b)("h3",{id:"adding-a-new-pagerduty-service"},"Adding a new PagerDuty service"),Object(i.b)("p",null,"If you've created a new backend service that a React application depends on, follow these steps to allow the React application to fetch its downtime windows:"),Object(i.b)("h4",{id:"configuration"},"Configuration"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Login to PagerDuty (",Object(i.b)("a",{parentName:"li",href:"https://dsva.pagerduty.com/"},"https://dsva.pagerduty.com/"),")"),Object(i.b)("li",{parentName:"ul"},"Create your PagerDuty ",Object(i.b)("strong",{parentName:"li"},"Service")," (",Object(i.b)("a",{parentName:"li",href:"https://dsva.pagerduty.com/service-directory"},"https://dsva.pagerduty.com/service-directory"),")",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This may require you to create a PagerDuty Person, Escalation Policy, and/or Team that is specific to this service."),Object(i.b)("li",{parentName:"ul"},'Follow the naming convention of other backend services in PagerDuty by prepending "External: " to the service name (i.e. "External: MyService").'),Object(i.b)("li",{parentName:"ul"},'You may also want to create multiple services for multiple enviornements (i.e. "External: MyService", "Staging: External: MyService", "Dev: External: MyService").'))),Object(i.b)("li",{parentName:"ul"},"In the ",Object(i.b)("a",{parentName:"li",href:""},"vets-api")," repo, add your service to the list of ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/settings.yml#L441"},"maintenance services")," in ",Object(i.b)("inlineCode",{parentName:"li"},"config/settings.yml"),"."),Object(i.b)("li",{parentName:"ul"},"In the ",Object(i.b)("a",{parentName:"li",href:""},"devops")," repo, make the same configuration change to each enviornemnt's config file."),Object(i.b)("li",{parentName:"ul"},"Deploy all changes.")),Object(i.b)("h4",{id:"testing"},"Testing"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Login to PagerDuty (",Object(i.b)("a",{parentName:"li",href:"https://dsva.pagerduty.com/"},"https://dsva.pagerduty.com/"),")"),Object(i.b)("li",{parentName:"ul"},"Go to your ",Object(i.b)("strong",{parentName:"li"},"staging")," service"),Object(i.b)("li",{parentName:"ul"},"Create a maintenance window sometime in the future.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'You can specify a message to a user by using the token "USER_MESSAGE: " in the description (i.e. "Down for v16 update. USER_MESSAGE: We\'ll be back soon!")',Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Note that custom messages are discouraged to maintain a consistent user experience."))))))),Object(i.b)("li",{parentName:"ul"},"Visit ",Object(i.b)("a",{parentName:"li",href:"https://staging-api.va.gov/v0/maintenance_windows"},"https://staging-api.va.gov/v0/maintenance_windows")," and ensure that your service's downtime window is listed",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This information is cached and may have a delay for up to 3 minutes (see: the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/workers/pager_duty/poll_maintenance_windows.rb"},"PagerDuty::PollMaintenanceWindows job"),").")))),Object(i.b)("h2",{id:"other-examples"},"Other examples"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The Search app is a basic ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/search/containers/SearchApp.jsx#L301"},"example")," of an application having a single service dependency, in this case being Search.gov. The Facility Locator is another ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/facility-locator/containers/FacilityLocatorApp.jsx#L74"},"example"),"."),Object(i.b)("li",{parentName:"ol"},"The Account app is another simple ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/personalization/account/containers/AccountApp.jsx#L23"},"example"),". This application has two dependencies. If either is down, then the application is considered in maintenance."),Object(i.b)("li",{parentName:"ol"},"The Sign-In Modal is an ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/platform/user/authentication/components/SignInModal.jsx#L74"},"example")," of a component that renders messaging about service downtime, but it does not affect the functionality of the component. Instead, it's more a heads-up for the user about potential difficulty. This is also the case for ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/letters/containers/LettersApp.jsx#L63"},"Letters"),"."),Object(i.b)("li",{parentName:"ol"},"The Dashboard app consists of components with their own unique dependencies, so that a certain service being in maintenance should result in reduced but partial functionality for the Dashboard. It serves as an ",Object(i.b)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/personalization/dashboard/containers/DashboardApp.jsx#L398"},"example")," of a more complex implementation of Downtime Notifications.")))}p.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-platform-tools-downtime-notifications-mdx-7496e8fe467782411d2f.js.map