var path = require('path');
var chai = require('chai');
var expect = chai.expect;
var nock = require('nock');

const Browser = require('zombie');
const http = require('http');

describe('Page Load', function() {

  before(function() {
    this.browser = new Browser({site: 'http://localhost:3000'});
    var createServer = require("http-server").createServer;
    var server = createServer({ root: path.join(__dirname, "../") });
    server.listen(3000);
    var scope = nock('http://news-summary-api.herokuapp.com', {
                  reqheaders: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                  }
                })
                .get('/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2016-07-07&show-elements=image&q=uk')
                .reply(200, require('./apiResponse.json'));
  });


  describe('Task Functionality', function() {
    beforeEach(function(done) {
      this.browser.visit('/', done);
    });

    it("page exists", function(){
      this.browser.assert.success();
    });

    it("populates headlines on page", function(){
      expect(this.browser.text('#list-container')).to.include('Tory leadership battle:');
    });

  });
});
