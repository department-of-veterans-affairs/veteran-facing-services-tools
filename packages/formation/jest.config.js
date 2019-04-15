module.exports = {
  transform: {
    "^.+\\.js$": "<rootDir>/packages/formation/scripts/babel-transformer.js",
  },
  rootDir: '../..',
  testMatch: [`<rootDir>/packages/formation/__tests__/**/*.test.js`],
};
