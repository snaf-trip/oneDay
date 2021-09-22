function clearModal(setActive) {
  let taskTitle = document.querySelector('.modal-input-title');
  let taskDescription = document.querySelector('.modal-input-description');
  let taskDeadline = document.getElementById('deadline');
  let taskImportant = document.getElementById('important');

  if (taskTitle !== null) {
    taskTitle.value = '';
  } if (taskDescription !== null) {
    taskDescription.value = '';
  } if (taskDeadline !== null) {
    taskDeadline.value = '';
  } if (taskImportant !== null) {
    taskImportant.checked = false;
  }

  setActive(false);
}

export { clearModal };