let taskId = 1;

function createTask(todos, add) {
  let taskTitle = document.querySelector('.modal-input-title').value;
  let taskDescription = document.querySelector('.modal-input-description').value;
  let taskDeadline = document.getElementById('deadline').value;
  let taskImportant = document.getElementById('important').checked;

  let task = {
    id: taskId,
    completed: false,
    title: taskTitle,
    description: taskDescription,
    dedline: taskDeadline,
    important: taskImportant,
  }
  todos.push(task)
  console.log(todos);


  taskId++;
}

export { createTask };

