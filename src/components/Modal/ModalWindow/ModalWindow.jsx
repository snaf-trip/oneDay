import React from "react";
import './ModalWindow.css';
import { clearModal } from "../../../utils/clearModal";

function ModalWindow({ active, setActive, children }) {
  return (
    <div className={active ? 'modal-wrapper active' : 'modal-wrapper'} onClick={() => clearModal(setActive)}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default ModalWindow;