var storyCount = function() {
  return document.getElementsByClassName('story-headline').length;
};

var createHTML = function(title, webUrl)  {
  var data = {
    idNumber: storyCount(),
    completed: false,
    text: title,
    url: webUrl
  };
  return Mustache.to_html(storyTemplate, data);
}

var populateTask = function(jsonObj)  {
  createTask(jsonObj.webTitle, jsonObj.webUrl);
}

var createTask = function (title, webUrl) {
  var listText = document.getElementById('list-container').innerHTML;
  listText = createHTML(title, webUrl) + listText;
  document.getElementById('list-container').innerHTML = listText;
  completedListener();
}

var completedListener = function () {
  var elements = document.getElementsByClassName('summary-button');
  for(var i = 0; i < elements.length; i++) {
    elements[i].onclick = function(){
      $('#summary-container').fadeIn(500);
      $('#overlay-back').fadeIn(500);


      apiUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=';
      id = this.id.split('-').pop();
      storyUrl = document.getElementById('story-url-' + id).innerHTML;

      if (window.location.search !== '?api=test') {
        fetchContent(apiUrl + storyUrl, populateSummary);
      }else{
        populateSummary('{"sentences":["This is a sentence. ","This is another sentence."]}');
      }
    };
  }
};

var populateSummary = function(data) {
  var jsonList = JSON.parse(data).sentences;
  for(var i = 0; i < jsonList.length; i++) {
    text = document.getElementById('summary-container').innerHTML;
    text = text + jsonList[i];
    document.getElementById('summary-container').innerHTML = text;
  }
}

var populatePageFromJson = function(data) {
  var jsonList = JSON.parse(data).response.results;
  for(var i = 0; i < jsonList.length; i++) {
    populateTask(jsonList[i]);
  }
}
