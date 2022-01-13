import React from 'react';
import { Link } from 'react-router-dom';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

import { useAuth } from '../../providers/Auth';
import { useSelector } from '../../providers/Selector';
import { useVideo } from '../../providers/Video';
import { VideoProps } from '../../utils/types';
import { CardWrapper, VideoCardN, VideoCardRV } from './VideoCard.styled';

function VideoCard({
  img,
  title,
  description,
  videoId,
  publishDate,
  pathVideo,
}: VideoProps) {
  const { state, dispatch } = useVideo();
  const { currentUser } = useAuth();
  const { addFavVideo, removeFavVideo, isFavorite } = useSelector();

  const isAuthenticated = Boolean(currentUser);

  const currentCard = (videoInfo: VideoProps) => () => {
    dispatch({
      type: 'SET_VIDEO_PROPS',
      payload: {
        searchStatus: false,
        videoProps: videoInfo,
      },
    });
  };

  const selectedVideo = { img, title, description, videoId, publishDate, pathVideo };

  function handleAddVideo() {
    addFavVideo(selectedVideo);
  }

  function handleRemoveVideo() {
    if (selectedVideo && selectedVideo.videoId) {
      removeFavVideo(selectedVideo.videoId);
    }
  }

  const VideoCardMain = state.searchStatus ? VideoCardN : VideoCardRV;

  return (
    <VideoCardMain>
      <CardWrapper
        data-testid="video-card"
        onClick={currentCard({
          img,
          title,
          description,
          videoId,
          publishDate,
          pathVideo,
        })}
      >
        <Link className={!state.searchStatus ? 'card-link' : ''} to={{pathname: pathVideo}}>
          <img className="card-thumbnail" src={img} alt={title} />
          <div className="card-content">
            <h4 className="card-title">{title}</h4>
            <p className="card-date">{publishDate}</p>
            {state.searchStatus && <p className="card-description">{description}</p>}
          </div>
        </Link>
      </CardWrapper>
      {isAuthenticated &&
        (isFavorite(selectedVideo) ? (
          <div className="fav-wrapper">
            <button className="fav-button" type="button" onClick={handleRemoveVideo}>
              <BsHeartFill />
            </button>
          </div>
        ) : (
          <div className="fav-wrapper">
            <button className="fav-button" type="button" onClick={handleAddVideo}>
              <BsHeart />
            </button>
          </div>
        ))}
    </VideoCardMain>
  );
}

export default VideoCard;
