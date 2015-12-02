/*jslint node: true */

module.exports = {
  'TestName' : function (browser) {
    browser
    .url(browser.globals.URL + '/path')
    .setValue('#id', 'string')
    .click('#submit')
    .pause(1000)
    .verify.elementPresent('.search-result')
    .verify.elementPresent('.item-list')
    .pause(1000)
    .end();
  }

};