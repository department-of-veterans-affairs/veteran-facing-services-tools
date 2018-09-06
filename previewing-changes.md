# Making changes to design-system/formation and previewing them
As you work in the `design-system` repo, you'll want to preview how your changes look in an app that uses `formation`. To do this, we use [Yalc](https://github.com/whitecolor/yalc) to publish `formation` locally, rather than to NPM, and tell the consuming app to install that local version of `formation`. In these examples, for the sake of simplicity, we'll assume you are using `vets-website` as the consuming app. But instructions should be similar for any app using `formation`.

## Getting set up
First, install Yalc globally if you haven't already: `yarn global add yalc`.

While in the `design-system` app:
1. Run `npm run export-components` to build the module into the `dist/formation/` dir.
2. Run `npm run test-publish` to publish the module to your local `~/.yalc` dir.

Then in the consuming app (`vets-website`):
1. Run `yalc link @department-of-veterans-affairs/formation` to tell the `vets-website` project to use the local version of `formation` instead of the one installed via NPM (i.e. the `formation` dir in `node_modules` will now be a symlink to a dir in `~/.yalc`).
2. Fire up the website locally with `yarn watch`.

The locally running project, at `localhost:3001`, will now be using the locally published version of `formation`.

## The change-publish-preview loop
With each change you make to the `design-system`, you'll need to rebuild the module, republish the `formation` module to `~/.yalc`, and also tell the consuming app to use the new version.

While in the `design-system` app:
1. Make some changes to the code.
2. Build the module and publish it locally to `~/.yalc` by running `npm run export-components` followed by `npm run test-publish`.

Then in the consuming app:
1. Run `yalc update` to bring in the latest version of `formation`.
2. If you are using `vets-website` as your consuming app and it is already running, it should notice the changes and rebuild. If not, restart the app locally.
3. After rebuilding completes, your changes will now be visible locally at `localhost:3001`.

## Tearing down the local testing setup
When you are done testing `formation` locally, you'll want to get your consuming app back to normal; that is, tell it to stop using the version of `formation` published to `~/.yalc` and go back to using the version from NPM.

In the consuming app:
1. run `yalc remove @department-of-veterans-affairs/formation` to remove the link from the consuming app's `node_modules` dir to the local version of `formation`.
2. **NOTE:** There seems to be [an issue](https://github.com/whitecolor/yalc/issues/37) with Yalc not cleaning up after itself properly, so you'll have to also run `unlink node_modules/@department-of-veterans-affairs/formation`
3. Run `yarn install --check-files` to reinstall `formation` from NPM. (If you're curious about why you need to `--check-files` flag, [check out this issue](https://github.com/yarnpkg/yarn/issues/2240).)

Your consuming app should be back to normal!
