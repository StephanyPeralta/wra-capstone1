import styled from 'styled-components';

const VideoSectionWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1800px;
  padding: 15px 15px 0;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const VideoPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
  padding: 15px;
`;

const IframeVideo = styled.iframe`
  display: block;
  width: 100%;
  height: 60%;
  @media (max-width: 992px) {
    height: 40vh;
  }
`;

const RelatedVideos = styled.div`
  display: inline;
  flex: 2;
  height: 90vh;
  padding: 15px 15px 0 0;
  margin: 0 auto;
  overflow: scroll;
  overflow-x: hidden;
  @media (max-width: 992px) {
    flex-direction: column;
    max-height: 30vh;
    padding: 0 15px;
  }
`;

export { VideoSectionWrapper, VideoPlayerWrapper, IframeVideo, RelatedVideos };
