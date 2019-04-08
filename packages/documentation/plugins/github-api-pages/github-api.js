const crypto = require('crypto');
const GithubGraphQLApi = require('node-github-graphql');
const path = require('path');

const github = new GithubGraphQLApi({
  token: process.env.GITHUB_API_KEY,
});

const getDirectoryAndCreateNode = async ({ owner, repo, dir }, createNode) => {
  const result = await github.query(`
    {
      repository(owner: "${owner}" , name: "${repo}"){
        id
        name
        object (expression: "master:${dir}"){
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

  if (result.data.repository === null) {
    throw new Error(
      'API key does not have proper permissions to repo repository data',
    );
  }

  result.data.repository.object.entries
    .filter(item => item.name.endsWith('.md'))
    .forEach(({ name, oid, object }) => {
      createNode({
        id: oid,
        parent: null,
        children: [],
        internal: {
          type: 'GithubAPI',
          contentDigest: crypto
            .createHash('md5')
            .update(object.text)
            .digest('hex'),
          mediaType: 'text/markdown',
          content: object.text,
          directory: path.dirname(dir),
          name: name.replace('.md', ''),
        },
      });
    });
};

const getPageAndCreateNode = async ({ owner, repo, dir }, createNode) => {
  const result = await github.query(`
    {
      repository(owner: "${owner}", name:"${repo}"){
        id
        name
        object (expression: "master:${dir}"){
          oid
          ... on Blob {
            text
          }
        }
      }
    }
  `);

  const { oid, text } = result.data.repository.object;

  await createNode({
    id: oid,
    parent: null,
    children: [],
    internal: {
      type: 'GithubAPI',
      contentDigest: crypto
        .createHash('md5')
        .update(text)
        .digest('hex'),
      mediaType: 'text/markdown',
      content: text,
      directory: path.dirname(dir),
      name: path.basename(dir, '.md'),
    },
  });
};

const getPagesAndCreateNodes = async (pages, createNode) =>
  Promise.all(
    pages.directoryPaths.map(async dir => {
      if (path.extname(dir)) {
        return getPageAndCreateNode(
          {
            ...pages,
            dir,
          },
          createNode,
        );
      }

      return getDirectoryAndCreateNode(
        {
          ...pages,
          dir,
        },
        createNode,
      );
    }),
  );

module.exports = {
  getPageAndCreateNode,
  getDirectoryAndCreateNode,
  getPagesAndCreateNodes,
};
