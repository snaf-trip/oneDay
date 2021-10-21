import React from "react";
import './DeleteAllTasks.css';
import { deleteAllTasks } from "../../../../utils/deleteAllTasks.js";


function DeleteAllTasks({ setActive, saveTodos }) {
  return (
    <div className='delete-all--content'>
      <div className="modal-header--delete">
        <h2 className="modal-title modal-title--delete">Очистить весь список задач</h2>
        <span className='description-modal--delete'>Вы уверены что хотите очистить все имеющиеся данные?</span>
      </div>
      <div className='buttons--delete'>
        <a className='modal-cancel-button--delete' onClick={() => { setActive(false) }}>Отмена</a>
        <a className='modal-clear-button--delete' onClick={() => { deleteAllTasks(saveTodos, setActive) }}>Очистить</a>
      </div>
    </div>
  )
}

export default DeleteAllTasks;