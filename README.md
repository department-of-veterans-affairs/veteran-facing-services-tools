Stable URL: https://department-of-veterans-affairs.github.io/design-system

## Getting started with Fractal

These instructions assume you're using Terminal, and that you're starting from scratch as far as a development environment is concerned. If you've already got dependencies installed, move on to **Install Fractal**.

> Please note: If you're on a VA laptop, and don't have Administrator access, you may not be able to install & run Jean Pants locally. Please visit the [stable URL](https://department-of-veterans-affairs.github.io/design-system) to use the system as a reference.

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

Run `yarn start`, and navigate to `localhost:3000` in your favorite browser. You should be all set!

## Deploying to GitHub Pages

Deployment steps assume you've followed the getting started section at the top of this document.

* ensure changes are pushed and merged to master
* Run `git checkout master`
* Run `fractal build`
* Commit any changes (build dir is checked into git)
* Run `git subtree push --prefix build origin gh-pages`


## Choosing a design system for Vets.gov
This has been migrated to [another file](research.md) in order to keep the README instructional.
