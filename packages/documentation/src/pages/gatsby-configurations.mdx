---
title: Gatsby Configurations
---

## Gatsby Configurations

### Why we chose Gatsby
Gatsby was effectively chosen because it gave us the flexibility to create
documentation for React Components and also regular documentation for developers.
We wanted to be able to generate documentation that lived inside of the code and
also generate information on propTypes. We also wanted the flexibility of creating
markdown files for our normal documentation. Gatsby's plugin eco-system gave us a
lot of flexibilities to customize it how we want it.

### What is Gatsby
`"Gatsby is a blazing fast modern site generator for React."`

Gatsby utilizes React, Node, and GraphQL to generate a blazing fast static websites.
You can find more information at [https://www.gatsbyjs.org](https://www.gatsbyjs.org).

### Our Custom Configurations
There are a few things that we wanted that Gatsby did not have out of the box.
We wanted to be able to document all our React components and generate PropType
documentation. We also wanted to be able to transfer over all our markdown documentatation
from `vets.gov-team` repo. Using Gatsby plugin eco-system. Below are the plugins
and directions on how we inplemented them.

### Plugins
All the plugins we use can be found in `gatsby-configs.js`.

- [gatsby-mdx](https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx/?=gatsby-mdx)
> MDX is a new templating format which uses both JSX(React templating) and markdown.
  This gaves us the best of both worlds. Being able to write markdown to generate
  quick documentation and use React components within that page.

- [gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=gatsby-plugin-sass)
> Be able to use Sass/Scss in our project.

- [gatsby-transformer-react-docgen](https://www.gatsbyjs.org/packages/gatsby-transformer-react-docgen/?=gatsby-transformer-react-docgen)
> Helps extracting information from React components, and generate documentation
  from it. This is created by Facebook. This is what is used for
  [react-styleguidist](https://github.com/styleguidist/react-styleguidist).

- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)
> A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.

- https://www.gatsbyjs.org/packages/gatsby-remark-images/
> We are using this to add images to our .mdx pages. This allows us to add
  images to the folder and use it directly into our .mdx pages.

---
### How we setup `gatsby-mdx`
Plugin: [https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx](https://www.gatsbyjs.org/packages/@benjie/gatsby-mdx)
Guide: [https://gatsby-mdx.netlify.com/guides](https://gatsby-mdx.netlify.com/guides)

#### Installation

```shell
yarn add gatsby-mdx
```

```javascript
// gatsby-configs.js

module.exports = {
  plugins: [`gatsby-mdx`]
};
```

Once this is setup, you will be able to use both markdown and jsx on the page.
More information can be found on https://mdxjs.com/

#### Adding a Specific layout for your pages
To add a specific layout to be used for the default pages. You need to change
the plugin to an Object with options like so.

Change this code:
```
// gatsby-configs.js

module.exports = {
  plugins: [`gatsby-mdx`]
};
```

To this code:
```
// gatsby-configs.js

module.exports = {
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/layouts/SidebarLayout.jsx"),
        }
      }
    },
  ]
};
```

#### Adding Your Own Folders
By default gatsby-mdx will only look in the src/pages folder.
In this project we needed a special folder for all our components.
This folder lives in `formation-react/src/components`.
We need to add some configurations to be able to do this.


**Add the `gatsby-source-filesystem` plugin:**

This plugin can be added multiple times in the plugins object.
This plugin is used for sourcing data into your Gatsby application
from your local filesystem. Here we add a name and path to the
formation-react/src/components folder. This will now be added to our GraphQL
database so we can use it in our project.
```javascript
// gatsby-configs.js

plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `../formation-react/src/components`,
      name: 'components'
    }
  },
]
```

**Creating Pages from GraphQL data:**

Now that we have this data in GraphQL, we need to tell Gatsby to make some
pages out of them. To do this we need to add some code to the gatsby-node.js
file. This is were you create pages or customize things before it get built.

first we export createPages and then do a query to GraphQL. You can test it
out at http://localhost:8000/___graphql. This is an interactive interface
for GraphQL. Here we are getting all the mdx pages and then we are checking if the
document has a name property in the frontmatter. If it doesn't we won't create
a page for it.

```javascript
// gatsby-node.js

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    name
                  }
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  code {
                    scope
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allMdx.edges.forEach(async ({ node }) => {
          if (node.frontmatter.name) { <--- checking for frontmatter name property
            createPage({
              path: `/${node.parent.name.toLowerCase()}/`,
              component: path.resolve('./src/layouts/module-components.js'),
              context: {
                id: node.id,
                name: node.frontmatter.name,
              },
            })
          }
        })
      })
    )
  })
}
```

**Sample of Query Results from Above Query:**

Here is a sample of what the output would be for the Query above. You'll notice
that we get more then just the MDX files in the project. Not sure why this is
but that is what we get back when doing the Query.

```javascript
{
  "data": {
    "allMdx": {
      "edges": [
        {
          "node": {
            "id": "db665b4f-22a1-5485-8ef9-4f66f0da7e1b",
            "frontmatter": {
              "title": "AcceptTermsPrompt",
              "name": "AcceptTermsPrompt"
            },
            "parent": {
              "name": "AcceptTermsPrompt",
              "sourceInstanceName": "components"
            },
            "code": {
              "scope": ""
            }
          }
        },
        {
          "node": {
            "id": "fdaeaef8-da4f-53d8-a981-0ef2e4a9acf0",
            "frontmatter": {
              "title": "AdditionalInfo",
              "name": "AdditionalInfo"
            },
            "parent": {
              "name": "AdditionalInfo",
              "sourceInstanceName": "components"
            },
            "code": {
              "scope": ""
            }
          }
        },
        {
          "node": {
            "id": "17c10940-f231-560f-a391-e3a3173f1ed2",
            "frontmatter": {
              "title": "",
              "name": null
            },
            "parent": {},
            "code": {
              "scope": ""
            }
          }
        },
        {
          "node": {
            "id": "3121c909-74b5-5ccc-9884-bd72709d7885",
            "frontmatter": {
              "title": "",
              "name": null
            },
            "parent": {},
            "code": {
              "scope": ""
            }
          }
        },
        {
          "node": {
            "id": "6d019eeb-8db4-56ce-8bd7-bf14e618d096",
            "frontmatter": {
              "title": "How to Add Documents and Components",
              "name": null
            },
            "parent": {
              "name": "how-to",
              "sourceInstanceName": "pages"
            },
            "code": {
              "scope": ""
            }
          }
        },
        {
          "node": {
            "id": "2503f180-5b43-5470-9665-cff9f512d7cd",
            "frontmatter": {
              "title": "This is the index",
              "name": null
            },
            "parent": {
              "name": "index",
              "sourceInstanceName": "pages"
            },
            "code": {
              "scope": ""
            }
          }
        },
        {
          "node": {
            "id": "51b7ecd7-76e7-5ceb-ac57-d2a9c92494de",
            "frontmatter": {
              "title": "Internal Tools",
              "name": null
            },
            "parent": {
              "name": "internal-tools",
              "sourceInstanceName": "pages"
            },
            "code": {
              "scope": ""
            }
          }
        },
        {
          "node": {
            "id": "b683ccc8-0ddd-5b23-8b5c-0cc8e2889aa9",
            "frontmatter": {
              "title": "Notes on Writing MDX with Gatsby",
              "name": null
            },
            "parent": {
              "name": "new-component",
              "sourceInstanceName": "pages"
            },
            "code": {
              "scope": ""
            }
          }
        }
      ]
    }
  }
}
```

You will need to create a path for the pages. This is done with the path property

```javascript
createPage({
  path: `/${node.parent.name.toLowerCase()}/`, <------- Create path here
  component: path.resolve('./src/layouts/module-components.js'),
  context: {
    id: node.id,
    name: node.frontmatter.name,
  },
})
```
Set your component page layout

```javascript
createPage({
  path: `/${node.parent.name.toLowerCase()}/`,
  component: path.resolve('./src/layouts/module-components.js'), <------- default layout
  context: {
    id: node.id,
    name: node.frontmatter.name,
  },
})
```

In our createPage you will see a context property. This will be available on
your page for quering with GraphQL.

```javascript
createPage({
  path: `/${node.parent.name.toLowerCase()}/`,
  context: {
    id: node.id, <--- available on your page for GraphQL queries
    name: node.frontmatter.name, <--- available on your page for GraphQL queries
  },
})
```

Now that we have that setup we need to add the layout for our components pages.
If you go to `src/layouts/module-components.js` you can seee how we setu our pages
to be able to render MDX. Here is a sample of the JSX.

```
  <MDXProvider components={{ code: MyCodeComponent }}>
    <Layout>
      <div className="content">
        {children}
        <h2>{data.componentMetadata.displayName}</h2>
        <p>{data.componentMetadata.docblock}</p>
        <MDXRenderer tableOfContents={tableOfContents}>
          {data.mdx.code.body}
        </MDXRenderer>
        <h2 style={{ marginTop: '2rem' }}>Props:</h2>
        <PropsTable
          propMetaData={data.componentMetadata.childrenComponentProp}/>
      </div>
    </Layout>
  </MDXProvider>
```

### How do we automatically generate our propTypes
Since one of the big requirements for our component documents is PropType
definitions, we had to make sure we can populate the propTypes dynamically.
To do this we are going to a module called
[`react-docgen`](https://github.com/reactjs/react-docgen). This was created by
Facebook to handle documentation. What it does is parse component files and
generates data from your components into a json file. We will be using the
[`gatsby-transformer-react-docgen`](https://www.gatsbyjs.org/packages/gatsby-transformer-react-docgen/?=gatsby-transformer-react-docgen)
plugin to do this for us in gatsby. This will add the data into GraphQL so we
can query it in our pages.

This is what the query looks like in our layout page. The `childrenComponentProp`
is were we get our propType definitions.

```javascript
export const pageQuery = graphql`
  query($id: String!, $name: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      tableOfContents
    }
    componentMetadata(displayName: { eq: $name }) {
      id
      displayName
      docblock
      doclets
      childrenComponentProp {
        name
        docblock
        required
        parentType {
          name
        }
        type {
          value
        }
        defaultValue {
          value
          computed
        }
      }
      composes
    }
  }
`;
```

### Adding Live Code
Here is an example of how you add live editable code onto your page.
Note: This has not been fully implemented on our pages yet. This is something
we need to explore further if we really wants to have this feature.

```
import React, {Component} from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { MDXProvider } from '@mdx-js/tag'

const MyCodeComponent = ({ children, ...props }) => (
  <LiveProvider code={children}>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
);

export default class MyPageLayout extends Component {
  render() {
    return <MDXProvider components={{code: MyCodeComponent}}>
      <div>{this.props.children}</div>
    </MDXProvider>
  }
}
```

### Image plugin for MDX files
We are using a plugin to be able to use images in .mdx pages. This allows us
to access the images with relative paths.

[https://gatsby-mdx.netlify.com/guides/using-gatsby-remark-images](https://gatsby-mdx.netlify.com/guides/using-gatsby-remark-images)
