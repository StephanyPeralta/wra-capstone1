import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

const HeaderWrapper = styled.div`
  background-color: #80cbc4;
  color: #000;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderMenu = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 60px;
  @media (max-width: 768px) {
    margin: 0 40px;
  }
  @media (max-width: 479px) {
    margin: 0 20px;
  }
`;

const MenuButton = styled(MenuIcon)`
  cursor: pointer;
`;

const LogoTitle = styled.a`
  margin: 0 0 0 15px;
  font-size: 22px;
  @media (max-width: 479px) {
    font-size: 18px;
    margin: 0 0 0 8px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export { HeaderWrapper, HeaderMenu, MenuButton, LogoTitle, HeaderLeft, HeaderRight };
