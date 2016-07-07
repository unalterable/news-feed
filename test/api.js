var Ajax = require('../lib/ajax.js').fetchContent;
var chai = require('chai');
var expect = chai.expect;
var nock = require('nock');

describe('Ajax unit test', function(){

  it('retrieves JSON from Guardian API', function(done){
    const URL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body";
    Ajax(URL, function(data){
      expect(JSON.parse(data).response.status).to.equal("ok");
      done();
    });
  });

  it('retrieves JSON from local', function(done){
    var scope = nock('http://news-summary-api.herokuapp.com')
    .get('/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2016-07-07&show-elements=image&q=uk')
    .reply(200, require('./apiResponse.json'));
    const URL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2016-07-07&show-elements=image&q=uk";
    console.log(URL)
    Ajax(URL, function(data){
      expect(JSON.parse(data).response.status).to.equal("test");
      done();
    });
  });
});
