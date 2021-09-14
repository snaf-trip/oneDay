function clearModal(setActive) {
  let taskTitle = document.querySelector('.modal-input-title');
  let taskDescription = document.querySelector('.modal-input-description');
  let taskDeadline = document.getElementById('deadline');
  let taskImportant = document.getElementById('important');

  taskTitle.value = '';
  taskDescription.value = '';
  taskDeadline.value = '';
  taskImportant.checked = false;

  setActive(false);
}

export { clearModal };