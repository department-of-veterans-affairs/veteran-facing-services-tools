---
title: Site build process
tags: metalsmith, drupal, cms, vagov-content
---

# Site build process

The main build process for VA.gov is controlled with Metalsmith, which is a simple, plugin-based static site generator. We take content from two sources, the vagov-content repo and the VA's Drupal CMS, create pages based on that data plus templates, run a series of other plugins, and then output the resulting html pages.


## Metalsmith build flow

```mermaid
graph TD
1[Metalsmith build pipeline] -->|Markdown from vagov-content| A
1 -->|Drupal content| K
A[Create page objects from each Markdown file] -->B[Convert Markdown to html]
B --> C[Generate sidebars for Markdown content]
C--> D[Add local static assets to pipeline]
D --> E[Apply layout templates to page data]
E -->F[Generate header/footer data]
F --> G[Create sitemap]
G --> H[Check for broken links]
H -->|Drupal pages| N[Download assets referenced in Drupal content from Drupal]
H -->|Markdown pages| I[Webpack build]
N --> I
I --> J[Write HTML/CSS/JS and other static files to build output folder]
K[Query Drupal via GraphQL or fetch from local cache] --> L[Create page objects from query results]
L --> D
```

There are other plugins than the ones listed in this diagram, but these are the most important ones. The process is very similar for Markdown and Drupal content, mostly differing in how the content is initially converted into page objects for Metalsmith to process.

## Metalsmith code organization

Metalsmith related code is located in `src/site`. Most of the code in that folder are temlates for Drupal content. The build process code is located in `src/site/stages` which contains Metalsmith plugins and GraphQL queries. 

## Drupal templates vs Markdown templates

Due to the differences in the shape of data in vagov-content vs Drupal, we have two different sets of templates, one for each source. There are some shared templates, but these are largely restricted to the header and footer templates. Drupal related templates end with `.drupal.liquid` and Markdown templates typically end with `.html` or `.liquid`.
