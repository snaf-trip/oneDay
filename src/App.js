import React from "react";
import TodoList from "./components/Todo/TodoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: 'Task 1' },
    { id: 2, completed: false, title: 'Task 2' }
  ]

  return (
    <div className='container'>
      <h1 className='app-title'>OneDay</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
