import React from 'react';

import {
  CardWrapper,
  CardThumbnail,
  CardContent,
  CardTitle,
  CardDescription,
} from './VideoCard.styled';

function VideoCard({ img, title, description }) {
  return (
    <CardWrapper>
      <CardThumbnail src={img} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardWrapper>
  );
}

export default VideoCard;
