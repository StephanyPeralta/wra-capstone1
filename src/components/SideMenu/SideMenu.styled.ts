import styled from 'styled-components';

const MenuNav = styled.nav`
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
    .centered {
      justify-content: center;
    }
  }
  @media (max-width: 576px) {
    transform: translateX(-100%);
    position: fixed;
    z-index: 999;
  }
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  .link-item {
    color: ${(props) => props.theme.color};
    display: flex;
    align-items: center;
    padding: 0.7rem 1rem;
    width: 100%;
  }
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

const MenuText = styled.span`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.4px;
  margin-left: 1rem;
`;

export { MenuNav, MenuItem, MenuText };
