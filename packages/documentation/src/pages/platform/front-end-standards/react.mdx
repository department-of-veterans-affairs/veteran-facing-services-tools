---
title: Frontend Best Practices
---

# vets.gov Front End Best Practices (WIP)

**Last Updated:** April 28, 2017

## Overview
This is an initial pass at the best practices followed in vets.gov front-end development.

### Objective
To promote a consistent approach to vets.gov front-end development by outlining an evolving set of best practices.

### Background
Over the last year, we have launched a number of different single-page React/Redux apps on vets.gov, in addition to building digital forms using a [form-builder library](https://github.com/mozilla-services/react-jsonschema-form) that reuses the same code to run multiple React apps for different forms. This document is an attempt to begin collecting best practices for React/Redux development that the team has and continues to lean toward when architecting and developing front-end applications.

### High Order Guidelines

This is a placeholder for any high-level paradigms we settle on. For now, it's merely a laundry list of debatable topics:
  - *PropTypes*: we try to define PropTypes to make it easier for newcomers to understand what can be passed to a component.
  - What to put into a selector vs. reducer vs. action
  - How we map backend data to the state?

### React/Redux Guidelines

#### Components vs. containers

A common React/Redux application architecture is to divide your React components into two types: regular components and container components. These are also sometimes referred to as a dumb and smart components. Container components connect to the Redux store using the `react-redux` library's `connect` function and map a specific part of the state object to the props of a React component. Regular components are just plain React components; they take in props and they can have internal state (though we generally avoid this; see below).

In general, we try to use regular components whenever possible and only a few container components. The reason for this is because tying a component to the Redux store couples it to a particular slice of the state of your application, as well as coupling it to a particular way of organizing your state. So refactoring a lot of container components can be difficult. Debugging can also be difficult with a lot of container components, because they interrupt the usual flow of data down through components. Instead of all data being passed down via props from a single component at the top of the component tree, intermediate components might pull in different parts of the Redux state and pass down that data as props to other components, creating a mix of data combined from different connections to the Redux state.

There are benefits to using container components, though. It can be painful to pass lots of props all the way down to the leaf components in a component tree and container components allow you to "reset" and grab specific data from the store without all that wiring. They can also improve performance, because passing props down from the root of the component tree means that all intermediate components will re-render whenever data changes. Container components can send data down to their children without all the parents of the container component re-rendering.

On vets.gov, we normally use a single container component per page (or independent widget, like login), and only use other container components if there's a compelling reason for doing so. Our apps have a `containers` folder and a `components` folder that we divide components between.

#### Using setState in React components

We also generally avoid `setState` inside regular components. This isn't because `setState` is bad, necessarily, but because it can be hard to track down data changes due to `setState` when you're expecting all changes to go through the single Redux store. It can also be tricky to keep that state in sync with the data from the Redux store passed in as props. So, when we do use `setState`, it's typically for ephemeral UI state, or state that would be more difficult to follow if it were put in the store and passed down through props.

Keep in mind that these are general conventions, not iron-clad rules, and we should revist them as we gain more experience using React and Redux.

### Existing Guides and Tools

We have a set of [ESLint rules](https://github.com/department-of-veterans-affairs/vets-website/blob/master/.eslintrc) that extend the [AirBnB style guide](https://github.com/airbnb/javascript) and also use the [Prettier](https://prettier.io) [ESLint rules](https://prettier.io/docs/en/eslint.html). There is a pre-commit hook that prevents committing code that fails the ESLint rules. Developers should all be using ESLint plugins in their dev environments to catch lint-able things. In lieu of using an ESLint editor plugin, developers can run the `lint:js:fix` or `lint:js:changed:fix` NPM scripts to fix all errors that ESLint can auto-fix.

_TODO: list any notable exceptions here._

### Project Structure and Code Location

The structure of our React app's is described in [How to Start a New ReactJS Project](https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/StartANewReactApp.md)

A number (and soon all) of our forms use the [`react-json-schemaform`](https://github.com/mozilla-services/react-jsonschema-form) (or rjsf) library. To learn more about those, see [schemaform walkthrough](https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/walkthrough.md) and this [form config cookbook](https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/form-config.md).

### Related Documents

  * [Using Redux](/Work%20Practices/Engineering/DocumentedDecisions/Redux.md)
  * [How to Start a New ReactJS Project](https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/StartANewReactApp.md)
  * [Schemaform walkthrough](https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/walkthrough.md)
  * [Form config cookbook](https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/schemaform/form-config.md)

  Existing posts/articles on best practices that we may or may not agree with but can pull topics from:
    * [React best practices](https://medium.com/@nesbtesh/react-best-practices-a76fd0fbef21)
    * [Redux best practices](https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e)
    * [Long list of links about react architecture and best practices](https://github.com/markerikson/react-redux-links/blob/master/react-architecture.md)
    * [Redux isn't slow, you're just doing it wrong - An optimization guide](https://reactrocket.com/post/react-redux-optimization/)

### Revision History

Date | Revisions Made | Author | Reviewed By
-----|----------------|--------|--------------
March 1, 2017 | Skeleton document based on outline of [Node.js Best Practices](Javascript/Node.js.md)
April 28, 2017 | Pulled in content from discussion in [#659](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/659)
May 17, 2017 | Added information about React component types and `setState` usage
