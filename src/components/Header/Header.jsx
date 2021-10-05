import React from "react";
import './Header.css';

function Header({ addTask, delTasks }) {
  return (
    <div className='header'>
      <h1 className='app-title'>OneDay</h1>
      <div className='header-buttons'>
        <a onClick={() => addTask()} className='header-button header-button--add'>
        </a>
        <a onClick={() => delTasks()} className='header-button header-button--del'>
        </a>
        <a className='header-button header-button--theme'>
        </a>
      </div>
    </div>
  )
}

export default Header;