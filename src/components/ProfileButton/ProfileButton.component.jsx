import React, { useState } from 'react';
import { BsPersonFill } from 'react-icons/bs';

import { useAuth } from '../../providers/Auth';
import ModalPortal from '../Modal';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import { ProfileIconWrapper, Dropdown } from './ProfileButton.styled';

function ProfileButton() {
  const { currentUser, logout } = useAuth();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showModalSignup, setShowModalSignup] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const isAuthenticated = Boolean(currentUser);

  const openModalSignup = () => {
    setShowModalSignup(true);
    setOpenDropdown(false);
  };

  const closeModalSignup = () => {
    setShowModalSignup(false);
  };

  const openModalLogin = () => {
    setShowModalLogin(true);
    setOpenDropdown(false);
  };

  const closeModalLogin = () => {
    setShowModalLogin(false);
  };

  async function handleLogout() {
    try {
      await logout();
      setOpenDropdown(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <ProfileIconWrapper onClick={() => setOpenDropdown(!openDropdown)}>
        {!isAuthenticated ? (
          <BsPersonFill size={25} />
        ) : (
          <img
            className="profile-img"
            src="https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png"
            alt="Profile"
          />
        )}
      </ProfileIconWrapper>
      {openDropdown && (
        <Dropdown>
          {!isAuthenticated ? (
            <>
              <button type="button" className="dropdown-button" onClick={openModalSignup}>
                Sign Up
              </button>
              <hr />
              <button type="button" className="dropdown-button" onClick={openModalLogin}>
                Log In
              </button>
            </>
          ) : (
            <button type="button" className="dropdown-button" onClick={handleLogout}>
              Log Out
            </button>
          )}
        </Dropdown>
      )}
      {showModalSignup && (
        <ModalPortal>
          <SignupForm onClose={closeModalSignup} />
        </ModalPortal>
      )}
      {showModalLogin && (
        <ModalPortal>
          <LoginForm onClose={closeModalLogin} />
        </ModalPortal>
      )}
    </div>
  );
}

export default ProfileButton;
