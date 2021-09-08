import React from 'react';
import ReactDOM from 'react-dom';

import { ModalWrapper, ModalBackdrop, ModalContent } from './Modal.styled';

function Modal({ children, onClose }) {
  return (
    <ModalWrapper>
      <ModalBackdrop onClick={onClose} />
      <ModalContent className="modal-content">{children}</ModalContent>
    </ModalWrapper>
  );
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('portal')
  );
}
