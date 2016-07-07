var path = require('path');
var chai = require('chai');
var expect = chai.expect;


const Browser = require('zombie');
const http = require('http');

describe('Page Load', function() {

  before(function() {
    this.browser = new Browser({site: 'http://localhost:3000'});
    var createServer = require("http-server").createServer;
    var server = createServer({ root: path.join(__dirname, "../") });
    server.listen(3000);

  });


  describe('Task Functionality', function() {
    beforeEach(function(done) {
      this.browser.visit('/?api=test', done);

    });

    it("page exists", function(){
      this.browser.assert.success();
    });

    it("populates headlines on page", function(){
      expect(this.browser.text('#list-container')).to.include('Cameron eats huge pie');
    });

    it("shows summary for story", function() {
      this.browser.pressButton('#summary-button-0');
      expect(this.browser.text('#summary-container')).to.include('This is a summary');
    });
  });
});
