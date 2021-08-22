import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  margin: 30px auto;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled(FaSpinner)`
  animation: ${rotate} 1s linear infinite;
`;

const ErrorAlert = styled.div`
  display: flex;
  color: darkred;
  align-items: center;
  background-color: #ffebee;
  border-radius: 10px;
  height: 50px;
  margin: 15px auto;
  padding: 6px 16px;
  width: 100%;
  .error-msg {
    padding: 8px 15px;
  }
`;

const HomeWrapper = styled.div`
  padding: 60px 60px 20px;
  @media (max-width: 768px) {
    padding: 60px 40px 20px;
  }
  @media (max-width: 576px) {
    padding: 40px 20px 0;
  }
`;

export { LoaderContainer, Loader, ErrorAlert, HomeWrapper };
