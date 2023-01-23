var TodoApp = {
  items: []
};

TodoApp.addItem = function() {
  var itemName = $(this).val();
  $(this).val('');
  var item = new TodoItem(itemName);
  TodoApp.items.push(item);
};

TodoApp.removeItem = function(event) {
  event.preventDefault();
  $(this).parent().remove();
};

TodoApp.markCompleted = function() {
  var task = $(this).parent().clone();
  $('#completed').append(task);
  $(this).parent().remove();
};

// Constructor Function
// Gives me the ability to call:
// new TodoItem('foo');
// Looks like a class, but NOT.
// Kinda like our initialize method in Ruby
var TodoItem = function(name) {
  this.name = name;
  this.id = this.__proto__.itemId;
  this.__proto__.itemId += 1; // This weird
  this.render();
};

TodoItem.prototype = {
  itemId: 1,
  render: function() {
    TodoApp.$list.append(this.toHTML());
  },
  toHTML: function() {
    return $('<div>').addClass('todo')
                    .attr('todo-id', this.id)
                    .html(this.name)
                    .append(this.completeButton())
                    .append(this.deleteButton());
  },
  completeButton: function() {return " <a href='#' class='complete-button'>Complete</a>";},
  deleteButton: function() {return " <a href='#' class='delete-button'>Delete</a>";}
}

$(document).ready(function() {
  TodoApp.$list = $('#todos');
  TodoApp.$list.parent().on('click', '.delete-button', TodoApp.removeItem); // Event Delegation
  TodoApp.$list.on('click', '.complete-button', TodoApp.markCompleted); // Event Delegation
  $('#new-todo').change(TodoApp.addItem)
});











