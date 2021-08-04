import React from 'react';
import { useHistory } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import { SideMenuNav, SideMenuItems, SideMenuLink } from './SideMenu.styled';

function SideMenu({ sideMenuAction, handleToggleMenu }) {
  const { push } = useHistory();

  return (
    <SideMenuNav
      className={sideMenuAction ? 'open-menu' : ''}
      onClick={() => handleToggleMenu(false)}
      tabIndex="0"
    >
      <ul aria-label="navbar-list">
        <SideMenuItems className="centered-items" tabIndex="0" onClick={() => push('/')}>
          <HomeOutlinedIcon />
          <SideMenuLink className="hidden-tablet">Home</SideMenuLink>
        </SideMenuItems>
        <SideMenuItems className="centered-items" tabIndex="0">
          <ThumbUpAltOutlinedIcon />
          <SideMenuLink className="hidden-tablet">Favorites</SideMenuLink>
        </SideMenuItems>
        <hr />
        <SideMenuItems className="centered-items" tabIndex="0">
          <ExitToAppOutlinedIcon />
          <SideMenuLink className="hidden-tablet">Log Out</SideMenuLink>
        </SideMenuItems>
        <hr />
      </ul>
    </SideMenuNav>
  );
}

export default SideMenu;
