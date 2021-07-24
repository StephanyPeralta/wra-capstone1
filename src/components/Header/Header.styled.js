import styled from 'styled-components';

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
`;

const LogoTitle = styled.h3`
  margin: 0 0 0 15px;
  font-size: 22px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export { HeaderWrapper, HeaderMenu, LogoTitle, HeaderLeft, HeaderRight };
