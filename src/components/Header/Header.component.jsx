import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import Search from '../Search';
import ThemeToggle from '../ThemeToggle';
import LoginButton from '../LoginButton';
import { HeaderWrapper, MenuButton, LogoTitle, HeaderSection } from './Header.styled';

function Header({ handleToggleMenu }) {
  return (
    <HeaderWrapper>
      <HeaderSection>
        <MenuButton className="shown-mobile" onClick={() => handleToggleMenu()}>
          <MenuIcon />
        </MenuButton>
        <LogoTitle to="/" className="hidden-mobile">
          YouCool
        </LogoTitle>
      </HeaderSection>
      <Search />
      <HeaderSection>
        <div className="hidden-tablet">
          <ThemeToggle />
        </div>
        <LoginButton />
      </HeaderSection>
    </HeaderWrapper>
  );
}

export default Header;
