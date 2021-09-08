import React from "react";
import PropTypes from 'prop-types';
import './TodoList.css';
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul className='todo-list'>
      {props.todos.map(todo => {
        return <TodoItem className="done" todo={todo} key={todo.id} completedChange={props.onToggle} />
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList;