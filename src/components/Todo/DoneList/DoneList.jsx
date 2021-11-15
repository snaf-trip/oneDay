import React from "react";
import './DoneList.css';
import TodoItem from "../TodoItem/TodoItem";

function DoneList(props) {
  let checkedComplitedTasks = 0;
  return (
    <div className='done-block'>
      {props.todos.map(todo => {
        if (todo.completed === true) {
          checkedComplitedTasks++;
        }
      })}
      {
        checkedComplitedTasks !== 0 ? <h3>Done</h3> : null
      }
      <ul className='done-list'>
        {props.todos.map(todo => {
          if (todo.completed === true) {
            return <TodoItem todo={todo} key={todo.id} checked={'checked'} completedChange={props.onToggle} deleteTask={props.deleteTask} setActive={props.setActive} setContent={props.setContent} setTodo={props.setTodo} />
          }
        })}
      </ul>
    </div>
  )
}

export default DoneList;