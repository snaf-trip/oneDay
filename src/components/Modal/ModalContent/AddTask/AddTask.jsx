import React from "react";
import './AddTask.css';

function AddTask() {
  return (
    <>
      <div className="modal-header">
        <h2 className="modal-title">Добавить задачу</h2>
        <button className="modal-close-button">x</button>
      </div>
      <input type="text" className='modal-input-title' placeholder='Введите название задачи' />
      <textarea className='modal-input-description' placeholder='Введите описание задачи'></textarea>
      <input type="time" name="deadline" id="deadline" min='17:00' max='21:00' />
      <label htmlFor="deadline">До сколи нужно выполнить</label>
      <input type="checkbox" name="important" id="important" />
      <label htmlFor="important">Важная задача</label>
      <button className='modal-create-button'>создать</button>
      <button className='modal-cancel-button'>отмена</button>
    </>
  )
}

export default AddTask;