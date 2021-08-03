import styled from 'styled-components';

const VideoSectionWrapper = styled.div`
  display: flex;
  margin: 10px 0 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const VideoPlayerWrapper = styled.div`
  display: inline;
  flex: 8;
`;

const IframeVideo = styled.iframe`
  display: block;
  padding: 15px;
  border: none;
  width: 100%;
  height: 65%;
  @media (max-width: 768px) {
    height: 35vh;
  }
`;

const VideoInfo = styled.div`
  padding: 15px;
`;

const RelatedVideos = styled.div`
  flex: 4;
  display: inline;
  height: 90vh;
  padding: 15px;
  overflow: scroll;
  overflow-x: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 40vh;
  }
`;

export { VideoSectionWrapper, VideoPlayerWrapper, IframeVideo, VideoInfo, RelatedVideos };
