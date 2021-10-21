function saveEditTask(todo, todos, saveTodos, setActive) {
  let taskTitle = document.querySelector('.modal-input-title').value;
  let taskDescription = document.querySelector('.modal-input-description').value;
  let taskDeadline = document.getElementById('deadline').value;
  let taskImportant = document.getElementById('important').checked;

  let initialVersion = {
    title: todo.title,
    description: todo.description,
    deadline: todo.deadline,
    important: todo.important,
  };

  let taskChanged = todos.map(item => {
    if (item === todo) {
      item.title = taskTitle;
      item.description = taskDescription;
      item.deadline = taskDeadline;
      item.important = taskImportant;
    }
    return item
  })

  if (
    todo.title !== initialVersion.title ||
    todo.description !== initialVersion.description ||
    todo.deadline !== initialVersion.deadline ||
    todo.important !== initialVersion.important
  ) {
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(taskChanged));
    saveTodos(taskChanged);
    alert('Изменения успешно сохранены!');
  } else {
    alert('Вы не внесли никаких изменений.')
  }
};

export { saveEditTask };