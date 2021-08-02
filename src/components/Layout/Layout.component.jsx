import React, { useState } from 'react';

import Header from '../Header';
import SideMenu from '../SideMenu';
import { LayoutContainer, SectionWrapper, SectionContainer } from './Layout.styled';

function Layout({ children }) {
  const [sideMenuAction, setSideMenuAction] = useState(false);
  const handleToggleMenu = () => setSideMenuAction((previousState) => !previousState);

  return (
    <LayoutContainer>
      <Header handleToggleMenu={handleToggleMenu} />
      <SectionWrapper>
        <SideMenu sideMenuAction={sideMenuAction} handleToggleMenu={handleToggleMenu} />
        <SectionContainer>{children}</SectionContainer>
      </SectionWrapper>
    </LayoutContainer>
  );
}

export default Layout;
