import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { CgPlayButtonO } from 'react-icons/cg';

import { useSearchStatus } from '../../providers/SearchStatus';
import Search from '../Search';
import ThemeToggle from '../ThemeToggle';
import ProfileButton from '../ProfileButton';
import { HeaderWrapper, MenuButton, LogoTitle, HeaderSection } from './Header.styled';

interface Props {
  handleToggleMenu: () => void;
}

function Header({ handleToggleMenu }: Props) {
  const { inSearchMode } = useSearchStatus();

  const handleClick = () => {
    inSearchMode(true);
  }

  return (
    <HeaderWrapper data-testid="header">
      <HeaderSection>
        <MenuButton className="shown-mobile" onClick={handleToggleMenu}>
          <FiMenu size={27} />
        </MenuButton>
        <LogoTitle to="/" className="hidden-mobile" onClick={handleClick}>
          <CgPlayButtonO size={27} /> <span className="brand-name">YouWize</span>
        </LogoTitle>
      </HeaderSection>
      <Search />
      <HeaderSection>
        <div className="hidden-tablet">
          <ThemeToggle />
        </div>
        <ProfileButton />
      </HeaderSection>
    </HeaderWrapper>
  );
}

export default Header;
