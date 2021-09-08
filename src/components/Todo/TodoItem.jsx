import React from "react";
import PropTypes from 'prop-types';
import './TodoItem.css';

function TodoItem({ todo, completedChange }) {
  console.log(todo);
  return (
    <li {...todo.completed === true ? { className: 'done' } : console.log('ne true')}>
      <input type="checkbox" onChange={() => completedChange(todo.id)} />
      {todo.title}
    </li >
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completedChange: PropTypes.func.isRequired
}

export default TodoItem;