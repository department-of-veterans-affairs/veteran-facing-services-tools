---
title: Set up VA.gov locally
tags: local, watch, node, nvm, yarn, install
---

# Set up VA.gov locally

These instructions cover building and running VA.gov locally, including configuring any required dependencies.

## Node setup

1. Install `nvm`:

   **Mac:**

   [homebrew](http://brew.sh/) is recommended for installing `nvm` but other installation approaches are on [nvm Github page](https://github.com/creationix/nvm#installation-and-update).

   ```bash
   $ brew update && brew install nvm
   ```

   **Linux:**

   To get the latest version of NVM visit the official page. [NVM](https://github.com/nvm-sh/nvm)

   ```bash
   $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
   ```

   Follow the post-install instructions in the success message.

1. Install `node 10.15.3` (this also installs `npm`):

   ```bash
   $ nvm install 10.15.3
   ```

1. Configure `nvm` to use `node 10.15.3` by default:

   ```bash
   $ nvm alias default 10.15.3
   ```

1. Install `yarn 1.12.3` globally:

   ```bash
   $ npm i -g yarn@1.12.3
   ```

1. Verify correct versions of `node` and `yarn` are installed:

   ```bash
   $ node --version # 10.15.3
   $ yarn --version # 1.12.3
   ```

## Get the source code

6. Clone VA.gov git repos **as sibling directories**:

   ```bash
   $ git clone git@github.com:department-of-veterans-affairs/vets-website.git
   $ git clone git@github.com:department-of-veterans-affairs/vagov-content.git
   $ git clone git@github.com:department-of-veterans-affairs/vets-json-schema.git
   $ git clone git@github.com:department-of-veterans-affairs/veteran-facing-services-tools.git
   $ git clone git@github.com:department-of-veterans-affairs/vets-api.git
   $ git clone git@github.com:department-of-veterans-affairs/vets-api-mockdata.git
   ```

   **Front end repos**
   - `vets-website`: Core front end platform and application code
   - `vagov-content`: Markdown content used to generate static pages
   - `veteran-facing-services-tools`: Shared front end components (including non VA.gov users) and front end documentation site

   **Back end repos**
   - `vets-api`: Core Rails API server application code
   - `vets-api-mockdata`: Mock data used when running locally and on dev for the backend

   **Shared repos**
   - `vets-json-schema`: Shared JSON Schema definitions used by form applications and the APIs that they consume

## Start up the front end

7. Navigate to the `vets-website` repository, then install `vets-website` dependencies. See these [common commands](https://github.com/department-of-veterans-affairs/vets-website/blob/master/README.md) for more information.
   ```bash
   $ cd vets-website
   $ yarn install
   ```

8. Build `vets-website`. Make sure you [configured the SOCKS proxy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#configure-the-socks-proxy) to fetch content from Drupal.
   ```bash
   $ yarn build
   ```

   If you do not have access to the SOCKS proxy, you can alternately fetch the latest cached version of the content.
   ```bash
   $ yarn fetch-drupal-cache
   ```

9. Start the local development server.
   ```bash
   $ yarn watch
   ```

   The build is complete when the CLI says `Compiled successfully`.

10. Open [http://localhost:3001](http://localhost:3001) in a browser

## Backend and internal tools set up

Setting up the backend and internal tools allows local test account login and static content rendering.

- [**Backend (`vets-api`) set up** instructions](https://github.com/department-of-veterans-affairs/vets-api)

  The local `vets-website` is configured to point to the `vets-api` backend at `http://localhost:3000`. Any website functionality that depends on the backend (i.e. login, save-in-progress, form submission, feature toggles) will require a locally running instance of `vets-api`.

- [**Local test account login** instructions](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Administrative/Accessing-Staging.md)

- [Internal tools setup instructions](internal-tools)

  This proxy setup is required to access static content locally and to access to our reporting and monitoring tools. Running the `yarn watch` task with the SOCKS proxy active will automatically pull and cache the static content for `vets-website`.
