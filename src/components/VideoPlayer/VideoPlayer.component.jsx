import React from 'react';

import {
  VideoSectionWrapper,
  VideoPlayerWrapper,
  IframeVideo,
  VideoInfo,
  RelatedVideos,
} from './VideoPlayer.styled';

function VideoPlayer({ children, videoProps }) {
  return (
    <VideoSectionWrapper>
      <VideoPlayerWrapper>
        <IframeVideo
          id="videoPlayer"
          title="Video Iframe"
          src={`https://youtube.com/embed/${videoProps.videoId}?autoplay=0`}
          frameBorder="0"
          allowFullScreen
        />
        <VideoInfo>
          <h1>{videoProps.title}</h1>
          <p>{videoProps.description}</p>
        </VideoInfo>
      </VideoPlayerWrapper>
      <RelatedVideos>{children}</RelatedVideos>
    </VideoSectionWrapper>
  );
}

export default VideoPlayer;
