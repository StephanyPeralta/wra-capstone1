import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideMenuNav = styled.nav`
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 90vh;
  padding: 20px 0 0;
  transition: transform 0.3s ease-in;
  &.open-menu {
    transform: translateX(0);
  }
  @media (max-width: 768px) {
    width: 90px;
    .hidden-tablet {
      display: none;
    }
    .centered-items {
      justify-content: center;
    }
  }
  @media (max-width: 576px) {
    transform: translateX(-100%);
    position: fixed;
    z-index: 999;
  }
`;

const SideMenuLink = styled(Link)`
  color: ${(props) => props.theme.color};
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.2rem 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

const SideMenuText = styled.span`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.4px;
  margin-left: 1rem;
`;

export { SideMenuNav, SideMenuLink, SideMenuText };
