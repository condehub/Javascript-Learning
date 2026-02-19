const todoArray = []; 
let todoListHTML = '';
let taskList = '';

document.body.addEventListener('keydown', (event) => {
  inputElement = document.querySelector('.inputTaskPlace');
  dueDateInput = document.querySelector('.due-date');

  if (event.key === 'Enter') {
    if (inputElement.value && dueDateInput.value) {
      addTask();
    }
  }
})

document.querySelector('.addButton').addEventListener('click', () => {
  addTask();
});


function displayTasks() {
  for (i = 0; i < todoArray.length; i++) {
    const task = todoArray[i];
    const taskName = task.name;
    const taskDueDate = task.dueDate;
    const taskHTML = 
      ` <div>${taskName}</div> 
        <div>${taskDueDate}</div>
        <button class="deleteButton">
          Delete
        </button>
      `;
    taskList += taskHTML;

  }
  const taskContainer = document.querySelector('.tasks-container');
  taskContainer.innerHTML = taskList; 
  taskList = '';

  
  document.querySelectorAll('.deleteButton')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
      todoArray.splice(index, 1);
      displayTasks();
    });
  });    
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