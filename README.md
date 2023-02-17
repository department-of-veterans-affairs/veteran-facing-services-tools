# Veteran Facing Services tools

This repo contains front end code and documentation used by the Veteran facing services on VA.gov. It's a monorepo managed by Lerna, a tool for managing versioning and publishing for multiple modules located in a single repo.

There is [another repository for the documentation site](https://github.com/department-of-veterans-affairs/vets-design-system-documentation). The documentation site can be viewed at [design.va.gov](https://design.va.gov). See also: [contributing to the Design System](https://design.va.gov/about/developers/contributing).

## Packages

- [formation](./packages/formation)
  - Styles and assets for the VA design system
- [documentation](./packages/documentation)
  - Public [documentation website](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/) for Veteran Facing Service development on Veteran Service Platform. For local development following setup below, then see [README](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/README.md).

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

## Updating formation

The process for updating formation can be found at [https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/updating-formation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/updating-formation)

## Build

### Troubleshooting

#### `error "gatsby-mdx" threw an error while running the onCreateNode lifecycle`

##### Example error: `unknown: Expected corresponding JSX closing tag for <img>`

##### Context

The `documentation` package uses the [`gatsby-source-git` Gatsby plugin](https://www.gatsbyjs.org/packages/gatsby-source-git/) to [sync content from the `va.gov-team` repo](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/aaae519093b16b6b884e5133a42fee69754f5f74/packages/documentation/gatsby-config.js#L13-L22). 

Unfortunately, invalid HTML in `va.gov-team` Markdown files can break the build of the `veteran-facing-services-tools` repo. 

![invalid HTML in va.gov-team .md files can break the veteran-facing-services-tools build](https://user-images.githubusercontent.com/6130520/83894488-f9c86380-a716-11ea-8620-b17fa17542af.png)

##### Solution 

To fix the `Expected corresponding JSX closing tag for <img>` error, you need to do the following:

1. Find the invalid HTML in the `va.gov-team` repo
   1. Look for a string from the error message in the `va.gov-team` repo to find the offending Markdown file
   2. Look for HTML tags in that Markdown file
2. Fix the invalid HTML
   - For example, replace HTML images with markdown images
      ```
      - <img src="zenhub-license-request.png" alt="zenhub license request"></img>
      + ![zenhub license request](zenhub-license-request.png)
      ```
3. Rerun `veteran-facing-services-tools` build
   - Options
     - Rerun the Jenkins job
     ![restart jenkins build](https://user-images.githubusercontent.com/6130520/83898908-31d2a500-a71d-11ea-8236-be138fd7ef31.gif)
     - Whitespace push

##### Example `va.gov-team` PR: https://github.com/department-of-veterans-affairs/va.gov-team/pull/9869
