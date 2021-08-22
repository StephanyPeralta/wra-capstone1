import React from 'react';

import {
  VideoSectionWrapper,
  VideoPlayerWrapper,
  IframeVideo,
  RelatedVideos,
} from './VideoPlayer.styled';

function VideoPlayer({ children, videoProps }) {
  return (
    <VideoSectionWrapper>
      <VideoPlayerWrapper>
        <IframeVideo
          title="Video Player"
          src={`https://youtube.com/embed/${videoProps.videoId}`}
          frameBorder="0"
          allowFullScreen
        />
        <div>
          <h1 data-testid="video-title" className="video-title">
            {videoProps.title}
          </h1>
          <p data-testid="video-description" className="video-description">
            {videoProps.description}
          </p>
        </div>
      </VideoPlayerWrapper>
      <RelatedVideos data-testid="related-videos">{children}</RelatedVideos>
    </VideoSectionWrapper>
  );
}

export default VideoPlayer;
