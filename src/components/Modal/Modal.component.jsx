import React from 'react';
import ReactDOM from 'react-dom';

import { ModalWrapper } from './Modal.styled';

function Modal({ children, onClose }) {
  return (
    <ModalWrapper className="modal">
      <div className="modal-content">
        <button type="button" onClick={onClose}>
          🅧
        </button>
        {children}
      </div>
    </ModalWrapper>
  );
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('portal')
  );
}
