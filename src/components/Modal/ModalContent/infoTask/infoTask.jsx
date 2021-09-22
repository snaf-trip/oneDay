import React from "react";
import './InfoTask.css';
import { saveEditTask } from "../../../../utils/saveEditTask";

let keyForTitle = 1;
let keyForDescription = 55;
let keyForTime = 105;
let keyForImportant = 155;

function InfoTask({ setActive, todo, modalContent, todos, saveTodos }) {
  // Проверка ключей для инпутов
  keyForTitle >= 50 ? keyForTitle = 1 : keyForTitle += 1;
  keyForDescription >= 100 ? keyForDescription = 55 : keyForDescription += 1;
  keyForTime >= 150 ? keyForTime = 105 : keyForTime += 1;
  keyForImportant >= 200 ? keyForImportant = 155 : keyForImportant += 1;

  return (
    <>
      <div className="modal-header">
        <h2 className="modal-title">Информация</h2>
        <button className="modal-close-button" onClick={() => { setActive(false) }}>x</button>
      </div>
      {todo !== undefined ?
        <>
          {/* key в inputs используется для запуска повторного рендеринга, чтобы значения в инпутах изменялись */}
          <input type="text" className='modal-input-title' placeholder='Введите название задачи' defaultValue={todo.title} key={keyForTitle} />
          <textarea className='modal-input-description' placeholder='Введите описание задачи' defaultValue={todo.description} key={keyForDescription}></textarea>
          <input type="time" name="deadline" id="deadline" min='17:00' max='21:00' defaultValue={todo.deadline} key={keyForTime} />
          <label htmlFor="deadline">До сколи нужно выполнить</label>
          <input type="checkbox" name="important" id="important" defaultChecked={todo.important} key={keyForImportant} />
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