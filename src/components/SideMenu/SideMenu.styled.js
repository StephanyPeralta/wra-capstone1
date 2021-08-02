import styled from 'styled-components';

const SideMenuNav = styled.nav`
  background-color: #ecfcf8;
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

const SideMenuItems = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.2rem 0;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
`;

const SideMenuLink = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.4px;
  margin-left: 1rem;
`;

export { SideMenuNav, SideMenuItems, SideMenuLink };
