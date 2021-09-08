import React from "react";
import TodoList from "./components/Todo/TodoList";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Task 1' },
    { id: 2, completed: false, title: 'Task 2' }
  ]);


  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }))
  }

  return (
    <div className='container'>
      <h1 className='app-title'>OneDay</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
