import styled from 'styled-components';

const VideoPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
  padding: 15px;
  height: 90vh;
  overflow: scroll;
  .video-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px 0;
    @media (max-width: 378px) {
      flex-wrap: wrap-reverse;
      justify-content: center;
    }
  }
  .video-title {
    margin: 0;
  }
  .video-description {
    margin: 0 0 15px;
    max-height: 120px;
    overflow: scroll;
  }
`;

const IframeVideo = styled.iframe`
  display: block;
  width: 100%;
  height: 65%;
  @media (max-width: 992px) {
    height: 40vh;
  }
`;

const FavButton = styled.button`
  border-radius: 5px;
  padding: 0.6rem 1rem;
  border: 2px solid ${(props) => props.theme.button};
  background-color: transparent;
  color: ${(props) => props.theme.button};
  cursor: pointer;
  font-size: 16px;
  max-width: 250px;
  margin: 0 0 15px 15px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
  @media (max-width: 378px) {
    width: 100%;
    margin: 0 0 15px;
  }
`;

export { VideoPlayerWrapper, IframeVideo, FavButton };
