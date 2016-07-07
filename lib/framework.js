
var swapClass = function (class1, class2, id) {
  var className = 'story-' + id;
  var classes = document.getElementById('story-' + id).className
  if(classes.includes(class1)){
    classes = classes.replace(' ' + class1, ' ' + class2);
    classes = classes.replace(class1, class2);
  } else {
    classes = classes.replace(' ' + class2, ' ' + class1);
    classes = classes.replace(class2, class1);
  }
  document.getElementById('story-' + id).className = classes;
};

var hideElements = function (selectedClass)  {
  var elements = document.getElementsByClassName(selectedClass);
  for(var i = 0; i < elements.length; i++) {
    if (!elements[i].className.includes('hidden-task')) {
      elements[i].className += ' hidden-task';
    }
  }
}

var showElements = function (selectedClass)  {
  var elements = document.getElementsByClassName(selectedClass);
  for(var i = 0; i < elements.length; i++) {
    if (elements[i].className.includes('hidden-task')) {
      elements[i].className = elements[i].className.replace(' hidden-task', '');
    }
  }
}

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
      document.getElementById('summary-container').innerHTML = 'This is a summary';
    };
  }
};

var populateSummary = function(data) {
  var jsonList = JSON.parse(data).response.results;
  for(var i = 0; i < jsonList.length; i++) {
    populateTask(jsonList[i]);
  }
}

var populatePageFromJson = function(data) {
  var jsonList = JSON.parse(data).response.results;
  for(var i = 0; i < jsonList.length; i++) {
    populateTask(jsonList[i]);
  }
}
