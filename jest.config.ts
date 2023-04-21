module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.js'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16'
  },
  rootDir: '.',
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'src'],
};
