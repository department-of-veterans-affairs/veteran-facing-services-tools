module.exports = {
  transform: {
    '^.+\\.js$': '<rootDir>/packages/formation/scripts/babel-transformer.js',
  },
  testEnvironment: 'jsdom',
  rootDir: '../..',
  testMatch: [`<rootDir>/packages/formation/__tests__/**/*.test.js`],
};
