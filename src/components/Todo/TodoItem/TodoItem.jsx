import React from "react";
import PropTypes, { func } from 'prop-types';
import './TodoItem.css';
import importantIcon from '../../../img/important.svg';
import deleteTaskIcon from '../../../img/deleteTask.svg';

function TodoItem({ todo, completedChange, checked, deleteTask, setActive, setContent, setTodo }) {

  function openModalInfoTask() {
    setActive(true);
    setContent('openTask');
    setTodo(todo)
  }

  return (
    <li {...todo.completed === true ? { className: 'todo-item' + ' ' + 'done' } : { className: 'todo-item' }} >
      <input type="checkbox" className='checkbox-input' onChange={() => completedChange(todo.id)} checked={checked} />
      <span className='task-title' onClick={() => { openModalInfoTask(todo.id) }}>{todo.title}</span>
      <div className='additional-content'>
        <div className='block-deadline'>
          {todo.deadline !== '' ?
            todo.deadline
            :
            null
          }
        </div>

        <div className='block-important'>
          {todo.important === true ?
            <img src={importantIcon} width='21' height='21' />
            :
            null
          }
        </div>

        <a className='delete-task-button' onClick={() => deleteTask(todo.id)}><img src={deleteTaskIcon} /></a>
      </div>
    </li >
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completedChange: PropTypes.func.isRequired,
  checked: PropTypes.string.isRequired
}

export default TodoItem;