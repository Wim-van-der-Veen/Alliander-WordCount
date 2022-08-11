// Protractor configuration file, see link for more information
// https://github.com/angular/protractor

const config = {
  directConnect: true,
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome',
  },
  specs: ['e2e/**/*.spec.ts', 'e2e/**/*.spec.js'],
};

module.exports = { config };
