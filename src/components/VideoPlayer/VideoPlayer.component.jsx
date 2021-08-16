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
          <h1 className="video-title">{videoProps.title}</h1>
          <p className="video-description">{videoProps.description}</p>
        </div>
      </VideoPlayerWrapper>
      <RelatedVideos>{children}</RelatedVideos>
    </VideoSectionWrapper>
  );
}

export default VideoPlayer;
