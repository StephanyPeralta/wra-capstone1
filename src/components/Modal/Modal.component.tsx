import React from 'react';
import ReactDOM from 'react-dom';

import { ModalWrapper, ModalBackdrop, ModalContent } from './Modal.styled';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: ModalProps) {
  return (
    <ModalWrapper>
      <ModalBackdrop onClick={onClose} />
      <ModalContent className="modal-content">{children}</ModalContent>
    </ModalWrapper>
  );
}

export default function ModalPortal({ children, onClose }: ModalProps) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('portal') as HTMLElement
  );
}
