import React from 'react';

import { useSelector } from '../../providers/Selector';
import { useAuth } from '../../providers/Auth';
import {
  VideoSectionWrapper,
  VideoPlayerWrapper,
  IframeVideo,
  RelatedVideos,
  FavButton,
} from './VideoPlayer.styled';

function VideoPlayer({ children, videoProps }) {
  const { addFavVideo, isFavorite } = useSelector();
  const { currentUser } = useAuth();

  const isAuthenticated = Boolean(currentUser);

  function handleAddVideo() {
    addFavVideo(videoProps);
  }

  return (
    <VideoSectionWrapper>
      <VideoPlayerWrapper>
        <IframeVideo
          title="Video Player"
          src={`https://youtube.com/embed/${videoProps.videoId}`}
          frameBorder="0"
          allowFullScreen
        />
        <div className="video-info">
          <h1 data-testid="video-title" className="video-title">
            {videoProps.title}
          </h1>
          {isAuthenticated &&
            (isFavorite(videoProps) ? (
              <FavButton>Remove from Favorites</FavButton>
            ) : (
              <FavButton onClick={handleAddVideo}>Add to Favorites</FavButton>
            ))}
        </div>
        <p data-testid="video-description" className="video-description">
          {videoProps.description}
        </p>
      </VideoPlayerWrapper>
      <RelatedVideos data-testid="related-videos">{children}</RelatedVideos>
    </VideoSectionWrapper>
  );
}

export default VideoPlayer;
