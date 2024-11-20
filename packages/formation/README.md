# :no_entry: DEPRECATED

The Formation package is no longer supported. Please use [@department-of-veterans-affairs/css-library](https://www.npmjs.com/package/@department-of-veterans-affairs/css-library) or contact the VA Design System team for more info.

---

This module contains styles and assets for the VA design system.

## Quick start

`npm install @department-of-veterans-affairs/formation`

Our components are styled with sass, which is exported in the `sass` directory in the module. There's a `core.scss` file that includes uswds styles and our changes on top of it. Many of the components also have individual scss files in `sass/modules`, which you should make sure to import when using a particular component.

Also included is a full build of all the styles, including component styles, at `dist/formation.min.css`. This file is quite large and should not be used in sites were performance is a high priority.

## Assets

Image and font assets used by Formation are included in the `dist` folder.
