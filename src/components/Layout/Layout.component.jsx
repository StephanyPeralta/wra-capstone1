import React from 'react';

import LayoutContainer from './Layout.styled';
import Header from '../Header';

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
}

export default Layout;
