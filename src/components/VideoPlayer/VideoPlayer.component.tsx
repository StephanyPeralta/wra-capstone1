import React from 'react';

import { usePreferences } from '../../providers/Preferences';
import { useAuth } from '../../providers/Auth';
import { Video } from '../../utils/types';
import { VideoPlayerWrapper, IframeVideo, FavButton } from './VideoPlayer.styled';

function VideoPlayer({img, title, description, videoId, publishDate, pathVideo}: Video) {
  const { addFavVideo, removeFavVideo, isFavorite } = usePreferences();
  const { isAuthenticated } = useAuth();

  function handleAddVideo() {
    addFavVideo({img, title, description, videoId, publishDate, pathVideo});
  }

  function handleRemoveVideo() {
    if (videoId) {
      removeFavVideo(videoId);
    }
  }

  return (
    <VideoPlayerWrapper>
      <IframeVideo
        title="Video Player"
        src={`https://youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      />
      <div className="video-info">
        <h1 data-testid="video-title" className="video-title">
          {title}
        </h1>
        {isAuthenticated &&
          (isFavorite({img, title, description, videoId, publishDate, pathVideo}) ? (
            <FavButton onClick={handleRemoveVideo}>Remove from Favorites</FavButton>
          ) : (
            <FavButton onClick={handleAddVideo}>Add to Favorites</FavButton>
          ))}
      </div>
      <p data-testid="video-description" className="video-description">
        {description}
      </p>
    </VideoPlayerWrapper>
  );
}

export default VideoPlayer;
