import React from "react";
import './DoneList.css';
import TodoItem from "../TodoItem/TodoItem";

function DoneList(props) {
  return (
    <ul className='done-list'>
      {props.todos.map(todo => {

        if (todo.completed === true) {
          return <TodoItem className="done" todo={todo} key={todo.id} checked={'checked'} completedChange={props.onToggle} />
        }

      })}
    </ul>
  )
}

export default DoneList;