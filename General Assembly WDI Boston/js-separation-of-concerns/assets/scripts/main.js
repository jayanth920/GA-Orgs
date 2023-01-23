'use strict';

/* jshint -W079 */
var $ = require('jquery');

var MyApp = {};

$(document).ready(function() {
  var yourName = prompt('What is your name?');

  $('#name').html(yourName);

  var $thingList = $('#fav-list');

  var $button = $('#new-thing-button');
  $button.on('click', function(event) {
    event.preventDefault();
    MyApp.addToList($thingList);
  });
});

// We can define things outside of the window.onload which are evaluated
// only when called.
MyApp.addToList = function(list) {
  var $newLi = $('<li>');
  var $newItemText = $('#new-thing');
  $newLi.html($newItemText.val());
  $newItemText.val('');
  if ($newLi.html() !== '') {
    list.append($newLi);
  }
};
