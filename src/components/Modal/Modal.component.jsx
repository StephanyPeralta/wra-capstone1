import React from 'react';
import ReactDOM from 'react-dom';

import { ModalWrapper } from './Modal.styled';

function Modal({ children }) {
  return (
    <ModalWrapper className="modal">
      <div className="modal-content">{children}</div>
    </ModalWrapper>
  );
}

export default function ModalPortal({ children }) {
  return ReactDOM.createPortal(
    <Modal>{children}</Modal>,
    document.getElementById('portal')
  );
}
