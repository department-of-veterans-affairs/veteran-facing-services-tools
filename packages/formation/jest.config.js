module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  rootDir: '../..',
  testMatch: [`<rootDir>/packages/formation/__tests__/**/*.test.js`],
};
