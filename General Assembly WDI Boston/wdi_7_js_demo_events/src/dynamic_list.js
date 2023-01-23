var TodoList = TodoList || {};

TodoList.addItem = function(event){
 // create an item element
 var item = document.createElement('li'), 
 // create an item delete button element
 item_button = document.createElement('button'), 
 // get the list of items
 list = document.getElementById('item-list'), 
 item_counter;

 // get the number of items in list from the list
 // data-counter attribute
 item_counter = parseInt(list.getAttribute('data-counter'));

 // set the item id 
 item.setAttribute('id', 'item_'+item_counter);
 // set the item delete button id  
 item_button.setAttribute('id', 'item_button_'+item_counter);

 // Always be incrementing the counter, just to get a unique id.
 item_counter += 1;

 // Make the item text == the input field value
 item.innerText = event.target.value + '  ';
 item_button.innerText = 'Delete';

 // increment the number of items in list
 list.setAttribute('data-counter', item_counter);

 // Add the Delete button to the list item
 item.appendChild(item_button);

 // Add the item to the list
 list.appendChild(item);
 event.target.value = '';
};

TodoList.itemDelete = function(event){
  var item_array = event.target.id.split('_'),
  list = document.getElementById('item-list'),
  id,item;

  id = item_array[item_array.length - 1];
  item = document.getElementById('item_' + id);
  list.removeChild(item);
};

