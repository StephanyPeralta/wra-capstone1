import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FiAlertCircle } from 'react-icons/fi';

import { useVideo } from '../../providers/Video';
import { useYoutube } from '../../hooks/useYoutube';
import { useSelector } from '../../providers/Selector';
import VideoPlayer from '../../components/VideoPlayer';
import VideoList from '../../components/VideoList';
import VideoListFav from '../../components/VideoListFav';
import VideoCard from '../../components/VideoCard';
import { VideoSectionWrapper, RelatedVideos, LoaderContainer, Loader, ErrorAlert } from './Video.styled';

function VideoPage() {
  const { videoProps, searchTerm } = useVideo();
  const { videos, isLoading, error } = useYoutube(searchTerm);
  const { favorites } = useSelector();

  const favoritesMatch = useRouteMatch("/favorites/:videoId");

  const VideoListMain = favoritesMatch?.isExact
    ? VideoListFav
    : VideoList;

  const videoList = favoritesMatch?.isExact ? favorites : videos;

  if (error) {
    return (
      <ErrorAlert>
        <FiAlertCircle />
        <span className="error-msg"> Error loading page!</span>
      </ErrorAlert>
    );
  }

  if (isLoading) {
    return (
      <LoaderContainer data-testid="loader-icon1">
        <Loader size={60} />
      </LoaderContainer>
    );
  }

  return (
    <>
      {videoProps &&
        <VideoSectionWrapper>
          <VideoPlayer  {...videoProps} />
          <RelatedVideos data-testid="related-videos">
            <VideoListMain>
              {videoList
                .map((video) => (
                  <VideoCard
                    key={video.videoId}
                    videoId={video.videoId}
                    img={video.img}
                    title={video.title}
                    description={video.description}
                    publishDate={new Date(video.publishDate).toDateString()}
                    pathVideo={favoritesMatch?.isExact ? `/favorites/${video.videoId}` : video.pathVideo}
                  />
              ))}
            </VideoListMain>
          </RelatedVideos>
        </VideoSectionWrapper>
      }
    </>
  );
}

export default VideoPage;