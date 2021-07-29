import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #80cbc4;
  color: #000;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  height: 10vh;
  @media (max-width: 768px) {
    padding: 0 40px;
  }
  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    .hidden-tablet {
      display: none;
    }
  }
  @media (max-width: 576px) {
    .hidden-mobile {
      display: none;
    }
    .shown-mobile {
      display: block;
    }
  }
`;

const MenuButton = styled.div`
  cursor: pointer;
  display: none;
`;

const LogoTitle = styled.a`
  padding: 0.3rem;
  font-size: 22px;
`;

export { HeaderWrapper, HeaderMenu, HeaderSection, MenuButton, LogoTitle };
