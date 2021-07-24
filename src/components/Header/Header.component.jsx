import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import Search from '../Search';
import ThemeToggle from '../ThemeToggle';
import Login from '../Login';
import {
  HeaderWrapper,
  HeaderMenu,
  LogoTitle,
  HeaderLeft,
  HeaderRight,
} from './Header.styled';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderMenu>
        <HeaderLeft>
          <MenuIcon />
          <LogoTitle>YouCool</LogoTitle>
        </HeaderLeft>
        <Search />
        <HeaderRight>
          <ThemeToggle />
          <Login />
        </HeaderRight>
      </HeaderMenu>
    </HeaderWrapper>
  );
}

export default Header;
