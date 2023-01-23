// We need this to prevent the JS from running
$(document).ready(function() {
  var $theH1 = $('h1');
  $theH1.text('Goodbye');
  $theH1.css('color', 'red');

  // Preferred method of adding elements
  var $taskList = $('#tasks');

  // With the <li> it makes a new one
  // Without it (li) it finds
  var $newTask = $('<li>');
  $newTask.text('Eat Apples');
  $taskList.append($newTask);

  var $newTask = $('<li>'); //Created an entirely different/new element
  $newTask.text('Bake Apples');
  $taskList.append($newTask);

  var $newTask = $('<li>');
  $newTask.text('Find Apples');
  $taskList.append($newTask);

});


