import React, { useState } from "react";
import TodoList from "./components/Todo/TodoList/TodoList.jsx";
import DoneList from "./components/Todo/DoneList/DoneList.jsx";
import ModalWindow from "./components/Modal/ModalWindow/ModalWindow.jsx";
import AddTask from "./components/Modal/ModalContent/AddTask/AddTask.jsx";

function App() {
  const [modalActive, setModalActive] = useState(true);
  const [modalContent, setModalContent] = useState()
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Task 1' },
    { id: 2, completed: false, title: 'Task 2' },
    { id: 3, completed: false, title: 'Task 3' },
    { id: 4, completed: false, title: 'Task 4' },
    { id: 5, completed: false, title: 'Task 5' }
  ]);

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }))
  }

  function deleteTask(id) {
    let del = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== id) {
        del.push(todos[i]);
      }
    }
    setTodos(del)
  }

  // Открытие модалки для создания задачи
  function addTask() {
    setModalActive(true);
    setModalContent('createTask')
  }

  return (
    <>
      <div className='container'>
        <h1 className='app-title'>OneDay</h1>
        <button onClick={() => addTask()}>add task</button>
        <div className='lists'>
          <TodoList todos={todos} onToggle={toggleTodo} deleteTask={deleteTask} />
          <DoneList todos={todos} onToggle={toggleTodo} deleteTask={deleteTask} />
        </div>
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive} >
        {
          modalContent === 'createTask' ? <AddTask setActive={setModalActive} /> : null
        }
      </ModalWindow>
    </>
  );
}

export default App;
