import React from "react";

export default function TodoItem({ todo }) {
  return (
    <li><input type="checkbox" /> {todo.title}</li>
  )
}