import React from "react";
import './DoneList.css';
import TodoItem from "../TodoItem/TodoItem";

function DoneList(props) {
  return (
    <div className='done-block'>
      <h3>Done</h3>
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