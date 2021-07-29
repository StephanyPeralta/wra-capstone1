import styled from 'styled-components';

const VideoWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 2018px) {
    max-width: 1800px;
  }
  @media (max-width: 768px) {
    padding: 60px 40px;
  }
  @media (max-width: 576px) {
    padding: 40px 20px;
  }
`;

export { VideoWrapper };
