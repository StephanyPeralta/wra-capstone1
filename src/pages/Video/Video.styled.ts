import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const VideoSectionWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1800px;
  padding: 0 15px;
  @media (max-width: 992px) {
    flex-direction: column;
  }
  @media (max-width: 576px) {
    padding: 0 10px;
  }
`;

const RelatedVideos = styled.div`
  display: inline;
  flex: 2;
  height: 90vh;
  padding: 15px 10px 0;
  margin: 0 auto;
  overflow: scroll;
  overflow-x: hidden;
  @media (max-width: 992px) {
    flex-direction: column;
    max-height: 30vh;
    padding: 0 15px;
  }
`;

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
  min-height: 50px;
  margin: 15px auto;
  padding: 6px 16px;
  width: 100%;
  .error-msg {
    padding: 8px 15px;
  }
`;



export { VideoSectionWrapper, RelatedVideos, LoaderContainer, Loader, ErrorAlert };
