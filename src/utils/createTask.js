let taskId = 1;

function createTask(todos, setActive) {
  let taskTitle = document.querySelector('.modal-input-title');
  let taskDescription = document.querySelector('.modal-input-description');
  let taskDeadline = document.getElementById('deadline');
  let taskImportant = document.getElementById('important');

  let task = {
    id: taskId,
    completed: false,
    title: taskTitle.value,
    description: taskDescription.value,
    dedline: taskDeadline.value,
    important: taskImportant.checked,
  }
  todos.push(task)
  localStorage.setItem('todos', JSON.stringify(todos));

  //Очистка формы после создания
  taskTitle.value = '';
  taskDescription.value = '';
  taskDeadline.value = '';
  taskImportant.checked = false;
  setActive(false);

  taskId++;
}

export { createTask };

