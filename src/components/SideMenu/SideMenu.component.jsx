import React from 'react';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import { SideMenuNav, SideMenuLink, SideMenuText } from './SideMenu.styled';

function SideMenu({ sideMenuAction, handleToggleMenu }) {
  return (
    <SideMenuNav
      className={sideMenuAction ? 'open-menu' : ''}
      onClick={() => handleToggleMenu(false)}
      tabIndex="0"
    >
      <ul aria-label="navbar-list">
        <SideMenuLink to="/" className="centered-items" tabIndex="0">
          <HomeOutlinedIcon />
          <SideMenuText className="hidden-tablet">Home</SideMenuText>
        </SideMenuLink>
        <SideMenuLink to="/" className="centered-items" tabIndex="0">
          <ThumbUpAltOutlinedIcon />
          <SideMenuText className="hidden-tablet">Favorites</SideMenuText>
        </SideMenuLink>
        <hr />
        <SideMenuLink to="/" className="centered-items" tabIndex="0">
          <ExitToAppOutlinedIcon />
          <SideMenuText className="hidden-tablet">Log Out</SideMenuText>
        </SideMenuLink>
        <hr />
      </ul>
    </SideMenuNav>
  );
}

export default SideMenu;
