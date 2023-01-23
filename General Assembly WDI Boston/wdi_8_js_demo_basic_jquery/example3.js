$(document).ready(function() {
  App.addToList('Walk dog');
  App.addToList('Feed dog');

  var $h1 = $('h1');

  $h1.on('click', App.removeFromList);
});

var App = (function() {
  var addToList = function(text) {
    var $taskList = $('#tasks');
    var $newTask = $('<li>');
    $newTask.text(text);
    $taskList.append($newTask);
  };

  var removeFromList = function() {
    this.remove();
  }
  return { addToList: addToList, removeFromList: removeFromList };
})();

