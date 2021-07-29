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
  background-color: #ae90c8;
  color: black;
  margin: 0 0 0 15px;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(187, 154, 217, 0.8);
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export { LoginIconWrapper };
