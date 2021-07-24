import React from 'react';

import LayoutContainer from './Layout.styled';

function Layout({ children }) {
  return <LayoutContainer>{children}</LayoutContainer>;
}

export default Layout;
