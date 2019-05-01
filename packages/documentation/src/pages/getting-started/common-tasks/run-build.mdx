---
title: Run and build VA.gov
tags: watch
---

# Run and build VA.gov

## Prerequisite

- Complete the [first](/getting-started) step in *Start up guide*.

## Locally run VA.gov

Start the watch task:
```bash
yarn watch
```
### Build
  - **Metalsmith** manages this build pipeline. At a high level, this process:
    1. retrieves and **builds** all of the **static pages** sourced from `vagov-content` or Drupal
    2. starts **Webpack**'s devevelopment server which
       - **builds** the **JavaScript** and **CSS** bundles, and
       - **serves** the **JavaScript** and **CSS** bundles and the **static content** built by Metalsmith at [http://localhost:3000](http://localhost:3000)

### Output
  - **Metalsmith** outputs **static pages** to`build/localhost`
  - **Webpack** development server has **no output**. **JavaScript** and **CSS** are kept in memory.

### Watch and rebuild
  - **Metalsmith** will rebuild **static pages** when changes are saved to **templates** or content in `vagov-content`
  - **Webpack** development server will rebuild when changes are saved to **JavaScript** or **SCSS**
  - Both updates require a browser refresh to see changes.
  - Changes to build process or configuration files are typically not picked up, and require a restart of the watch task to become active.

## Locally build and run for specific environment

_Note: most of the time, it's better to use the `watch` task to build the site locally since it is the most developer-friendly experience._

| Environment | Build Command | Output directory | Run Command |
| --- | --- | --- | ---|
| localhost | `yarn build` | `build/localhost` | `npx http-server -p 3001 build/localhost` |
| dev.va.gov | `yarn build --buildtype=vagovdev` | `build/vagovdev` | `npx http-server -p 3001 build/vagovdev` |
| staging.va.gov | `NODE_ENV=production yarn build --buildtype=vagovstaging` | `build/vagovstaging` | `npx http-server -p 3001 build/vagovstaging` |
| www.va.gov | `NODE_ENV=production yarn build --buildtype=vagovprod` | `build/vagovprod` | `npx http-server -p 3001 build/vagovprod` |

### Build commands
- **create** the **static pages** from the markdown content in the `vagov-content` repository and data queried from the Drupal API into their **output directory**
- **create** the **JavaScript** and **CSS** files with Webpack into `/generated` folder in their **output directory** with Webpack

_Production like builds are required for staging and production environments. **NODE_ENV=production** environment variable is required to be set when running these build commands_

### Run commands
- **start** an `http-server` that **serves** the **static pages** from the **output directory** at [http://localhost:3001](https://localhost:3001)

_Typically, the reason for building the site locally like this is to build it in production mode and check that it is behaving as you'd expect._

_**Deep-linking** to urls that are rendered by **React** apps on VA.gov **will not work** when you run the site this way, as that relies on some server-side routing that is handled in nginx (or the Webpack dev server when running the `watch` task)_

## Related source
- [Metalsmith build script](https://github.com/department-of-veterans-affairs/devops)
- [Webpack development server config](https://github.com/department-of-veterans-affairs/vets-website/blob/master/config/webpack.dev.config.js)