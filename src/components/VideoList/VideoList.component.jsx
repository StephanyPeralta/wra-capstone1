import React from 'react';

// import videos from '../../mocks/youtube-videos-mock.json';
import { useVideo } from '../../providers/Video';
import VideoCard from '../VideoCard';
import { VideoWrapper } from './VideoList.styled';

function VideoList({ videos }) {
  const { state } = useVideo();

  return (
    <VideoWrapper
      data-testid="video-list"
      className={!state.searchStatus ? 'related-list' : ''}
    >
      {videos
        .filter((video) => video.id.kind === 'youtube#video')
        .map((video) => (
          <VideoCard
            key={video.id.videoId}
            videoId={video.id.videoId}
            img={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            description={video.snippet.description}
            publishDate={new Date(video.snippet.publishedAt).toDateString()}
            pathVideo={`/video/${video.id.videoId}`}
          />
        ))}
    </VideoWrapper>
  );
}

export default VideoList;
