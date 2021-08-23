import React, { useState } from 'react';
import { BsPersonFill } from 'react-icons/bs';

import ModalPortal from '../Modal';
import LoginForm from '../LoginForm';
import { LoginIconWrapper, Dropdown } from './LoginButton.styled';

function LoginButton() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setOpenDropdown(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <LoginIconWrapper onClick={() => setOpenDropdown(!openDropdown)}>
        <BsPersonFill size={25} />
      </LoginIconWrapper>
      {openDropdown && (
        <Dropdown>
          <button type="button" className="dropdown-button" onClick={openModal}>
            Log In
          </button>
        </Dropdown>
      )}
      {showModal && (
        <ModalPortal>
          <LoginForm onClose={closeModal} />
        </ModalPortal>
      )}
    </div>
  );
}

export default LoginButton;
