/*----- Constants -----*/
// None needed for this app

/*----- App State -----*/
let tasks;

document.addEventListener('DOMContentLoaded', async () => {

  /*----- Cached DOM Elements -----*/
  const newTaskForm = document.querySelector('form#new-task-form');
  const taskField = document.querySelector('input#task-field');
  const toDoList = document.querySelector('ul#todo-list');

  /*----- Event Listeners -----*/
  newTaskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const description = taskField.value.trim();
    newTaskForm.reset();
    if (!description) return;

    const newTask = { description: description };
    const result = await create(newTask);

    renderTask(result);
  });

  toDoList.addEventListener('click', async (e) => {

    const target = e.target;
    const tagName = target.tagName.toLowerCase();

    if (tagName === 'a' && target.classList.contains('delete')) {
      const li = target.closest('.todo-task');
      await destroy(li.dataset.id);
      li.remove();
    }
    else if (tagName == 'li' && target.classList.contains('todo-task')) {
      const done = target.classList.contains('done');
      await update(target.dataset.id, { done: !done });
      target.classList.toggle('done');
    }
  });

  /*----- Functions -----*/
  const renderTask = (task) => {
    const a = document.createElement('a');
    a.classList.add('delete');
  
    const li = document.createElement('li');
    li.dataset.id = task.id;
    li.innerText = task.description;
    li.classList.add('todo-task');
    if (task.done) li.classList.add('done');
    li.appendChild(a);

    toDoList.appendChild(li);
  }

  const init = async ()  => {
    tasks = await index();
  }

  const render = () => {
    for (task of tasks) renderTask(task);
  }

  await init();
  render();
});
