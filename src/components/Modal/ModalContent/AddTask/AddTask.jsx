import React from "react";
import './AddTask.css';
import { createTask } from "../../../../utils/createTask";
import { clearModal } from "../../../../utils/clearModal";

function AddTask({ setActive, todos }) {
  return (
    <>
      <div className="modal-header">
        <h2 className="modal-title">Добавить задачу</h2>
      </div>
      <input type="text" className='modal-input-title' placeholder='Введите название задачи' />
      <textarea className='modal-input-description' placeholder='Введите описание задачи'></textarea>
      <div className='deadline-content'>
        <label htmlFor="deadline" className='deadline-label'>До сколи нужно выполнить</label>
        <input type="time" name="deadline" id="deadline" className='deadline-input' min='17:00' max='21:00' />
      </div>
      <div className="important-content">
        <label htmlFor="important" className='important-label'>Важная задача</label>
        <input type="checkbox" name="important" id="important" className='important-input' />
      </div>
      <div className='buttons'>
        <a className='modal-cancel-button' onClick={() => { clearModal(setActive) }}>отмена</a>
        <a className='modal-create-button' onClick={() => createTask(todos, setActive)}>создать</a>
      </div>
    </>
  )
}

export default AddTask;