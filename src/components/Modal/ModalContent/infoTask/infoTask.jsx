import React from "react";
import './infoTask.css';

function InfoTask({ setActive, todo, modalContent }) {
  return (
    <>
      <div className="modal-header">
        <h2 className="modal-title">Информация</h2>
        <button className="modal-close-button" onClick={() => { setActive(false) }}>x</button>
      </div>
      {todo !== undefined ?
        <>
          <input type="text" className='modal-input-title' placeholder='Введите название задачи' defaultValue={todo.title} />
          <textarea className='modal-input-description' placeholder='Введите описание задачи' defaultValue={todo.description}></textarea>
          <input type="time" name="deadline" id="deadline" min='17:00' max='21:00' defaultValue={todo.deadline} />
          <label htmlFor="deadline">До сколи нужно выполнить</label>
          <input type="checkbox" name="important" id="important" defaultChecked={todo.important} />
          <label htmlFor="important">Важная задача</label>
        </>
        :
        null
      }
      <button className='modal-create-button'>сохранить</button>
      <button className='modal-cancel-button' onClick={() => { setActive(false) }}>отмена</button>
    </>
  )
}

export default InfoTask;