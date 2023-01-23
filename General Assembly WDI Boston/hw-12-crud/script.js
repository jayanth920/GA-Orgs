/*----- Constants -----*/
// None needed for this app

/*----- App State -----*/
let tasks;

document.addEventListener('DOMContentLoaded', async () => {

  /*----- Cached DOM Elements -----*/
  const newTaskForm = document.querySelector('form#new-task-form');
  const boardNames = document.querySelector('input#boardNames');
  const boardLength = document.querySelector('input#boardLength');
  const wheelDiameter = document.querySelector('input#wheelDiameter');
  const boardColor = document.querySelector('input#color');
  const toDoList = document.querySelector('ul#todo-list');

  /*----- Event Listeners -----*/
  newTaskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = boardNames.value.trim();
    const length = boardLength.value.trim();
    const diameter = wheelDiameter.value.trim();
    const color = boardColor.value.trim();
    newTaskForm.reset();
    if (!name && !length && !diameter && !color) return;

    const newTask = { Name: name, boardLength: length, wheelDiameter: diameter, color: color };
    const result = await create(newTask);

    renderTask(result);
  });

  toDoList.addEventListener('click', async (e) => {

    const target = e.target;
    const tagName = target.tagName.toLowerCase();

    if (tagName === 'a' && target.classList.contains('delete')) {
      const li = target.closest('.todo-task');
      await destroy(li.dataset.Name);
      li.remove();
    }
    else if (tagName == 'li' && target.classList.contains('todo-task')) {
      const done = target.classList.contains('done');
      await update(target.dataset.Name, { done: !done });
      target.classList.toggle('done');
    }
  });

  /*----- Functions -----*/
  const renderTask = (task) => {
    const a = document.createElement('a');
    a.classList.add('delete');
  
    const li = document.createElement('li');
    li.dataset.Name = task.Name;
    li.dataset.boardLength = task.boardLength;
    li.dataset.wheelDiameter = task.wheelDiameter;
    li.dataset.color = task.color;
    let Name = task.Name;
    let boardLength = task.boardLength;
    let wheelDiameter = task.wheelDiameter;
    let color = task.color;
    li.innerText =`${Name} 

    Board Length: ${boardLength} 
    Wheel Diameter: ${wheelDiameter} 
    Color: ${color}`;
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