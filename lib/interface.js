function pageReady()  {

  if (window.location.search !== '?api=test') {
    fetchContent("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2016-07-07&show-elements=image&q=uk", populatePageFromJson);
  }
  else {
    populatePageFromJson('{"response":{"results":[{"webTitle":"Tory leadership battle"},{"webTitle":"Cameron eats huge pie"}]}}');
  }
}

window.onload = pageReady;
