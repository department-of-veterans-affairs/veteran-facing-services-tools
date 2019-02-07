const crypto = require('crypto');
const GithubGraphQLApi = require('node-github-graphql');
const path = require('path');

const github = new GithubGraphQLApi({
  token: process.env.GITHUB_API_KEY,
});

exports.getDirectoryAndCreatePages = async (dirPath, createNode) => {
  const result = await github.query(`
    {
      repository(owner: "department-of-veterans-affairs", name:"vets.gov-team"){
        id
        name
        object (expression: "master:${dirPath}"){
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
          directory: dirPath,
          name: name.replace('.md', ''),
        }
      });
    });
};

exports.getPageAndCreatePage = async (dirPath, createNode) => {
  const result = await github.query(`
    {
      repository(owner: "department-of-veterans-affairs", name:"vets.gov-team"){
        id
        name
        object (expression: "master:${dirPath}"){
          oid
          ... on Blob {
            text
          }
        }
      }
    }
  `);

  const { oid, text } = result.data.repository.object;

  createNode({
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
      directory: dirPath,
      name: path.basename(dirPath, '.md'),
    }
  });
};
