import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  height: 10vh;
  position: sticky;
  top: 0;
  z-index: 100;
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

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
`;

const LogoTitle = styled(Link)`
  padding: 0.3rem;
  font-size: 22px;
  font-weight: 700;
`;

export { HeaderWrapper, HeaderSection, MenuButton, LogoTitle };
