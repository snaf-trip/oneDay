import React from "react";
import './ModalWindow.css';

function ModalWindow({ active, setActive, children }) {
  return (
    <div className={active ? 'modal-wrapper active' : 'modal-wrapper'} onClick={() => setActive(false)}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default ModalWindow;