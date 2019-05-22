---
title: Va.gov downtime notifications
tags: pagerduty, maintenance windows, scheduled downtime, banner
---

# Downtime Notifications
Downtime Notications are a mechanism for handling outages of external services in the consuming front-end applications. 

## Overview
- Available as a React component in [vets-website](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/monitoring/DowntimeNotification/index.jsx).
- Consumers of the React component register required-services as dependencies via React props
- Driven by [PagerDuty maintenance windows](https://dsva.pagerduty.com/maintenance_windows) so that downtime for a certain service can be scheduled without requiring a deployment. [More info on PagerDuty maintenance windows](https://support.pagerduty.com/docs/maintenance-windows).
- After a maintenance window is added in Pager Duty, an application wrapped in the Downtime Notification React component typically responds in one of three ways:
    1. Rendering the application as normal if the maintenance window does not start for upwards of an hour.
    1. Displaying a dismissible modal informing the user of upcoming downtime and rendering the application as usual if the maintenance window starts within the hour.
    1. Rendering an alert banner informing the user of active downtime instead of rendering the application if the maintenance window has already started.

## How to use
1. Identify required-services for the application
    - These services should be added into [externalServices](https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/platform/monitoring/DowntimeNotification/config/externalServices.js) if they have not already been. The value must match that in the devops [config](https://github.com/department-of-veterans-affairs/devops/blob/a4b5432061ae60a4f77952bbe5f668a1355ee007/ansible/deployment/config/vets-api/prod-settings.local.yml.j2#L232).
    - These dependencies may not be directly accessed by your application, but are more likely to be dependencies of the API method(s) consumed by your application. For example, the Search app requires Search.gov to function, even though it doesn't directly hit Search.gov.
1. Import the Downtime Notification React component into the application React code, usually the topmost container.
1. In the render method, render a Downtime Notification React component passing the identified dependencies as props and the affected components as React children.

### Example
Suppose an application _My App_ leverages a service called _Fancy Service_, and _Fancy Service_ was known to be offline for maintenance every now and then. During those timeframes, it is desirable to show a message to the user explaining that _My App_ is unavailable at this time so that users aren't given the impression that they are running into unexpected errors and so that _Fancy Service_ isn't needlessly hit. This should also be easy for engineers to do, without requiring any deployments to publish/unpublish the messaging. This is a pretty typical use case for the `DowntimeNotification` React component.

#### React code
First, the topmost React container of My App is modified to import and consume the Downtime Notification React component. 

Note that `MyAppDataGrid` would issue the API request to *Fancy Service* during `componentDidMount`, rather than `MyApp`. This is because `MyAppDataGrid` is passed a child component to `DowntimeNotification`. `DowntimeNotification` will fetch the currently-registered maintenance windows from the VA API (which in return reads the maintenance windows from PagerDuty), and if it discovers active downtime  for `fancyService`, then the `componentDidMount` lifecycle method of `MyAppDataGrid` will not execute. This way, API requests to Fancy Service won't continue to send during downtime.

**src/applications/my-app/containers/MyApp.jsx**
```jsx

import React from 'react';
import { connect } from 'react-redux';

import {
  DowntimeNotification,
  externalServices,
} from 'platform/monitoring/DowntimeNotifications';

import {
  fetchFromFancyService
} from '../actions';

import MyAppDataGrid from '../components/MyAppDataGrid';

class MyApp extends React.component {
  render() {
      return (
        <>
          <h1>My App</h1>
          <DowntimeNotification appTitle="my app" dependencies={[ externalServices.fancyService ]}>
             <MyAppDataGrid fetchFromFancyService={this.props.fetchFromFancyService}/>
          </DowntimeNotification>
        </>
      );
  }

}

const mapStateToProps = state => store.myApp;

const mapDispatchToProps = {
  fetchFromFancyService,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyApp);
```

The render-flow for this container is:

1. `MyApp`'s `render` method is executed
1. `DowntimeNotification` issues a GET request to the VA API for all registered maintenance windows.
1. `DowntimeNotification` processes the response JSON data into a map.
1. `DowntimeNotification` searches the downtime map for a service called `fancyService`, as passed in its `dependencies` prop.
1. If downtime for `fancyService` is found:
    - If the current time is in the timeframe of the downtime window, render an alert banner informing the user that this application is undergoing maintenance.
    - Otherwise, `DowntimeNotification` will renders its children, in this case `MyAppDataGrid`. A dismissible modal is also rendered if downtime is approaching within the hour.


## Other examples
1. The Search app is a basic [example](https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/search/containers/SearchApp.jsx#L301) of an application having a single service dependency, in this case being Search.gov. The Facility Locator is another [example](https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/facility-locator/containers/FacilityLocatorApp.jsx#L74).
1. The Account app is another simple [example](https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/personalization/account/containers/AccountApp.jsx#L23). This application has two dependencies. If either is down, then the application is considered in maintenance.
1. The Sign-In Modal is an [example](https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/platform/user/authentication/components/SignInModal.jsx#L74) of a component that renders messaging about service downtime, but it does not affect the functionality of the component. Instead, it's more a heads-up for the user about potential difficulty. This is also the case for [Letters](https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/letters/containers/LettersApp.jsx#L63).
1. The Dashboard app consists of components with their own unique dependencies, so that a certain service being in maintenance should result in reduced but partial functionality for the Dashboard. It serves as an [example](https://github.com/department-of-veterans-affairs/vets-website/blob/90152b7cdf5b53d6650b44fed832995dbf7660cb/src/applications/personalization/dashboard/containers/DashboardApp.jsx#L398) of a more complex implementation of Downtime Notifications.




