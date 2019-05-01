---
title: Workflow- Deploy
tags: build, rollback, manual deploy, automatic deploy, static page deploy, deployment
---

# Deploy

Code goes through several steps to get to production. This document describes this process. It should also be noted that this is the same flow for both content and code changes.

## Automated deployment schedule

| Application | Branch | Changes in by | Deployment Start | Release History |
| --- | --- | --- | --- | --- |
| vets-website | master | 2:00pm ET M-F | 3:00pm ET M-F| https://github.com/department-of-veterans-affairs/vets-website/releases |
| vets-api | master | 2:00pm ET M-F | 3:00pm ET M-F | https://github.com/department-of-veterans-affairs/vets-api/releases |

## Overview

Jenkins performs the following tasks after a pull request is merged into `master`

1. **Build** `master` branch to create an deployment artifact (.tar file)
1. **Deploy** to development and staging using deployment artifact
1. [Create a release](https://help.github.com/en/articles/creating-releases) in GitHub from master, tag artifacts of that commit SHA hash with release name
1. **Deploy** to production using deployment artifact according to automated deployment schedule

_A big assumption in this process is that the `master` should always be deployable. As such, the deployment to the staging environment is configured to happen automatically and can be used to see what something would look like in a production-like environment for any kind of manual testing/verification._

## Process details

- [Create a release](https://help.github.com/en/articles/creating-releases) in GitHub from master, tag artifacts of that commit SHA hash with release name

Every work day at the configured time a [Jenkins automerge job](http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-automerge/) sends a link to the #vetsgov-engineers Slack channel with a diff between the last release and the most recent changes in `master`. This commit reference is stored to ensure the diff and released version is deterministic.

After a time has elapsed ( currently set to 60m ) release is created at the reference from above.

- **Deploy** to production using deployment artifacts

From here, Jenkins can kickoff a production deployment. After the deployment occurs, the normal site monitoring infrastructure will be used to valide it is working. As this process is automatic any new features should have monitoring in place before, or as a part of their deployment

## Rollbacks

If a production deployment introduces issues that affect Service Level Objectives (SLOs) established for the project, the DevOps team may restore service to users by rolling back the deployment. This is accomplished by triggering a new deploy job in Jenkins using a previous release tag.

The **use of hotfixes is discouraged**, but may be useful in an emergency situation when `master` has significantly deviated from the release and a fix to the failed production release is critical. To create a hotfix, create a branch from the last stable release tag, make changes necessary (with review), create a new release tag following the correct naming scheme, and trigger a deploy in Jenkins with the release name as a parameter.

If SLOs are not affected and a fix is not critical, no rollback will be issued. Instead the fix should be applied through the standard development workflow.

## Manual deployment

Two out-of-cycle deploys are supported in Jenkins:
- partial deploy including only static page changes (`vagov-content` and `Drupal`)
- full deploy of VA.gov client app and static pages

### Before deploying

- Wait for **Jenkins** to **build the change** in `vets-website`
- Builds status can be viewed [here](http://jenkins.vetsgov-internal/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=master). _Requires SOCKS proxy. See [Accessing internal tools](/getting-started/internal-tools)_
- If this build fails, you may need to log into Jenkins and restart it

### Partial deploy- static page changes only

1. Start a deploy job
   - Log into Jenkins [here](http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/)
   - Click **Build with Parameters**
   - Set the **release_wait** option to **5** minutes
   - Check **use_latest_release** <-- _important_
   - Click **Build**
   - Verify commits in **deployment notification**

 _In Slack channel **#vetsgov-engineers**, Jenkins will include a link that shows the exact commits being released in the **deploy notification**._

2. **Verify** changes in **production** once the build finishes

### Full deploy of VA.gov client app

1. Verify that your changes are committed and that the changes since the last deploy are safe to deploy:
   - **Last deployment time**: You can check the build [history](http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/) for the time of the last deploy (usually daily at 2pm EST)
   - **Commit history**: [Look](https://github.com/department-of-veterans-affairs/vets-website/commits/master) for commits after the last deploy and verify they're production ready.

_You may need to contact the developers of those commits to verify._

2. Start a deploy job
   - Log into Jenkins [here](http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/)
   - Click **Build with Parameters**
   - Set the **release_wait** option to **5** minutes
   - Uncheck **use_latest_release** <-- _important_
   - Click **Build**
   - Verify commits in **deployment notification**

 _In Slack channel **#vetsgov-engineers**, Jenkins will include a link that shows the exact commits being released in the **deploy notification**._

2. **Verify** changes in **production** once the build finishes


