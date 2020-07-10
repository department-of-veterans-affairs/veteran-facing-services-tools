---
title: Build and deploy Jenkins flows
tags: Jenkins, drupal, metalsmith, cache, master
---

# Build and deploy process flows

Here you'll find flow diagrames for the different types of build and deploy flows we have for VA.gov. Those different flows are:

- [Standard master/PR build](#standard-masterpr-build)
- [Content only build and deploy](#content-only-build-and-deploy)
- [Daily deploy](#daily-deploy)

## Standard master/PR build

This is the typical Jenkins build for any vets-website branch. There is some logic that is different between master and other branches:

```mermaid
graph TD
1(Build starts)
1 --> 2[Check for linter failures]
1 --> 3[Check for security issues]
1 --> 4[Run unit tests]
2 --> 5(Build site and applications)
3 --> 5
4 --> 5
5 --> 6[vagovdev build]
5 --> 7[vagovstaging build]
5 --> 8[vagovprod build]
6 --> 9(Integration testing)
7 --> 9
8 --> 9
9 --> 10[Accessibility tests]
9 --> 11[End to end tests]
11 --> 12[Create archives for each build and upload to S3]
10 --> 12
12 --> 13{On master branch?}
13 -->|Yes| 14[Cache Drupal content and files to S3]
14 --> 15[Deploy builds to dev and staging]
13 -->|No| 16(Done)
15 -->16
```

## Content only deploy

When content is changed in Drupal, sometimes we need to publish it immediately on a va.gov site. There are two separate processes for this, one for staging/dev and another for production.

### Staging/dev content deploy

```mermaid
graph TD
1(Build started for dev or staging)
1 --> 2[Fetch build for latest master commit from S3]
2 --> 3[Build static pages with new content]
3 --> 4[Skip Webpack build, use assets from most recent build for applications]
4 --> 5[Create archive for build and upload to S3]
5 --> 6[Cache Drupal content and files to S3]
6 --> 7[Deploy build to dev or staging]
```

### Production content deploy

```mermaid
graph TD
1(Build started)
1 --> 2[Fetch last released prod build from GitHub releases list]
2 --> 3[Build static pages with new content]
3 --> 4[Skip Webpack build, use assets last prod release for applications]
4 --> 5[Create archive for build and upload to S3]
5 --> 6[Deploy build to prod]
6 --> 7[Deploy content preview servers]
```

## Daily deploy

```mermaid
graph TD
1(Deploy started)
1 --> 2[Fetch build for latest master commit from S3]
2 --> 3[Build static pages with new content]
3 --> 4[Skip Webpack build, use assets from most recent master build for applications]
4 --> 5[Create archive for build and upload to S3]
5 --> 6[Create GitHub release]
6 --> 7[Wait for 60 minutes]
7 --> 8[Deploy build to prod]
8 --> 9[Deploy content preview servers]
```
