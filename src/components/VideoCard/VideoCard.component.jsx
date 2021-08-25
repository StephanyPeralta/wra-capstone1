import React from 'react';
import { Link } from 'react-router-dom';

import { useVideo } from '../../providers/Video';
import { CardWrapperMain, CardWrapperRV } from './VideoCard.styled';

function VideoCard({ img, title, description, videoId, publishDate, pathVideo }) {
  const { state, dispatch } = useVideo();

  const currentCard = (videoInfo) => () => {
    dispatch({
      type: 'SET_VIDEO_PROPS',
      payload: {
        searchStatus: false,
        videoProps: videoInfo,
      },
    });
  };

  const CardWrapper = state.searchStatus ? CardWrapperMain : CardWrapperRV;

  return (
    <CardWrapper
      data-testid="video-card"
      onClick={currentCard({ img, title, description, videoId, publishDate, pathVideo })}
    >
      <Link className={!state.searchStatus ? 'card-link' : ''} to={pathVideo}>
        <img className="card-thumbnail" src={img} alt={title} />
        <div className="card-content">
          <h4 className="card-title">{title}</h4>
          <p className="card-date">{publishDate}</p>
          {state.searchStatus && <p className="card-description">{description}</p>}
        </div>
      </Link>
    </CardWrapper>
  );
}

export default VideoCard;
