var App = (function() {
  var $pendingTasksUl, $input;

  var init = function() {
    $input = $('#newTaskInput');
    $pendingTasksUl = $('#pendingTasks');
    $input.on('change', App.addTaskToList);
    $pendingTasksUl.on('click', 'li', App.removeFromList);
  };

  var addTaskToList = function() {
    var inputText = this.value;
    var $newTask = $('<li>');
    $newTask.text(inputText);
    $pendingTasksUl.append($newTask);
    $input.val('');
  };

  var removeFromList = function() {
    this.remove();
  };
  return { init: init, addTaskToList: addTaskToList, removeFromList: removeFromList}
})();

$(document).ready(App.init);
