import React from 'react';

// import videos from '../../mocks/youtube-videos-mock.json';
import { useVideo } from '../../providers/Video';
import { VideoProps } from '../../utils/types';
import VideoCard from '../VideoCard';
import { VideoWrapper } from './VideoList.styled';

type VideoListProps = {
  videos: VideoProps[];
};

function VideoList({ videos }: VideoListProps) {
  const { state } = useVideo();

  return (
    <VideoWrapper
      data-testid="video-list"
      className={!state.searchStatus ? 'related-list' : ''}
    >
      {videos
        .map((video) => (
          <VideoCard
            key={video.videoId}
            videoId={video.videoId}
            img={video.img}
            title={video.title}
            description={video.description}
            publishDate={new Date(video.publishDate).toDateString()}
            pathVideo={video.pathVideo}
          />
        ))}
    </VideoWrapper>
  );
}

export default VideoList;
