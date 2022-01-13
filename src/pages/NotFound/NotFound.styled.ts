import styled from 'styled-components';

const ErrorWrapper = styled.div`
  height: 100vh;
  text-align: center;
  padding: 40px 60px;
  .error-container {
    max-width: 600px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    padding: 40px;
  }
  @media (max-width: 479px) {
    padding: 20px;
  }
`;

const ErrorImage = styled.img`
  display: block;
  width: 100%;
`;

const ErrorButton = styled.button`
  border-radius: 20px;
  border: 2px solid black;
  background-color: ${(props) => props.theme.button};
  cursor: pointer;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.primary};
  }
`;

export { ErrorWrapper, ErrorImage, ErrorButton };
