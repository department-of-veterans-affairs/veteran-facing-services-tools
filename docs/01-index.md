---
title: Vets.gov Design System
---

# Welcome to Jean Pants!

The design system (affectionately named “Jean Pants”) is a Fractal implementation for Vets.gov. It’s based on USWDS’ own system, and modified for the unique needs of Vets.gov.

Vets.gov has a collection of components that make up the website. These components have a visual styleguide associated with them, as well as reviewed and refined code that drives them, and best practices for when to use them. Jean Pants is a single source of documentation and truth for people looking to use the Vets.gov components.

Jean Pants’ purpose is to provide accepted guidance for:

- code implementations for existing components
- visual design for existing components
- use guidelines for existing components (when and when not to use a thing)
- implementation of new visual patterns and components

[See the complete documentation.](/docs/design-system-docs-v3)

<br>

# Quickstart

The components that make up Vets.gov's pattern library should all be documented in Jean Pants. You can access each component using the navigation to the left.

## Component Preview

Each component is rendered in Fractal in a small preview window, but it's also available as a full-screen preview without interference from the system's UI. Click the blue icon to the right of the component's name to see this view.

<img src="img/docs/preview-icon.png"/>

<br>
Each component has a few key pieces of information associated with it, located in the upper-right corner of the UI or in the tabs beneath the visual demo.

### The label

Jean Pants has four labels that can be applied to each component:

- **Ready**: Implement at will. This component is mature and well-developed.
- **WIP**: This component can be implemented on Vets.gov (it may already have been), but may still be in active development. Proceed with caution.
- **Prototype**: This is the "kitchen sink" label -- components with this label are experimental. Do not implement on Vets.gov without consulting with its author!
- **Deprecated**: Components with this label are on their way out; they're still in the system for historical purposes. Do not implement.

### Notes

Driven by a component's README file, notes can contain documentation, historical knowledge, or context for using this component.

### Props

Specific to React components, this tab contains all the component's properties and the information you need to use them.

### HTML

The HTML rendering of a given component. If you need to use a component in static content instead of in a React context, use this tab to get your code.

### View, Context, & Info

These three tabs are specific to Fractal (the software that underpins JP).

- The **View** is the Nunjucks template code for the component that renders it within Fractal.
- The **Context** is the contents of a component's config file, and shows the variables being passed into the Fractal render.
- The **Info** is each component's file information within the context of Fractal -- its handle, variants, path within the filesystem, and which templates reference it. This is helpful if you're modifying a component and need to know where to find the Fractal code!

## Installing JP locally

To install Jean Pants locally, please visit this [README](https://github.com/department-of-veterans-affairs/design-system/blob/master/README.md).

---

## To Do:

- incorporate Vets CSS
- Get the CSS working properly
- Incorporate documentation for Foundation grid
- Match styles:
  - ~~Tables~~
  - Fonts
  - Alerts
  - ~~Accordions~~
  - Header -- so broken.
  - Footer
  - Links
  - Buttons > Primary Alt (replace with green)
  - Buttons > Secondary (replace with outline)
  - Serif font: Bitter


- Add components that we _are_ using on Vets that are not on USWDS (what are these?)
  - Subway map
  - Logos
  - Grey callouts
  - Blue cards (deprecated?)
  - Need help? sidebar/footer
  - Iconography
  - Header > Get Help (VCL)
  - Homepage template (unsure whether to break this down into smaller components, since so many of them _only_ live on Home)
  - Navigation > Next/prev
  - Log in landing page (prompt to ID.me)
  - Alert/accordion hybrid (see Prescription Refills)
  - Data visualizations
  - Add Source Sans Pro Bold
  - Responsive table
  - Expandable alert box (https://www.vets.gov/health-care/health-conditions/mental-health/)

Edit this page's contents at `docs/01-index.hbs`
