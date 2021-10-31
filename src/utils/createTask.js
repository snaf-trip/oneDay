import titleValidation from './titleValidation';

let taskId;

if (localStorage.getItem('taskId') === null) {
  taskId = 1;
} else {
  taskId = localStorage.getItem('taskId');
}

function createTask(todos, setActive) {
  let taskTitle = document.querySelector('.modal-input-title');
  let taskDescription = document.querySelector('.modal-input-description');
  let taskDeadline = document.getElementById('deadline');
  let taskImportant = document.getElementById('important');

  if (titleValidation(taskTitle.value)) {
    let task = {
      id: taskId,
      completed: false,
      title: taskTitle.value,
      description: taskDescription.value,
      deadline: taskDeadline.value,
      important: taskImportant.checked,
    }
    todos.push(task);
    localStorage.setItem('todos', JSON.stringify(todos));

    //Очистка модалки после создания задачи
    taskTitle.value = '';
    taskDescription.value = '';
    taskDeadline.value = '';
    taskImportant.checked = false;
    setActive(false);

    taskId++;

    localStorage.setItem('taskId', taskId);
  } else if (titleValidation(taskTitle.value) === undefined) {
    alert('Название не может состоять только из пробелов...');
  } else {
    alert('Ведите название!');
  }

}

export { createTask };

