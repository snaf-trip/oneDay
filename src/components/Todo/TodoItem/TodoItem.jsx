import React from "react";
import PropTypes from 'prop-types';
import './TodoItem.css';

function TodoItem({ todo, completedChange, checked, deleteTask }) {
  return (
    <li {...todo.completed === true ? { className: 'todo-item' + ' ' + 'done' } : { className: 'todo-item' }} >
      <input type="checkbox" onChange={() => completedChange(todo.id)} checked={checked} />
      {todo.title}
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