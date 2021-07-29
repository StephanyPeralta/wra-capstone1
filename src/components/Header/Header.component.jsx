import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import Search from '../Search';
import ThemeToggle from '../ThemeToggle';
import LoginButton from '../LoginButton';
import {
  HeaderWrapper,
  HeaderMenu,
  MenuButton,
  LogoTitle,
  HeaderSection,
} from './Header.styled';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderMenu>
        <HeaderSection>
          <MenuButton className="shown-mobile">
            <MenuIcon />
          </MenuButton>
          <LogoTitle href="/" className="hidden-mobile">
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
      </HeaderMenu>
    </HeaderWrapper>
  );
}

export default Header;
