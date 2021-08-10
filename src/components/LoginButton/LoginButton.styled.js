import styled from 'styled-components';

const LoginIconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 2px solid black;
  background-color: ${(props) => props.theme.button};
  color: black;
  margin: 0 0 0 15px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export { LoginIconWrapper };
