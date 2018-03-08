Stable URL: https://department-of-veterans-affairs.github.io/design-system

## Getting started with Fractal

1. Clone this repo
2. Follow the installation instructions [here](http://fractal.build/guide/installation)

## Running site locally

GitHub will automatically try to render any Markdown files using Jekyll. If you get any Jekyll build errors from Github (via email, usually) after pushing the site, you can run the site locally to address any errors and bypass looping through the above. Instructions here assume you already have Bundler installed (see [instructions](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) if you don't know what that is).

* Run `npm run start`

If the `fractal watch` task fails, remove the `dist` directory and try running `npm run start` again.

## Deploying to GitHub Pages

Deployment steps assume you've followed the getting started section at the top of this document.

* ensure changes are pushed and merged to master
* Run `git checkout master`
* Run `fractal build`
* Commit any changes (build dir is checked into git)
* Run `git subtree push --prefix build origin gh-pages`


## Choosing a design system for Vets.gov
This has been migrated to [another file](research.md) in order to keep the README instructional.
