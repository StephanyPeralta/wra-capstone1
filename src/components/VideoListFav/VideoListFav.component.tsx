import React from 'react';

import { useVideo } from '../../providers/Video';
import { VideoProps } from '../../utils/types';
import VideoCard from '../VideoCard';
import { VideoWrapper } from './VideoListFav.styled';

type VideoFavProps = {
  videos: VideoProps[];
};

function VideoListFav({ videos }: VideoFavProps) {
  const { state } = useVideo();

  return (
    <VideoWrapper className={!state.searchStatus ? 'related-list' : ''}>
      {videos.map((video) => (
        <VideoCard
          key={video.videoId}
          videoId={video.videoId}
          img={video.img}
          title={video.title}
          description={video.description}
          publishDate={new Date(video.publishDate).toDateString()}
          pathVideo={`/favorites/${video.videoId}`}
        />
      ))}
    </VideoWrapper>
  );
}

export default VideoListFav;
