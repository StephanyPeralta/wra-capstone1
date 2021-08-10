import React from 'react';
import { Link } from 'react-router-dom';

import { useVideo } from '../../providers/Video';
import { CardWrapper, CardWrapperRV } from './VideoCard.styled';

function VideoCard({ img, title, description, videoId, publishDate }) {
  const { state, dispatch } = useVideo();

  const selectCard = (videoInfo) => () => {
    dispatch({
      type: 'SET_VIDEO_PROPS',
      payload: {
        searchStatus: false,
        videoProps: videoInfo,
      },
    });
  };

  if (!state.searchStatus) {
    return (
      <CardWrapperRV
        id={videoId}
        onClick={selectCard({ title, description, videoId, publishDate })}
      >
        <Link className="card-link" to={`/video/${videoId}`}>
          <img className="card-thumbnail" src={img} alt={title} />
          <div className="card-content">
            <h4 className="card-title">{title}</h4>
            <p className="card-date">{publishDate}</p>
          </div>
        </Link>
      </CardWrapperRV>
    );
  }

  return (
    <CardWrapper
      id={videoId}
      onClick={selectCard({ title, description, videoId, publishDate })}
    >
      <Link to={`/video/${videoId}`}>
        <img className="card-thumbnail" src={img} alt={title} />
        <div className="card-content">
          <h4 className="card-title">{title}</h4>
          <p className="card-date">{publishDate}</p>
          <p className="card-description">{description}</p>
        </div>
      </Link>
    </CardWrapper>
  );
}

export default VideoCard;
