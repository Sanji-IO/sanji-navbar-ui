'use strict';

require('babel-core/register')({
  presets: ['es2015-webpack'],
  plugins: ['transform-runtime', 'transform-es2015-modules-commonjs'],
  only: 'step'
});

exports.config = {
  onPrepare: function () {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
  },

  baseUrl: 'http://localhost:8080',

  directConnect: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',

  capabilities: {
    browserName: 'chrome',
    version: '',
    platform: 'ANY',
    chromeOptions: {
      args: ['show-fps-counter=true', '--disable-extensions']
    }
  },

  framework: 'cucumber',

  specs: [
    'features/*.feature'
  ],

  cucumberOpts: {
    require: 'features/navbar.step.js',
    format: 'pretty' // or summary
  }
};
