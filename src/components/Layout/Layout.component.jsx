import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { Themes } from '../../utils/themes';
import { useGlobal } from '../../providers/Global';
import Header from '../Header';
import SideMenu from '../SideMenu';
import { LayoutContainer, SectionWrapper, SectionContainer } from './Layout.styled';

function Layout({ children }) {
  const { state } = useGlobal();
  const [sideMenuAction, setSideMenuAction] = useState(false);

  const handleToggleMenu = () => setSideMenuAction((previousState) => !previousState);

  return (
    <ThemeProvider theme={Themes[state.theme]}>
      <LayoutContainer>
        <Header handleToggleMenu={handleToggleMenu} />
        <SectionWrapper>
          <SideMenu sideMenuAction={sideMenuAction} handleToggleMenu={handleToggleMenu} />
          <SectionContainer>{children}</SectionContainer>
        </SectionWrapper>
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default Layout;
