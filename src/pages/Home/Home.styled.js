import styled, { keyframes } from 'styled-components';
import LoopIcon from '@material-ui/icons/Loop';
import Alert from '@material-ui/lab/Alert';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled(LoopIcon)`
  animation: ${rotate} 1s linear infinite;
`;

const ErrorAlert = styled(Alert)`
  margin: 15px;
`;

const HomeWrapper = styled.div`
  padding: 60px;
  @media (max-width: 768px) {
    padding: 60px 40px;
  }
  @media (max-width: 576px) {
    padding: 40px 20px;
  }
`;

export { LoaderContainer, Loader, ErrorAlert, HomeWrapper };
