import React from 'react';
import { Link } from 'react-router-dom';
import { VscHome } from 'react-icons/vsc';
import { BsHeart } from 'react-icons/bs';

import { useVideo } from '../../providers/Video';
import { useAuth } from '../../providers/Auth';
import { MenuNav, MenuItem, MenuText } from './SideMenu.styled';

type SideMenuProps = {
  sideMenuAction: boolean;
  handleToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function SideMenu({ sideMenuAction, handleToggleMenu }: SideMenuProps) {
  const { currentUser } = useAuth();
  const { dispatch } = useVideo();

  const isAuthenticated = Boolean(currentUser);

  const handleClick = () => {
    dispatch({
      type: 'SET_SEARCH_STATUS',
      payload: {
        searchStatus: true,
      },
    });
  };

  return (
    <MenuNav
      className={sideMenuAction ? 'open-menu' : ''}
      onClick={() => handleToggleMenu(false)}
      tabIndex={0}
    >
      <ul aria-label="navbar-list">
        <MenuItem onClick={handleClick} className="centered" data-testid="home-link">
          <Link to="/" className="link-item">
            <VscHome size={27} />
            <MenuText className="hidden-tablet">Home</MenuText>
          </Link>
        </MenuItem>
        <hr />

        {isAuthenticated && (
          <>
            <MenuItem onClick={handleClick} className="centered">
              <Link to="/favorites" className="link-item">
                <BsHeart size={27} />
                <MenuText className="hidden-tablet">Favorites</MenuText>
              </Link>
            </MenuItem>
            <hr />
          </>
        )}
      </ul>
    </MenuNav>
  );
}

export default SideMenu;
