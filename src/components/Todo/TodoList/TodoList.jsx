import React from "react";
import PropTypes from 'prop-types';
import './TodoList.css';
import TodoItem from "../TodoItem/TodoItem.jsx";

function TodoList(props) {
  return (
    <div>
      <h3>Todo</h3>
      <ul className='todo-list'>
        {props.todos.map(todo => {
          if (todo.completed === false) {
            return <TodoItem className="done" todo={todo} key={todo.id} completedChange={props.onToggle} deleteTask={props.deleteTask} setActive={props.setActive} setContent={props.setContent} setTodo={props.setTodo} />
          }
        })}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList;