
var swapClass = function (class1, class2, id) {
  var className = 'task-' + id;
  var classes = document.getElementById('task-' + id).className
  if(classes.includes(class1)){
    classes = classes.replace(' ' + class1, ' ' + class2);
    classes = classes.replace(class1, class2);
  } else {
    classes = classes.replace(' ' + class2, ' ' + class1);
    classes = classes.replace(class2, class1);
  }
  document.getElementById('task-' + id).className = classes;
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

var taskCount = function() {
  return document.getElementsByClassName('active-task').length +
  document.getElementsByClassName('completed-task').length;
};


var createHTML = function(title)  {
  var data = {
    idNumber: taskCount(),
    completed: false,
    text: title
  };
  return Mustache.to_html(taskTemplate, data);
}

var populateTask = function(jsonObj)  {
  createTask(jsonObj.webTitle);
}

var createTask = function (title) {
  var listText = document.getElementById('list-container').innerHTML;
  listText = createHTML(title) + listText;
  document.getElementById('list-container').innerHTML = listText;
  completedListener();
}

var completedListener = function () {
  var elements = document.getElementsByClassName('completed-task-button');
  for(var i = 0; i < elements.length; i++) {
    elements[i].onclick = function(){
      swapClass('completed-task', 'active-task', this.id.split('-').pop());
      this.disabled = 'disabled';
    };
  }
};

var populatePageFromJson = function(data) {
  var jsonList = JSON.parse(data).response.results;
  for(var i = 0; i < jsonList.length; i++) {
    populateTask(jsonList[i]);
  }
}
