import * as chai from 'chai';

chai.should();

module.exports = function() {
  this.Given('a logged user', (next) => {
    browser.get('/');
    next();
  });
};
