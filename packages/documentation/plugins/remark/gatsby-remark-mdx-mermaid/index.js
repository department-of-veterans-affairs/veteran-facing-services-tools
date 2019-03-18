/* eslint-disable */
const visit = require('unist-util-visit');
const remark = require('remark');
const mermaid = require('./remark-mermaid');
const vfile = require('to-vfile');

module.exports = ({ markdownAST, markdownNode }, { language = 'mermaid', theme = 'default' } = {}) => {
  visit(markdownAST, 'code', async (node) => {
    const lang = (node.lang || '').toLowerCase();
    const fileContent = vfile.readSync(markdownNode.fileAbsolutePath);

    if (lang === language) {
      await remark()
        .use(mermaid)
        .process(fileContent, (err, file) => {
          if (err) throw err;

          const mermaidSrcMatch = file.messages.filter(
            item => item.message.source === node.value
          )[0];

          node.type = 'html';
          node.value = `<img src="${mermaidSrcMatch.message.imgSrc}" />`;
        });
    }
  });
};
