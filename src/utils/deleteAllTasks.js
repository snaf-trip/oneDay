function deleteAllTasks(saveTodos, setActive) {
  localStorage.removeItem('todos');
  localStorage.setItem('todos', JSON.stringify([]));
  saveTodos([]);

  setActive(false);
}

export { deleteAllTasks }