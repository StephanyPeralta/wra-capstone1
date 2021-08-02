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

export { LoaderContainer, Loader, ErrorAlert };
