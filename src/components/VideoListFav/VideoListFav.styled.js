import styled from 'styled-components';

const VideoWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  &.related-list {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 2018px) {
    max-width: 1680px;
  }
  @media (max-width: 989px) {
    justify-content: center;
  }
`;

export { VideoWrapper };
