import React from 'react';

import videos from '../../mocks/youtube-videos-mock.json';
import VideoCard from '../VideoCard';
import { VideoWrapper } from './VideoList.styled';

function VideoList() {
  return (
    <VideoWrapper>
      {videos.items.slice(1).map((video) => (
        <VideoCard
          key={video.id.videoId}
          img={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          description={video.snippet.description}
          publishTime={video.snippet.publishTime}
        />
      ))}
    </VideoWrapper>
  );
}

export default VideoList;
