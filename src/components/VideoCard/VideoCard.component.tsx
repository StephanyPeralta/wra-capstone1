import React from 'react';
import { Link } from 'react-router-dom';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

import { useAuth } from '../../providers/Auth';
import { usePreferences } from '../../providers/Preferences';
import { useSearchStatus } from '../../providers/SearchStatus';
import { Video } from '../../utils/types';
import { CardWrapper, VideoCardN, VideoCardRV } from './VideoCard.styled';

function VideoCard({
  img,
  title,
  description,
  videoId,
  publishDate,
  pathVideo,
}: Video) {
  const { searchMode, inSearchMode } = useSearchStatus();
  const { isAuthenticated } = useAuth();
  const { addFavVideo, removeFavVideo, isFavorite } = usePreferences();

  const selectedVideo = { img, title, description, videoId, publishDate, pathVideo };

  function handleAddVideo() {
    addFavVideo(selectedVideo);
  }

  function handleRemoveVideo() {
    if (selectedVideo && selectedVideo.videoId) {
      removeFavVideo(selectedVideo.videoId);
    }
  }

  const handleClick = () => {
    inSearchMode(false);
  }

  const VideoCardMain = searchMode ? VideoCardN : VideoCardRV;

  return (
    <VideoCardMain>
      <CardWrapper
        data-testid="video-card"
        onClick={handleClick}
      >
        <Link className={!searchMode ? 'card-link' : ''} to={{pathname: pathVideo}}>
          <img className="card-thumbnail" src={img} alt={title} />
          <div className="card-content">
            <h4 className="card-title">{title}</h4>
            <p className="card-date">{publishDate}</p>
            {searchMode && <p className="card-description">{description}</p>}
          </div>
        </Link>
      </CardWrapper>
      {isAuthenticated &&
        (isFavorite(selectedVideo) ? (
          <div className="fav-wrapper">
            <button data-testid="button-remove" className="fav-button" type="button" onClick={handleRemoveVideo}>
              <BsHeartFill />
            </button>
          </div>
        ) : (
          <div className="fav-wrapper">
            <button data-testid="button-add" className="fav-button" type="button" onClick={handleAddVideo}>
              <BsHeart />
            </button>
          </div>
        ))}
    </VideoCardMain>
  );
}

export default VideoCard;
