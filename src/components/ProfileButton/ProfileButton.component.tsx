import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useAuth } from '../../providers/Auth';
import { useVideo } from '../../providers/Video';
import ModalPortal from '../Modal';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import { ProfileIconWrapper, Dropdown } from './ProfileButton.styled';

function ProfileButton() {
  const { currentUser, logout } = useAuth();
  const { inSearchMode } = useVideo();
  const { push } = useHistory();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showModalSignup, setShowModalSignup] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const isAuthenticated = Boolean(currentUser);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!menuRef.current?.contains(target)) {
      setOpenDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
      inSearchMode();
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
