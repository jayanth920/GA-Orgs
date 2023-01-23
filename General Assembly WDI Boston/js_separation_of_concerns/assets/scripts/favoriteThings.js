'use strict';

window.onload = function() {
  var yourName = prompt('What is your name?');

  document.getElementById('name').innerHTML = yourName;

  var thingList = document.getElementById('fav-list');

  var button = document.getElementById('new-thing-button');
  button.onclick = function(event) {
    event.preventDefault();
    MyApp.addToList(thingList);
  };
};

// We can define things outside of the window.onload which are evaluated
// // only when called.
var MyApp = {};

MyApp.addToList = function(list) {
  var newLi = document.createElement('li');
  var newItemText = document.getElementById('new-thing');
  newLi.innerHTML = newItemText.value;
  newItemText.value = '';
  if (newLi.innerHTML !== '') {
    list.appendChild(newLi);
  }
};
