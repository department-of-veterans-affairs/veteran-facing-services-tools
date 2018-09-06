Stable URL: https://department-of-veterans-affairs.github.io/design-system

## Getting started with Fractal

These instructions assume you're using Terminal, and that you're starting from scratch as far as a development environment is concerned. If you've already got dependencies installed, move on to **Install Fractal**.

> Please note: If you're on a VA laptop, and don't have Administrator access, you may not be able to install & run Formation locally. Please visit the [stable URL](https://department-of-veterans-affairs.github.io/design-system) to use the system as a reference.

**Start here:**

- You need Homebrew. To install Homebrew, [follow these instructions](https://www.howtogeek.com/211541/homebrew-for-os-x-easily-installs-desktop-apps-and-terminal-utilities/)
- You also need Yarn. To install Yarn, you'll use Homebrew. In Terminal, run `brew install yarn`

**Clone the design-system repo:**

If you're familiar with cloning repos from Github using Terminal, skip ahead to **Install Fractal**.

You can put the repo anywhere on your computer, but as a suggestion:
- In Terminal, navigate to your desktop: `cd ~/desktop`
- Clone the Github repo by running: `git clone https://github.com/department-of-veterans-affairs/design-system.git`
- Then: `cd design-system`

**Install Fractal**

Still in Terminal, run `yarn install`. This will download and install all the dependencies that Fractal needs to run on your local machine. It might take a minute to complete the process.

**Start up Fractal**

* Run `npm run start` and navigate to `localhost:3002` in your favorite browser. You should be all set!

If the `fractal watch` task fails, remove the `dist` directory and try running `npm run start` again.

## Previewing Changes

As you make changes to this design system, you'll likely want to see how your changes look in a consuming app, such as the `vets-website` app. [Check out these instructions on how to do so](./previewing-changes.md).

## Publishing Module to NPM

After you've tested and previewed your changes locally it's time to publish a new version of the package to NPM.

> Prerequisite: you must be [registered](https://docs.npmjs.com/getting-started/publishing-npm-packages) with NPM, be a member of the "department-of-veterans-affairs" organization, and have the appropriate organization role to publish an update to the module. Verify that you are logged in correctly by running `npm whoami`. If you are unable to publish an update, confirm you are a member of the "department-of-veterans-affairs" organization by going to your Profile page on [npmjs.com](https://www.npmjs.com).

### 1. Update the package version number

> Follow these [instructions](https://docs.npmjs.com/getting-started/publishing-npm-packages#how-to-update-the-version-number) for updating a package (summarized below):

Update package version number:

- `npm version patch` - for bug fixes and minor changes
- `npm version minor` - for new features that don't break current features
- `npm version major` - for backwards breaking changes

> If you are unsure of which to use, do a major version update.

* Update [NPM module readme](module-readme.md) with the new version number and any other relevant changes.

### 2. Submit your PR

Submit a PR that includes all of your code changes, including the version bump, and merge into `master` when approved.

### 3. Pull `master` and publish

* Switch to `master` and run `git pull`
* Run the prepublish script: `npm run pre-publish`. This builds the module's assets and copies everything to `dist/formation`
* Change directory to `dist/formation` and verify that the version number is correct in the `package.json` file.
* Publish changes to NPM: `npm publish`.

> As mentioned above, you must be registered with NPM and have the proper rights to publish the `@department-of-veterans-affairs/formation` package.

### 4. Update consuming apps

The last step is to update the `package.json` files of consuming apps to use the latest version of `@department-of-veterans-affairs/formation`. For example, if you are working with the `vets-website` project, open the `vets-website`'s `package.json` to update the version number of the `@department-of-veterans-affairs/formation` entry listed in the `dependencies` section. The version number should match what you just published to NPM.

## Deployment

Jenkins automatically publishes the content to GitHub Pages (the `gh-pages` branch on this repository) on pushes/merges to `master`.

To make changes:

- create a branch off `master`
- make changes
- create a PR
- ensure the PR is approved and Jenkins tests pass (GitHub will not let you merge without these two)
- merge to `master` and Jenkins will automatically deploy.

## Choosing a design system for Vets.gov

This has been migrated to [another file](research.md) in order to keep the README instructional.
