import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { ThemeProvider } from 'styled-components';
import { Themes } from '../../utils/themes';
import { useSelector } from '../../providers/Selector';
import Header from '../Header';
import SideMenu from '../SideMenu';
import { LayoutContainer, SectionWrapper, SectionContainer } from './Layout.styled';

function Layout({ children }) {
  const { theme } = useSelector();
  const [sideMenuAction, setSideMenuAction] = useState(false);

  const handleToggleMenu = () => setSideMenuAction((previousState) => !previousState);

  return (
    <ThemeProvider theme={Themes[theme]}>
      <LayoutContainer>
        <ToastContainer />
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
