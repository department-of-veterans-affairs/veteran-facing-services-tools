---
title: How to Add Pages from GitHub
---

## Adding External Pages from Github API

We are going to be using Github's GraphQL API to consume markdown pages from GitHub.
This document will detail the process of adding pages and how it all works.

### Why?

We wanted a way to get pre-existing documents from GitHub without having to
duplicate it.

### How to Add External pages

I have created a Gatsby plugin called **github-api-pages** located at **/plugins/github-api-pages**.
You can learn more about creating your own plugin at [creating-gatsby-plugins](/getting-started/common-tasks/creating-gatsby-plugins)
All code that is interfacing with the GitHubAPI is located at **/plugins/github-api-pages/-github-api**. We should try to
keep any code that is interfacing with the GitHubAPI in this file so we have one source of truth.

##### Limitations

Due to GitHub's rate limit we can only grab whole directories or single files at a time.
If we try to get the whole repo it will give us a rate limit error. This is also due to the size of our documentation repo.

##### Data you will need to make the API request

- Owner of the repo
- Repo name
- File directory you want to add or file fileName

Example:

```
department-of-veterans-affairs/vets.gov-team/Administrative/Accessing-Staging.md
|            owner           |     repo    |           file directory           |
```

***Note***: The file directory is not the url but the actual directory.
Here is an example of what the file directory should look like:
![github file directory](../../../images/github-file-directory.png)
---

**How to add files:**
After you have gathered the information (owner, repo, file directory) from github, now you can add the files
into Gatsby.

- Located in the **/plugins/github-api-pages/** you should see a **pages** directory. To add github file locations
  you need to either add it to a list or create your own list. Here are the steps of how to add your own list.

  - Add a JSON file named the main directory of your github directory. In this example we will be using **work-practices**.
    You can see how we are using the data we gathered earlier (owner, repo, file directory). All you need to do is add your
    file directory to the **directoryPaths** array. It can be a directory or just a file location.

    ```JSON
    // /plugins/github-api-pages/pages/work-practices.json

    {
      "owner": "department-of-veterans-affairs",
      "repo": "vets.gov-team",
      "directoryPaths": [
        "Work Practices/Accessibility and 508",
        "Work Practices/Accessibility and 508/meeting-notes/2017-06-05-meeting-508-office.md"
      ]
    }
    ```
  
  - After you have set up the JSON file, now you have to add it to the list of pages. This is
    done in the **/plugins/github-api-pages/pages/index.js** file.

    ```
    // /plugins/github-api-pages/pages/index.js

    exports.workPractices = require('./work-practices.json');
    ```

### How it Works

Initially we were trying to use pre-existing Gatsby plugins to do this but
couldn't find one that did what we exactly wanted it to do. The ones that came
closes to doing what we wanted ended up timing out due to the massive document repo
we have. So we ended up writing our own local plugin. Here is a list of steps we
took to make this work.

- Use Gatsby's `sourceNodes` lifecycle hook to get data.
- Use GitHub's GraphQL API to query page information from GitHub
- Create a Gatsby Node for the pages
- Use `gatsby-transformer-remark` to convert the markdown data into an html document
- Create pages using the createPages lifecycle hook.

#### Use Gatsby's `sourceNodes` lifecycle hook to get data.

First thing we have to do to get data from an API request into Gatsby is hook into the
`sourceNodes` lifecycle hook. This is were Gatsby allows you to do this.

```javascript
// /plugins/github-api-pages/gatsby-node.js

const path  = require('path');
const githubApi = require('./github-api');
const githubPages = require('./pages');

exports.sourceNodes = async ({
  actions,
  getNode,
  hasNodeChanged,
}) => {
  const { createNode } = actions

  await githubApi.getPagesAndCreateNodes(githubPages, createNode);
}
```

#### Use GitHub's GraphQL API to query page information from GitHub
Now we have to do a API request using the Github GraphQL API. You can use the [GitHub's GraphQL Explorer](https://developer.github.com/v4/explorer/) to generate your query. You'll have to explore GitHub's GraphQL API to understand more but here is a reference of how to get content data from GitHub.

[https://platform.github.community/t/query-repo-contents-with-graphql-api/1896](https://platform.github.community/t/query-repo-contents-with-graphql-api/1896)

Here is an example of what it looks like.

```javascript
// gatsby-node.js

const crypto = require('crypto');
const GithubGraphQLApi = require('node-github-graphql');
const path = require('path');

const github = new GithubGraphQLApi({
  token: process.env.GITHUB_API_KEY,
});

exports.sourceNodes = async ({
  boundActionCreators,
  getNode,
  hasNodeChanged,
}) => {
  const { createNode } = boundActionCreators

  const result = await github.query(`
    {
      repository(owner: "department-of-veterans-affairs" , name: "vets.gov-team"){
        id
        name
        object (expression: "master:Work Practices"){
          ... on Tree {
            entries {
              oid
              name
              object {
                ... on Tree {
                  entries {
                    oid
                    name
                    object {
                      ... on Blob {
                        text
                      }
                    }
                  }
                }
                ... on Blob {
                  text
                }
              }
            }
          }
        }
      }
    }
  `);
}
```

#### Create a Gatsby Node for the pages
After that we have to create a Node so that Gatsby can add it to the GraphQL data system.
There are notes in the below code which shows what is required and what is optional.
You may add custom properties that will be available in GraphQL.

```javascript
// gatsby-node.js

const crypto = require('crypto');
const GithubGraphQLApi = require('node-github-graphql');
const path = require('path');

const github = new GithubGraphQLApi({
  token: process.env.GITHUB_API_KEY,
});

exports.sourceNodes = async ({
  boundActionCreators,
  getNode,
  hasNodeChanged,
}) => {
  const { createNode } = boundActionCreators

  const result = await github.query(`
    {
      repository(owner: "department-of-veterans-affairs" , name: "vets.gov-team"){
        id
        name
        object (expression: "master:Work Practices"){
          ... on Tree {
            entries {
              oid
              name
              object {
                ... on Tree {
                  entries {
                    oid
                    name
                    object {
                      ... on Blob {
                        text
                      }
                    }
                  }
                }
                ... on Blob {
                  text
                }
              }
            }
          }
        }
      }
    }
  `);

  result
    .data
    .repository
    .object
    .entries.filter(item => item.name.endsWith('.md')).forEach(({ name, oid, object }) => {
      createNode({
        id: oid, <---- required
        parent: null, <---- required
        children: [], <---- required
        internal: { <---- required
          type: 'GithubAPI', <---- define type for look up in GraphQL
          contentDigest: crypto  <---- required
            .createHash('md5')
            .update(object.text)
            .digest('hex'),
          mediaType: 'text/markdown', <---- required
          content: object.text, <---- required
          directory: dir, <---- custom properties
          name: name.replace('.md', ''), <---- custom properties
        }
      });
    });
}
```

#### Use gatsby-transformer-remark to convert the markdown data into an html document

When we did a **createNode** we set the **mediaType: 'text/markdown'**. This will automatically convert the markdown using **gatsby-transformer-remark**.

### Create pages using the createPages lifecycle hook
After everything is set and we have all our pages in GraphQL. We can now create pages using our new data. Here is an example.

```javascript
// gatsby-node.js

result.data.allMarkDown.edges.forEach(async ({ node }) => {
  createPage({
    path: `/${node.fields.slug.toLowerCase().replace(/ /g, '-')}/`,
    component: path.resolve('./src/layouts/external-layout.js'),
    context: {
      id: node.id,
      name: node.fields.slug,
    },
  })
})
```
