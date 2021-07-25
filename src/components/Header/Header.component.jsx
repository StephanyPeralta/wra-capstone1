import React from 'react';

import Search from '../Search';
import ThemeToggle from '../ThemeToggle';
import LoginButton from '../LoginButton';
import {
  HeaderWrapper,
  HeaderMenu,
  MenuButton,
  LogoTitle,
  HeaderLeft,
  HeaderRight,
} from './Header.styled';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderMenu>
        <HeaderLeft>
          <MenuButton />
          <LogoTitle href="/">YouCool</LogoTitle>
        </HeaderLeft>
        <Search />
        <HeaderRight>
          <ThemeToggle />
          <LoginButton />
        </HeaderRight>
      </HeaderMenu>
    </HeaderWrapper>
  );
}

export default Header;
