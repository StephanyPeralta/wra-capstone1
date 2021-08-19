import React from 'react';
import { Link } from 'react-router-dom';
import { VscHome } from 'react-icons/vsc';
import { BiLike } from 'react-icons/bi';
import { MdExitToApp } from 'react-icons/md';

import { useVideo } from '../../providers/Video';
import { MenuNav, MenuItem, MenuText } from './SideMenu.styled';

function SideMenu({ sideMenuAction, handleToggleMenu }) {
  const { dispatch } = useVideo();

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
      tabIndex="0"
    >
      <ul aria-label="navbar-list">
        <MenuItem onClick={handleClick} className="centered" data-testid="home-link">
          <Link to="/" className="link-item">
            <VscHome size={27} />
            <MenuText className="hidden-tablet">Home</MenuText>
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClick} className="centered">
          <Link to="/" className="link-item">
            <BiLike size={27} />
            <MenuText className="hidden-tablet">Favorites</MenuText>
          </Link>
        </MenuItem>

        <hr />

        <MenuItem className="centered">
          <Link to="/" className="link-item">
            <MdExitToApp size={27} />
            <MenuText className="hidden-tablet">Log Out</MenuText>
          </Link>
        </MenuItem>

        <hr />
      </ul>
    </MenuNav>
  );
}

export default SideMenu;
