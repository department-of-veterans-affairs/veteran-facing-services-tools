# @department-of-veterans-affairs/eslint-plugin

ESLint rules and configs for [VA.gov](https://www.va.gov/) projects.

## Install & Usage

```
$ yarn add --dev @department-of-veterans-affairs/eslint-plugin
```

**.eslintrc.js** (example using a config)

```js
module.exports = {
  extends: ['plugin:@department-of-veterans-affairs/recommended'],
}
```

**.eslintrc.js** (example using rules)

```js
module.exports = {
  plugins: ['@department-of-veterans-affairs'],
  rules: {
    '@department-of-veterans-affairs/correct-apostrophe': 1,
  }
}
```
