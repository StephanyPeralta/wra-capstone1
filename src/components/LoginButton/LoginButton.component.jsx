import React, { useState } from 'react';
import { BsPersonFill } from 'react-icons/bs';

import ModalPortal from '../Modal';
import LoginForm from '../LoginForm';
import { LoginIconWrapper, Dropdown } from './LoginButton.styled';

function LoginButton() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
    setOpen(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <LoginIconWrapper onClick={() => setOpen(!open)}>
        <BsPersonFill size={25} />
      </LoginIconWrapper>
      {open && (
        <Dropdown>
          <button type="button" className="dropdown-button" onClick={handleClick}>
            Log In
          </button>
        </Dropdown>
      )}
      {showModal && (
        <ModalPortal>
          <LoginForm onClose={handleClose} />
        </ModalPortal>
      )}
    </div>
  );
}

export default LoginButton;
