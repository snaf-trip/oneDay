import React from "react";
import './DoneList.css';
import TodoItem from "../TodoItem/TodoItem";

function DoneList(props) {
  return (
    <div>
      <h3>Done</h3>
      <ul className='done-list'>
        {props.todos.map(todo => {

          if (todo.completed === true) {
            return <TodoItem todo={todo} key={todo.id} checked={'checked'} completedChange={props.onToggle} />
          }

        })}
      </ul>
    </div>
  )
}

export default DoneList;