import React from "react";
import './infoTask.css';
import { saveEditTask } from "../../../../utils/saveEditTask";

function InfoTask({ setActive, todo, modalContent, todos, saveTodos }) {
  return (
    <>
      <div className="modal-header">
        <h2 className="modal-title">Информация</h2>
        <button className="modal-close-button" onClick={() => { setActive(false) }}>x</button>
      </div>
      {todo !== undefined ?
        <>
          {/* key в inputs используется для запуска повторного рендеринга, чтобы значения в инпутах изменялись */}
          <input type="text" className='modal-input-title' placeholder='Введите название задачи' defaultValue={todo.title} key={Math.floor(Math.random() * (10 - 1)) + 1} />
          <textarea className='modal-input-description' placeholder='Введите описание задачи' defaultValue={todo.description} key={Math.floor(Math.random() * (20 - 11)) + 11}></textarea>
          <input type="time" name="deadline" id="deadline" min='17:00' max='21:00' defaultValue={todo.deadline} key={Math.floor(Math.random() * (30 - 21)) + 21} />
          <label htmlFor="deadline">До сколи нужно выполнить</label>
          <input type="checkbox" name="important" id="important" defaultChecked={todo.important} key={Math.floor(Math.random() * (40 - 31)) + 31} />
          <label htmlFor="important">Важная задача</label>
        </>
        :
        null
      }
      <button className='modal-create-button' onClick={() => { saveEditTask(todo, todos, saveTodos) }}>сохранить</button>
      <button className='modal-cancel-button' onClick={() => { setActive(false) }}>отмена</button>
    </>
  )
}

export default InfoTask;