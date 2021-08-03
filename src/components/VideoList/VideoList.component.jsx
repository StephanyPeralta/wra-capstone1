import React from 'react';

// import videos from '../../mocks/youtube-videos-mock.json';
import VideoCard from '../VideoCard';
import { VideoWrapper } from './VideoList.styled';

function VideoList(videos) {
  return (
    <VideoWrapper>
      {videos.videos.items
        .filter((video) => video.id.kind === 'youtube#video')
        .map((video) => (
          <VideoCard
            key={video.id.videoId}
            videoId={video.id.videoId}
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
