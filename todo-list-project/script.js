const todoArray = []; 
let todoListHTML = '';
let taskList = '';


function displayTasks() {
  for (i = 0; i < todoArray.length; i++) {
    const task = todoArray[i];
    const taskName = task.name;
    const taskDueDate = task.dueDate;
    const taskHTML = 
      `<p>${taskName} ${taskDueDate}
        <button onClick='todoArray.splice(${i}, 1);
          displayTasks();'>
          Delete
        </button>
      </p>`;
    taskList += taskHTML;
  }
  const taskContainer = document.querySelector('.tasks-container');
  taskContainer.innerHTML = taskList; 
  taskList = '';
}


function addTask() {
  inputElement = document.querySelector('.inputTaskPlace');
  dueDateInput = document.querySelector('.due-date');
  const newTask = {
    name: inputElement.value,
    dueDate: dueDateInput.value
  }

  if (newTask.name === '' || newTask.dueDate === '') return;

  todoArray.push(newTask);
  inputElement.value = '';
  dueDateInput.value = '';
  displayTasks();
}