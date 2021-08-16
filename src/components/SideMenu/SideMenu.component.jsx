import React from 'react';
import { VscHome } from 'react-icons/vsc';
import { BiLike } from 'react-icons/bi';
import { MdExitToApp } from 'react-icons/md';

import { useVideo } from '../../providers/Video';
import { SideMenuNav, SideMenuLink, SideMenuText } from './SideMenu.styled';

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
    <SideMenuNav
      className={sideMenuAction ? 'open-menu' : ''}
      onClick={() => handleToggleMenu(false)}
      tabIndex="0"
    >
      <ul aria-label="navbar-list">
        <SideMenuLink
          to="/"
          onClick={handleClick}
          className="centered-items"
          tabIndex="0"
        >
          <VscHome size={27} />
          <SideMenuText className="hidden-tablet">Home</SideMenuText>
        </SideMenuLink>
        <SideMenuLink
          to="/"
          onClick={handleClick}
          className="centered-items"
          tabIndex="0"
        >
          <BiLike size={27} />
          <SideMenuText className="hidden-tablet">Favorites</SideMenuText>
        </SideMenuLink>
        <hr />
        <SideMenuLink
          to="/"
          onClick={handleClick}
          className="centered-items"
          tabIndex="0"
        >
          <MdExitToApp size={27} />
          <SideMenuText className="hidden-tablet">Log Out</SideMenuText>
        </SideMenuLink>
        <hr />
      </ul>
    </SideMenuNav>
  );
}

export default SideMenu;
