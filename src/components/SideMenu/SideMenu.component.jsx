import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { SideMenuNav, SideMenuItems, SideMenuLink } from './SideMenu.styled';

function SideMenu() {
  return (
    <SideMenuNav>
      <ul aria-label="navbar-list">
        <SideMenuItems className="centered-items">
          <HomeIcon />
          <SideMenuLink className="hidden-tablet">Home</SideMenuLink>
        </SideMenuItems>
        <SideMenuItems className="centered-items">
          <ThumbUpIcon />
          <SideMenuLink className="hidden-tablet">Favorites</SideMenuLink>
        </SideMenuItems>
        <hr />
        <SideMenuItems className="centered-items">
          <ExitToAppIcon />
          <SideMenuLink className="hidden-tablet">Log Out</SideMenuLink>
        </SideMenuItems>
        <hr />
      </ul>
    </SideMenuNav>
  );
}

export default SideMenu;
