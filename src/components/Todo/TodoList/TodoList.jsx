import React from "react";
import PropTypes from 'prop-types';
import './TodoList.css';
import TodoItem from "../TodoItem/TodoItem.jsx";

function TodoList(props) {
  let checkedNotDoneTasks = 0;
  return (
    <div className='todo-block'>
      <h3>Todo</h3>
      {props.todos.map(todo => {
        if (todo.completed === false) {
          checkedNotDoneTasks++;
        }
      })}
      {
        console.log(checkedNotDoneTasks),
        checkedNotDoneTasks === 0 ? <span className='completedAllTasks'>Вы выполнили все задачи!</span> : null
      }
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