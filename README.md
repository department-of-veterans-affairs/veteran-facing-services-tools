# Veteran Facing Services tools

This repo contains front end code and documentation used by the Veteran facing services on VA.gov. It's a monorepo managed by Lerna, a tool for managing versioning and publishing for multiple modules located in a single repo.

If you're looking for design system documentation:

Legacy URL: https://department-of-veterans-affairs.github.io/design-system

Work in progress URL: https://department-of-veterans-affairs.github.io/vets-design-system-documentation/

## Repositories

- formation
   - Styles and assets for the VA design system
- formation-react
   - React implementations of some of the patterns in formation.
- documentation
   - Documentation for how the set of Veteran facing services platform works

**Start here:**

- You need Homebrew. To install Homebrew, [follow these instructions](https://www.howtogeek.com/211541/homebrew-for-os-x-easily-installs-desktop-apps-and-terminal-utilities/)
- You also need Yarn. To install Yarn, you'll use Homebrew. In Terminal, run `brew install yarn`

**Clone the veteran-facing-services-tools repo:**

You can put the repo anywhere on your computer, but as a suggestion:
- In Terminal, navigate to your desktop: `cd ~/desktop`
- Clone the Github repo by running: `git clone https://github.com/department-of-veterans-affairs/veteran-facing-services-tools.git`
- Then: `cd veteran-facing-services-tools`
- Run `yarn` and `yarn bootstrap` to install dependencies for each module

## Commands

Available npm scripts:

- `build`: Builds the code in each repo and outputs it to the appropriate locations for publishing
- `test`: Runs the tests in each repo
- `lint`: Runs the linter in each repo

## Previewing Changes

As you make changes to these modules, you'll likely want to see how your changes look in a consuming app, such as the `vets-website` app. [Check out these instructions on how to do so](./previewing-changes.md).

## Publishing Module to NPM

After you've tested and previewed your changes locally it's time to publish a new version of the package to NPM.

> Prerequisite: you must be [registered](https://docs.npmjs.com/getting-started/publishing-npm-packages) with NPM, be a member of the "department-of-veterans-affairs" organization, and have the appropriate organization role to publish an update to the module. Verify that you are logged in correctly by running `npm whoami`. If you are unable to publish an update, confirm you are a member of the "department-of-veterans-affairs" organization by going to your Profile page on [npmjs.com](https://www.npmjs.com).

### 1. Submit your PR

Submit a PR that includes all of your code changes. This should include the bump in versions you need, which you can update easily by running `npm run version`. Modules like `formation-react` depend on `formation` via a peer dependency, so you may need to update that as well. We try to keep the peer dependency loose and only update it for breaking changes.

You'll be asked to choose what type of version update to make:

- `patch` - for bug fixes and minor changes
- `minor` - for new features that don't break current features or require changes in consuming applications
- `major` - for backwards breaking changes

You'll also be asked with packages you want to update. Our modules are versioned independently, so you'll need to update their verisons depending on where you made changes.

> If you are unsure of what to pick, do a major version update on both modules.

### 2. Merge your PR to master

Once your changes are approved, squash merge them to master. Also, if your change is a breaking change, please prefix your commit message with `BREAKING CHANGE: `. Also keep in mind that your commit messages will be in a changelog that people use to figure out what has changed between releases, so make sure it accurately describes your changes.

### 3. Build and publish

* Run `npm run build`
* For each module you need to publish, switch to its folder in `packages/` and run `npm publish`.

### 4. Update consuming apps

The last step is to update the `package.json` files of consuming apps to use the latest version of `@department-of-veterans-affairs/formation` (or `formation-react`). For example, if you are working with the `vets-website` project, open the `vets-website`'s `package.json` to update the version number of the `@department-of-veterans-affairs/formation` entry listed in the `dependencies` section. The version number should match what you just published to NPM.
