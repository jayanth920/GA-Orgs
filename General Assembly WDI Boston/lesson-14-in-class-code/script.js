/*----- Constants -----*/
// None needed for this app

/*----- App State -----*/

document.addEventListener('DOMContentLoaded', () => {

  /*----- Cached DOM Elements -----*/
  const newTaskForm = document.querySelector('form#new-task-form');
  const taskField = document.querySelector('input#task-field');
  const toDoList = document.querySelector('ul#todo-list');

  /*----- Event Listeners -----*/
  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const description = taskField.value.trim();
    newTaskForm.reset();
    if (!description) return;

    const a = document.createElement('a');
    a.classList.add('delete');
  
    const li = document.createElement('li');
    li.innerText = description;
    li.classList.add('todo-task');
    li.appendChild(a);

    toDoList.appendChild(li);
  });

  toDoList.addEventListener('click', (e) => {
    const li = e.target.parentElement;
    if (li.classList.contains('todo-task')) li.remove();
  });

  /*----- Functions -----*/
  const renderTask = (description) => {

  }

  const init = ()  => {

  }

  const render = () => {

  }

});
