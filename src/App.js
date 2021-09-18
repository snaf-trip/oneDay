import React, { useState } from "react";
import TodoList from "./components/Todo/TodoList/TodoList.jsx";
import DoneList from "./components/Todo/DoneList/DoneList.jsx";
import ModalWindow from "./components/Modal/ModalWindow/ModalWindow.jsx";
import AddTask from "./components/Modal/ModalContent/AddTask/AddTask.jsx";
import InfoTask from "./components/Modal/ModalContent/infoTask/infoTask.jsx";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState()

  let todosLS = localStorage.getItem('todos');
  if (todosLS !== null) {
    if (todosLS !== JSON.stringify(todos)) {
      setTodos(JSON.parse(todosLS));
    }
  }

  function toggleTodo(id) {
    let changeComplited = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(changeComplited))
    setTodos(changeComplited)
  }

  function deleteTask(id) {
    let del = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== id) {
        del.push(todos[i]);
      }
    }
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(del))
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
          <TodoList todos={todos} onToggle={toggleTodo} deleteTask={deleteTask} setActive={setModalActive} setContent={setModalContent} setTodo={setTodo} />
          <DoneList todos={todos} onToggle={toggleTodo} deleteTask={deleteTask} setActive={setModalActive} setContent={setModalContent} setTodo={setTodo} />
        </div>
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive} >
        {
          modalContent === 'createTask'
            ?
            <AddTask setActive={setModalActive} add={setTodos} todos={todos} />
            :
            <InfoTask setActive={setModalActive} todo={todo} modalContent={modalContent} />
        }
      </ModalWindow>
    </>
  );
}

export default App;
