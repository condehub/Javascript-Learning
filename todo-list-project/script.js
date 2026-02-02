const todoArray = []; 
let todoListHTML = '';
let taskList = '';

function displayTasks() {
  for (i = 0; i < todoArray.length; i++) {
    const taskName = todoArray[i];
    const taskHTML = `<p>${taskName}</p>`;
    taskList += taskHTML;
  }
  const taskContainer = document.querySelector('.tasks-container');
  taskContainer.innerHTML = taskList; 
  taskList = '';
}


function addTask() {
  inputElement = document.querySelector('.inputTaskPlace');
  taskName = inputElement.value;
  todoArray.push(taskName);
  inputElement.value = '';
  displayTasks();
}




