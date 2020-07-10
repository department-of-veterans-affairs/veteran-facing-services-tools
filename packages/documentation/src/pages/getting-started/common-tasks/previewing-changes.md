---
title: Making and Previewing Changes to formation-react
tags: formation-react, update, preview
---

## Making changes to formation-react and previewing them
As you work on `formation-react`, you'll want to preview how your changes look in an app that uses `formation-react`. To do this, we use [Yalc](https://github.com/whitecolor/yalc) to publish the modules locally, rather than to NPM, and tell the consuming app to install that local version. In these examples, for the sake of simplicity, we'll assume you are using `vets-website` as the consuming app and are trying to preview changes in `formation-react`. But instructions should be similar for any app using `formation-react`.

### Getting set up
First, install Yalc globally if you haven't already: `yarn global add yalc`.

While in the `veteran-facing-services-tools` repo:

1. `cd` to `packages/formation-react`
2. Run `yarn build` to build the module into the `packages/formation-react` dir.
3. Run `yalc publish` to publish the module to your local `~/.yalc` dir.

Then in the consuming app (`vets-website`):

1. Run `yalc link @department-of-veterans-affairs/formation-react` to tell the `vets-website` project to use the local version of `formation-react` instead of the one installed via NPM (i.e. the `formation-react` dir in `node_modules` will now be a symlink to a dir in `~/.yalc`).
2. Fire up the website locally with `yarn watch`.

The locally running project, at `localhost:3001`, will now be using the locally published version of `formation-react`.

### The change-publish-preview loop
With each change you make to `formation-react`, you'll need to rebuild the module, republish the `formation-react` module to `~/.yalc`, and also tell the consuming app to use the new version.

While in the `packages/formation-react` directory:

1. Make some changes to the code.
2. Build the module and publish it locally to `~/.yalc` by running `npm run build` and then running `yalc publish`.

Then in the consuming app:

1. Run `yalc update` to bring in the latest version of `formation-react`.
2. If you are using `vets-website` as your consuming app and it is already running, it should notice the changes and rebuild. If not, restart the app locally.
3. After rebuilding completes, your changes will now be visible locally at `localhost:3001`.

### Tearing down the local testing setup
When you are done testing your module locally, you'll want to get your consuming app back to normal; that is, tell it to stop using the version of `formation-react` published to `~/.yalc` and go back to using the version from NPM.

In the consuming app:

1. run `yalc remove @department-of-veterans-affairs/formation-react` to remove the link from the consuming app's `node_modules` dir to the local version of `formation-react`.
2. **NOTE:** There seems to be [an issue](https://github.com/whitecolor/yalc/issues/37) with Yalc not cleaning up after itself properly, so you'll have to also run `unlink node_modules/@department-of-veterans-affairs/formation-react`
3. Run `yarn install --check-files` to reinstall `formation-react` from NPM. (If you're curious about why you need the `--check-files` flag, [check out this issue](https://github.com/yarnpkg/yarn/issues/2240).)

Your consuming app should be back to normal!
