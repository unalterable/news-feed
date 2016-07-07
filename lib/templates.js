var taskTemplate = "<li {{#completed}}class='completed-task'{{/completed}}{{^completed}}class='active-task'{{/completed}} id='task-{{idNumber}}'>\
<div class='list-item-text'>{{text}}</div>\
<div class='list-item-menu'>\
<input type='submit' value='Completed' class='completed-task-button' \
id='task-button-{{idNumber}}' {{#completed}}disabled='disabled'{{/completed}}/></div>\
</li>";
