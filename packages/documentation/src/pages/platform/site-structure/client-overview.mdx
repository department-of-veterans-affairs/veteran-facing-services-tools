---
title: Va.gov client overview
tags: build process, Javascript applications, design system, routing for react apps, react on static content pages
---

# VA.gov client overview

Welcome to the VA digital services platform front-end overview. The goal of this article is to provide a high level overview of our front end architecture to get you oriented with the [vets-website](https://github.com/department-of-veterans-affairs/vets-website) repository.

The overall architecture for VA.gov is comprised of an API backend written in Ruby on Rails ([vets-api](https://github.com/department-of-veterans-affairs/vets-api)) and a static front-end, written in HTML, CSS, and Javascript (`vets-website`). There's no server-side rendering or processing for the front-end; the build process compiles everything into static resources which are served to users.

## Content build process

The build process has two primary kinds of functionality that it processes: static content pages and Javascript applications. Most of VA.gov consists of content that lives in Markdown files and the Drupal CMS, and is converted into HTML by a Metalsmith plugin. There are shared templates and other enhancements to make this content easier to structure.

The content build process for this is controlled by a tool called [Metalsmith](http://www.metalsmith.io/), which is a pluggable Node.js static site generator. In general, everything in Metalsmith is a plugin, so if you're looking for specific parts of the build process, expect to check out a plugin or two. We use Metalsmith because it's flexible and because it's Javascript based, it's easy to integrate with the rest of our tools.

## Javascript applications

Javascript applications are the other type of functionality in vets-website. These applications are written in [React](https://reactjs.org/) and [Redux](https://redux.js.org/), and live in `src/applications/` in `vets-website`. For each app, you'll find a `manifest.json` file that contains application information as well as an entry in the `src/applications/registry.json`.  The `manifest.json` is used by Webpack in the application build, while the `registry.json` is used by the content build. See [Creating a new application](/veteran-facing-services-tools/getting-started/common-tasks/new-application/#manual-set-up) for more information on the difference between the `manifest.json` files and the `registry.json` file.

You'll find the root url of the application, which you can use to navigate to that application on the site. These applications also usually have client-side routes, so opening that root url may allow you to click to other pages that are fully client-side.

If you're a developer, most of your time will likely be spent working on a React application. We use React because it's widely used by front end developers and provides a good balance of performance and approachability. We also use Redux to manage application state, also because it's commonly used with React and fits most of the applications on VA.gov well. We use [React Router](https://reacttraining.com/react-router/) for client-side routing and [Webpack](https://webpack.js.org/) as a build tool, both of which are the *de facto* standards in the Javascript world. For styles we use [Sass](https://sass-lang.com/), and for dependency management we use [Yarn](https://yarnpkg.com/en/).

## Design system

You will also find that our visual components and site-wide styles live in an external [design system](https://department-of-veterans-affairs.github.io/design-system/). This design system is based on the [US Web Design System](https://designsystem.digital.gov/), with some additional modifications by our team. As part of that design system, we provide a set of React components covering common patterns, which is [published to npm](https://www.npmjs.com/package/@department-of-veterans-affairs/formation). You'll likely use these components to make your apps accessible and consistent with the rest of VA.gov.

## Routing for React apps

### Production
The production deployment of the vet-website front end consists of static HTML, CSS, and JS assets deployed to an Amazon S3 bucket. We have an nginx server that serves those static assets and does some extra route handling for our single page React apps.

React applications have a single entry page created by the content build and a special nginx [config entry](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vetsgov/vars/react_routes.yml). Each of the React applications listed in that config are standalone single page apps, and for each of the urls listed in that section of the config, the nginx server routes anything that starts with that url to the static page at that url, instead of trying to find a content page for a client-side route with the app. See the example below for a step by step view of that process.

When that page is loaded and the JS bundle is downloaded and parsed, React Router sees the original route, removes the base url specified in the entry page from it, and routes to the page configured in the routes for the React app.

In summary, nginx routes a variety of different urls to the same static entry page, and React Router renders the correct component based on the route configuration client side.

#### Example

Here's an example using the claim status application:

1. User opens `va.gov/track-claims/your-claims/2344/detail`
2. Nginx serves `va.gov/track-claims/index.html`, because `/track-claims` is configured as a React application
3. In the browser, the JS bundle loads and React Router sees a url of `/track-claims/your-claims/2344/detail`
4. Since React Router has a base url of `/track-claims`, it runs its routing logic on `/your-claims/2344/detail`, and renders the appropriate component for that url.

One other thing to note is that links that use the `Link` component or the `router` object in the React app use the history api to change the url without reloading the page. React Router listens for these url changes and renders the right component for you. This is why you have to use `Link` and not a regular `a` element, which results in a page refresh for the url you're trying to link to.

### Development

Locally, we've configured the webpack dev server to do the same redirects as nginx, however they are duplicated in a couple places:

- [script/build.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/script/build.js)
- [src/platform/testing/e2e/test-server.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/test-server.js) (for e2e tests)

You will need to update these locations as well as the nginx config when creating a new React application.

