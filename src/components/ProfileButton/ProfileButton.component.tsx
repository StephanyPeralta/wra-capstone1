import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useAuth } from '../../providers/Auth';
import { useSearchStatus } from '../../providers/SearchStatus';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import ModalPortal from '../Modal';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import { ProfileIconWrapper, Dropdown } from './ProfileButton.styled';

function ProfileButton() {
  const { isAuthenticated, logout } = useAuth();
  const { inSearchMode } = useSearchStatus();
  const { push } = useHistory();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showModalSignup, setShowModalSignup] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(menuRef, () => {
    setOpenDropdown(false)
  });

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
      inSearchMode(true);
      push('/');
      toast.success('You Have Successfully Logged out!');
    } catch {
      toast.error('Failed to Log out! Please try again later.');
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
        <Dropdown ref={menuRef}>
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
        <ModalPortal onClose={closeModalSignup}>
          <SignupForm onClose={closeModalSignup} />
        </ModalPortal>
      )}
      {showModalLogin && (
        <ModalPortal onClose={closeModalLogin}>
          <LoginForm onClose={closeModalLogin} />
        </ModalPortal>
      )}
    </div>
  );
}

export default ProfileButton;
