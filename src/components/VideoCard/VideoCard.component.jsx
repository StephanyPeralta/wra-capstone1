import React from 'react';
import { Link } from 'react-router-dom';

import { useVideo } from '../../providers/Video.provider';
import {
  CardWrapper,
  CardThumbnail,
  CardContent,
  CardTitle,
  CardDescription,
} from './VideoCard.styled';

function VideoCard({ img, title, description, videoId }) {
  const { dispatch } = useVideo();

  const selectCard = (videoInfo) => () => {
    dispatch({
      type: 'SET_VIDEO_PROPS',
      payload: {
        status: false,
        videoProps: videoInfo,
      },
    });
  };

  return (
    <CardWrapper id={videoId} onClick={selectCard({ title, description, videoId })}>
      <Link to={`/${videoId}`}>
        <CardThumbnail src={img} alt={title} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Link>
    </CardWrapper>
  );
}

export default VideoCard;
