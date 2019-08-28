(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{396:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return c}),a.d(n,"_frontmatter",function(){return s});a(8),a(7),a(4),a(9),a(10);var t=a(1),o=a.n(t),i=a(2),r=a(334);var m={},c=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).layout=r.a,a}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props,n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,a),components:n},o.a.createElement("h1",{id:"downtime-notifications"},"Downtime Notifications"),o.a.createElement(i.MDXTag,{name:"p",components:n},"Downtime Notications are a mechanism for handling outages of external services in the consuming front-end applications. "),o.a.createElement("h2",{id:"overview"},"Overview"),o.a.createElement(i.MDXTag,{name:"ul",components:n},o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Available as a React component in ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/monitoring/DowntimeNotification/index.jsx"}},"vets-website"),"."),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Consumers of the React component register required-services as dependencies via React props"),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Driven by ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://dsva.pagerduty.com/maintenance_windows"}},"PagerDuty maintenance windows")," so that downtime for a certain service can be scheduled without requiring a deployment. ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://support.pagerduty.com/docs/maintenance-windows"}},"More info on PagerDuty maintenance windows"),"."),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"After a maintenance window is added in Pager Duty, an application wrapped in the Downtime Notification React component typically responds in one of three ways:",o.a.createElement(i.MDXTag,{name:"ol",components:n,parentName:"li"},o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Rendering the application as normal if the maintenance window does not start for upwards of an hour."),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Displaying a dismissible modal informing the user of upcoming downtime and rendering the application as usual if the maintenance window starts within the hour."),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Rendering an alert banner informing the user of active downtime instead of rendering the application if the maintenance window has already started.")))),o.a.createElement("h2",{id:"how-to-use"},"How to use"),o.a.createElement(i.MDXTag,{name:"ol",components:n},o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Identify required-services for the application",o.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"These services should be added into ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/platform/monitoring/DowntimeNotification/config/externalServices.js"}},"externalServices")," if they have not already been. The value must match that in the devops ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/a4b5432061ae60a4f77952bbe5f668a1355ee007/ansible/deployment/config/vets-api/prod-settings.local.yml.j2#L232"}},"config"),"."),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"These dependencies may not be directly accessed by your application, but are more likely to be dependencies of the API method(s) consumed by your application. For example, the Search app requires Search.gov to function, even though it doesn't directly hit Search.gov."))),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Import the Downtime Notification React component into the application React code, usually the topmost container."),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"In the render method, render a Downtime Notification React component passing the identified dependencies as props and the affected components as React children.")),o.a.createElement("h3",{id:"example"},"Example"),o.a.createElement(i.MDXTag,{name:"p",components:n},"Suppose an application ",o.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"p"},"My App")," leverages a service called ",o.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"p"},"Fancy Service"),", and ",o.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"p"},"Fancy Service")," was known to be offline for maintenance every now and then. During those timeframes, it is desirable to show a message to the user explaining that ",o.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"p"},"My App")," is unavailable at this time so that users aren't given the impression that they are running into unexpected errors and so that ",o.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"p"},"Fancy Service")," isn't needlessly hit. This should also be easy for engineers to do, without requiring any deployments to publish/unpublish the messaging. This is a pretty typical use case for the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"DowntimeNotification")," React component."),o.a.createElement("h4",{id:"react-code"},"React code"),o.a.createElement(i.MDXTag,{name:"p",components:n},"First, the topmost React container of My App is modified to import and consume the Downtime Notification React component. "),o.a.createElement(i.MDXTag,{name:"p",components:n},"Note that ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"MyAppDataGrid")," would issue the API request to ",o.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"p"},"Fancy Service")," during ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"componentDidMount"),", rather than ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"MyApp"),". This is because ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"MyAppDataGrid")," is passed a child component to ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"DowntimeNotification"),". ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"DowntimeNotification")," will fetch the currently-registered maintenance windows from the VA API (which in return reads the maintenance windows from PagerDuty), and if it discovers active downtime  for ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fancyService"),", then the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"componentDidMount")," lifecycle method of ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"MyAppDataGrid")," will not execute. This way, API requests to Fancy Service won't continue to send during downtime."),o.a.createElement(i.MDXTag,{name:"p",components:n},o.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"src/applications/my-app/containers/MyApp.jsx")),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import React from 'react';\nimport { connect } from 'react-redux';\n\nimport {\n  DowntimeNotification,\n  externalServices,\n} from 'platform/monitoring/DowntimeNotifications';\n\nimport {\n  fetchFromFancyService\n} from '../actions';\n\nimport MyAppDataGrid from '../components/MyAppDataGrid';\n\nclass MyApp extends React.component {\n  render() {\n      return (\n        <>\n          <h1>My App</h1>\n          <DowntimeNotification appTitle=\"my app\" dependencies={[ externalServices.fancyService ]}>\n             <MyAppDataGrid fetchFromFancyService={this.props.fetchFromFancyService}/>\n          </DowntimeNotification>\n        </>\n      );\n  }\n\n}\n\nconst mapStateToProps = state => store.myApp;\n\nconst mapDispatchToProps = {\n  fetchFromFancyService,\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps,\n)(MyApp);\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"The render-flow for this container is:"),o.a.createElement(i.MDXTag,{name:"ol",components:n},o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"MyApp"),"'s ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"render")," method is executed"),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"DowntimeNotification")," issues a GET request to the VA API for all registered maintenance windows."),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"DowntimeNotification")," processes the response JSON data into a map."),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"DowntimeNotification")," searches the downtime map for a service called ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"fancyService"),", as passed in its ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"dependencies")," prop."),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"If downtime for ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"fancyService")," is found:",o.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"If the current time is in the timeframe of the downtime window, render an alert banner informing the user that this application is undergoing maintenance."),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Otherwise, ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"DowntimeNotification")," will renders its children, in this case ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"MyAppDataGrid"),". A dismissible modal is also rendered if downtime is approaching within the hour.")))),o.a.createElement("h2",{id:"other-examples"},"Other examples"),o.a.createElement(i.MDXTag,{name:"ol",components:n},o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"The Search app is a basic ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/search/containers/SearchApp.jsx#L301"}},"example")," of an application having a single service dependency, in this case being Search.gov. The Facility Locator is another ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/facility-locator/containers/FacilityLocatorApp.jsx#L74"}},"example"),"."),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"The Account app is another simple ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/personalization/account/containers/AccountApp.jsx#L23"}},"example"),". This application has two dependencies. If either is down, then the application is considered in maintenance."),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"The Sign-In Modal is an ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/platform/user/authentication/components/SignInModal.jsx#L74"}},"example")," of a component that renders messaging about service downtime, but it does not affect the functionality of the component. Instead, it's more a heads-up for the user about potential difficulty. This is also the case for ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/letters/containers/LettersApp.jsx#L63"}},"Letters"),"."),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"The Dashboard app consists of components with their own unique dependencies, so that a certain service being in maintenance should result in reduced but partial functionality for the Dashboard. It serves as an ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/personalization/dashboard/containers/DashboardApp.jsx#L398"}},"example")," of a more complex implementation of Downtime Notifications.")))},t}(o.a.Component),s={}}}]);
//# sourceMappingURL=component---src-pages-platform-tools-downtime-notifications-mdx-bf453ff7e531476e3457.js.map