---
title: Creating React widgets on static content pages
tags: react, widget, content, dynamic
---

# Creating a new React widget

Note: Check out the [Adding a new feature](/getting-started/common-tasks/new-feature) doc to make sure you're trying to add the right type of feature to VA.gov.

## Adding a new widget

All the static pages use the `static-pages` entry bundle, so any JS code included from that file will be on all static pages. In order to add a widget, you'll want to create a function that loads your desired React components (or plain JS) asynchronously, and mounts to an element on the page with your widget id.

1. Ensure your page includes the `static-pages` bundle:

```markdown
title: My awesome widget page
layout: page.html
---
```

**Note:** The `entryname` must be absent from the markdown file's front matter or the resulting HTML file will include `${entryname}.js` instead of `static-pages.js`.

2. Add a mount point element in the static content page your widget will live on:

```html
<div data-widget-type="my-new-widget" id="someId"></div>
```

3. Add a start up function to: `src/applications/static-pages/static-pages-entry.js`:

```js
...
createMyWidget(store, widgetTypes.MY_NEW_WIDGET);
...
```

You should also add a constant for your widget type in `src/applications/static-pages/widgetTypes.js`:

```js
export default {
  ...
  MY_NEW_WIDGET: 'my-new-widget',
  ...
}
```

4. Write your create widget function:

```js
export default async function createMyWidget(store, widgetType) {
  const widget = document.querySelector(`[data-widget-type="${widgetType}"]`);

  if (widget) {
    // Load widget if there's a mount point for it
    const {
      default: MyNewWidget,
    } = await import(/* webpackChunkName: "my-new-widget" */ '../../platform/site-wide/my-new-widget');

    // Do whatever you need to do to start up your widget
    ReactDOM.render(<MyNewWidget>, widget);
  }
}
```

Note that we don't import the widget code unless there's a mount point in the DOM. This function will run on every page, so we want to make sure we only download the bulk of the widget code when we're actually going to use it.

## Guidelines for using React on a static page

We should be careful to not create a bad user experience when using React on static pages. Here are some guidelines you should follow:

1. JS and React take time to download, parse, and render. Make sure you are providing the appropriate feedback to users while that is happening, with a spinner or another method from the UX team.
2. Make sure the page is still usable if your React code fails to work. This can mean it fails to download, an error occurs, or just handling the different login states a user can be in.
3. Be aware of how much weight you're adding to the static-pages bundle and code-split/lazy load when it makes sense.

## Common widget code

There's a simple static page widget feature that you can use to help with the first two points above. The code is in `src/applications/static-pages/static-page-widgets.js`. Using this will inline some JS that can handle displaying a loading spinner and showing an error message if something goes wrong before the React code can take over rendering. Several pension pages use this functionality (`pages/pension/index.md`, `pages/pension/apply.md` in `vagov-content`). It's controlled by defining a widgets list in the front matter for the static content page you're on. The options are:

```
- widgets
  - root: someId 
    timeout: 20
    showSpinnerUnauthed: false
    slowLoadingThreshold: 6
    loadingMessage: Loading
    slowMessage: Sorry, this is taking longer than expected.
    errorMessage: Sorry, something went wrong.
```

- root: The id of the div where the React component will mount.
- timeout: The amount of time in seconds before the error message is shown.
- showSpinnerUnauthed: By default, a spinner is shown only if a user has a session token. This will override that and show it always.
- slowLoadingThreshold: The amount of time in seconds before the slow loading message is shown. This is skipped if the threshold is greater than the overall timeout. Defaulted to 6 seconds.
- slowMessage: Message shown when the slowThreshold is passed. Defaulted to message above.
- loadingMessage: Message shown while the JS code is loading. This should probably match any loading message in your React code.
- errorMessage: Message shown when the JS code fails or times out.
