const todoArray = []; 

function addTask() {
  taskName = document.querySelector('.inputTaskPlace').value
  todoArray.push(taskName);
  console.log(todoArray);
  taskName = null;
}

