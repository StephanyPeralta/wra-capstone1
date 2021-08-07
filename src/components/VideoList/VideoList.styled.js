import styled from 'styled-components';

const VideoWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 2018px) {
    max-width: 1800px;
  }
`;

export { VideoWrapper };