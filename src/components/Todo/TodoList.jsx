import React from "react";
import './TodoList.css';
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <ul className='todo-list'>
      {props.todos.map(todo => {
        return <TodoItem todo={todo} key={todo.id} />
      })}
    </ul>
  )
}