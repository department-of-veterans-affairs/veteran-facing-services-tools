# Veteran Facing Services tools

This repo contains front end code and documentation used by the Veteran facing services on VA.gov. It's a monorepo managed by Lerna, a tool for managing versioning and publishing for multiple modules located in a single repo.

There is [another repository for the documentation site](https://github.com/department-of-veterans-affairs/vets-design-system-documentation). The documentation site can be viewed at [design.va.gov](https://design.va.gov). See also: [contributing to Formation](https://design.va.gov/documentation/contributing-to-formation).



## Repositories

- formation
   - Styles and assets for the VA design system
- formation-react
   - React implementations of some of the patterns in formation.
- documentation
   - Documentation for how the set of Veteran facing services platform works

## Setup

- You need Homebrew. To install Homebrew, [follow these instructions](https://www.howtogeek.com/211541/homebrew-for-os-x-easily-installs-desktop-apps-and-terminal-utilities/)
- You also need Yarn. To install Yarn, you'll use Homebrew. In Terminal, run `brew install yarn`

**Clone the veteran-facing-services-tools repo:**

You can put the repo anywhere on your computer, but as a suggestion:
- In Terminal, navigate to your desktop: `cd ~/desktop`
- Clone the Github repo by running: `git clone https://github.com/department-of-veterans-affairs/veteran-facing-services-tools.git`
- Then: `cd veteran-facing-services-tools`
- Run `yarn` to install dependencies for each module

## Commands

Available npm scripts:

- `build`: Builds the code in each repo and outputs it to the appropriate locations for publishing
- `test`: Runs the tests in each repo
- `lint`: Runs the linter in each repo

## Updating formation and formation-react

The process for updating formation and formation-react can be found at [https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/updating-formation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/updating-formation)
