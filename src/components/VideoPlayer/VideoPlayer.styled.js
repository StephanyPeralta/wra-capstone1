import styled from 'styled-components';

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

export { VideoSectionWrapper, VideoPlayerWrapper, IframeVideo, RelatedVideos, FavButton };
