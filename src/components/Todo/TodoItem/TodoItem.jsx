import React from "react";
import PropTypes, { func } from 'prop-types';
import './TodoItem.css';

function TodoItem({ todo, completedChange, checked, deleteTask, setActive, setContent, setTodo }) {

  function openModalInfoTask() {
    setActive(true);
    setContent('openTask');
    setTodo(todo)
  }

  return (
    <li {...todo.completed === true ? { className: 'todo-item' + ' ' + 'done' } : { className: 'todo-item' }} >
      <input type="checkbox" onChange={() => completedChange(todo.id)} checked={checked} />
      <span onClick={() => { openModalInfoTask(todo.id) }}>{todo.title}</span>
      <button onClick={() => deleteTask(todo.id)}>x</button>
    </li >
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completedChange: PropTypes.func.isRequired,
  checked: PropTypes.string.isRequired
}

export default TodoItem;