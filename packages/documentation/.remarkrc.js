module.exports = {
  settings: {
    bullet: '-',
    emphasis: '*',
    listItemIndent: 'one',
    rule: '-',
    ruleSpaces: false,
    strong: '*'
  },
  plugins: [
    'remark-frontmatter',
    'remark-mdx',
    'remark-preset-lint-recommended',
    ['remark-lint-list-item-indent', false]
  ]
};
