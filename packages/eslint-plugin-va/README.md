# eslint-plugin-va

ESLint rules and configs for [VA.gov](https://www.va.gov/) projects.

## Install & Usage

```
$ yarn add --dev eslint-plugin-va
```

.eslintrc.js (example using a config)

```js
module.exports = {
  extends: ['plugin:va/recommended'],
}
```

.eslintrc.js (example using rules)

```js
module.exports = {
  plugins: ['va'],
  rules: {
    'va/correct-apostrophe': 1,
  }
}
```
