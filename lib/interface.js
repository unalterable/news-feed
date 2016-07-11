function pageReady()  {

  if (window.location.search !== '?api=test') {
    fetchContent("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2016-07-07&show-elements=image&q=uk", populatePageFromJson);
  }
  else {
    populatePageFromJson('{"response":{"results":[{"webTitle":"Tory leadership battle"},{"webTitle":"Cameron eats huge pie"}]}}');
  }

  document.getElementById('overlay-back').onclick = function(){
    console.log('clicked')
    $('#summary-container').fadeOut(500);
    $('#overlay-back').fadeOut(500);
  };
}

window.onload = pageReady;
