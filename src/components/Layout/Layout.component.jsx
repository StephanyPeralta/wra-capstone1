import React from 'react';

import Header from '../Header';
import SideMenu from '../SideMenu';
import { LayoutContainer, SectionWrapper } from './Layout.styled';

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      <SectionWrapper>
        <SideMenu />
        {children}
      </SectionWrapper>
    </LayoutContainer>
  );
}

export default Layout;
