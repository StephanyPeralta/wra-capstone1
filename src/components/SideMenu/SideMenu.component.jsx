import React from 'react';
import { VscHome } from 'react-icons/vsc';
import { BiLike } from 'react-icons/bi';
import { MdExitToApp } from 'react-icons/md';

import { useVideo } from '../../providers/Video';
import { MenuNav, MenuLink, MenuText } from './SideMenu.styled';

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
        <MenuLink
          to="/"
          onClick={handleClick}
          className="centered-items"
          tabIndex="0"
          data-testid="home-link"
        >
          <VscHome size={27} />
          <MenuText className="hidden-tablet">Home</MenuText>
        </MenuLink>
        <MenuLink
          to="/"
          // onClick={handleClick}
          className="centered-items"
          tabIndex="0"
        >
          <BiLike size={27} />
          <MenuText className="hidden-tablet">Favorites</MenuText>
        </MenuLink>
        <hr />
        <MenuLink
          to="/"
          // onClick={handleClick}
          className="centered-items"
          tabIndex="0"
        >
          <MdExitToApp size={27} />
          <MenuText className="hidden-tablet">Log Out</MenuText>
        </MenuLink>
        <hr />
      </ul>
    </MenuNav>
  );
}

export default SideMenu;
