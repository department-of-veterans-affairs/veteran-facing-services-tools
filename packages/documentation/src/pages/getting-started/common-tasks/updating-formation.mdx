---
title: Updating Formation and Formation React
tags: formation, formation-react, update, release, publish, npm
---

## Making updates to formation
You can find a detailed guide on contributing to formation at [https://dev-design.va.gov/documentation/contributing-to-formation](https://dev-design.va.gov/documentation/contributing-to-formation)

## Making updates to formation-react
1. Components should be created and tested in vets-website first before being moved over to formation-react
2. Transfer component to formation-react
3. Test the formation-react version of the component in vets-website before publishing. [Check out these instructions on how to do so](/getting-started/common-tasks/previewing-changes).
4. Write component tests
5. [Create your react component documentation](/documentation-guide/doc-page)

## Publishing Module to NPM

After you've tested and previewed your changes locally it's time to publish a new version of the package to NPM.

> Prerequisite: you must be [registered](https://docs.npmjs.com/getting-started/publishing-npm-packages) with NPM, be a member of the "department-of-veterans-affairs" organization, and have the appropriate organization role to publish an update to the module. Verify that you are logged in correctly by running `npm whoami`. If you are unable to publish an update, confirm you are a member of the "department-of-veterans-affairs" organization by going to your Profile page on [npmjs.com](https://www.npmjs.com).

### 1. Submit your PR

Submit a PR that includes all of your code changes. This should include the bump in versions you need, which you can change directly in the `package.json` files for the modules that are changing. Modules like `formation-react` depend on `formation` via a peer dependency, so you may need to update that as well. We try to keep the peer dependency loose and only update it for breaking changes.

You'll need to choose what type of version update to make:

- `patch` - for bug fixes and minor changes
- `minor` - for new features that don't break current features or require changes in consuming applications
- `major` - for backwards breaking changes

> If you are unsure of what to pick, do a major version update on modules that are changing.

### 2. Merge your PR to master

Once your changes are approved, squash merge them to master. Also, if your change is a breaking change, please prefix your commit message with `BREAKING CHANGE: `. Also keep in mind that your commit messages will be in a changelog that people use to figure out what has changed between releases, so make sure it accurately describes your changes.

### 3. Build and publish

* Checkout the master branch
* Run `yarn build`
* For each module you need to publish, switch to its folder in `packages/` and run `npm publish`.

### 4. Create a release
You will need a github [personal access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).
This should be set as **GITHUB_API_KEY** in your environment variable.
- Navigate to the package folder
- Run the release script
    ```
    $ yarn release
    ```
- Once the script has succeeded, go to the link provided in the console
- Edit the release and add any relevant information.

### 5. Update consuming apps

The last step is to update the `package.json` files of consuming apps to use the latest version of `@department-of-veterans-affairs/formation` (or `formation-react`). For example, if you are working with the `vets-website` project, open the `vets-website`'s `package.json` to update the version number of the `@department-of-veterans-affairs/formation` entry listed in the `dependencies` section. The version number should match what you just published to NPM.
