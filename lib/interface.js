function pageReady()  {
//   if (window.location.search !== '?json=test') {
//     fetchContent("http://quiet-beach-24792.herokuapp.com/todos.json", populatePageFromJson);
//   }
//
//   document.getElementById('new-task-submit-button').onclick = function(){
//     createTask(document.getElementById('new-task-input-text').value, false);
//   }
//
//   document.getElementById('filter-button-outstanding').onclick = function () {
//     hideElements('completed-task');
//     showElements('active-task');
//   }
//
//   document.getElementById('filter-button-completed').onclick = function () {
//     hideElements('active-task');
//     showElements('completed-task');
//   }
//
//   document.getElementById('filter-button-all').onclick = function () {
//     showElements('active-task');
//     showElements('completed-task');
//   }

fetchContent("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2016-07-07&show-elements=image&q=uk", populatePageFromJson);

}

window.onload = pageReady;
