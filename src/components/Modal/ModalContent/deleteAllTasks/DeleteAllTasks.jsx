import React from "react";
import './DeleteAllTasks.css';
import { deleteAllTasks } from "../../../../utils/deleteAllTasks.js";


function DeleteAllTasks({ setActive, saveTodos }) {
  return (
    <>
      <div className="modal-header">
        <h2 className="modal-title">Очистить всё</h2>
      </div>
      <button onClick={() => { setActive(false) }}>Отмена</button>
      <button onClick={() => { deleteAllTasks(saveTodos, setActive) }}>Удалить</button>
    </>
  )
}

export default DeleteAllTasks;