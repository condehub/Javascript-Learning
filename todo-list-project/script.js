const todoArray = []; 

function addTask() {
  inputElement = document.querySelector('.inputTaskPlace');
  taskName = inputElement.value;
  todoArray.push(taskName);
  console.log(todoArray);
  inputElement.value = '';
}

