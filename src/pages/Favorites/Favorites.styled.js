import styled from 'styled-components';

const FavContainer = styled.div`
  padding: 40px 60px;
  .fav-title {
    margin: 0 10px 20px;
  }
  @media (max-width: 768px) {
    padding: 40px 40px;
  }
  @media (max-width: 576px) {
    padding: 40px 20px;
  }
`;

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
  @media (max-width: 989px) {
    justify-content: center;
  }
  @media (min-width: 990px) {
    width: 670px;
  }
  @media (min-width: 1336px) {
    width: 1005px;
  }
  @media (min-width: 1678px) {
    width: 1340px;
  }
  @media (min-width: 2018px) {
    width: 1680px;
  }
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
`;

export { FavContainer, VideoWrapper, ErrorAlert };
