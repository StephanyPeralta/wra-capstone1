import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import VideoList from '../../components/VideoList';
import { useSearchStatus } from '../../providers/SearchStatus';
import { useYoutubeSearch } from '../../hooks/useYoutubeSearch';
import VideoCard from '../../components/VideoCard';
import { LoaderContainer, Loader, ErrorAlert, HomeWrapper } from './Home.styled';

function HomePage() {
  const { searchTerm } = useSearchStatus();
  const { videos, isLoading, error } = useYoutubeSearch(searchTerm);

  if (error) {
    return (
      <HomeWrapper>
        <ErrorAlert>
          <FiAlertCircle />
          <span className="error-msg"> Error loading page!</span>
        </ErrorAlert>
      </HomeWrapper>
    );
  }

  if (isLoading) {
    return (
      <LoaderContainer data-testid="loader-icon2">
        <Loader size={60} />
      </LoaderContainer>
    );
  }

  return (
    <HomeWrapper>
      {videos.length === 0 ? (
        <ErrorAlert>
          <FiAlertCircle />
          <span className="error-msg">No videos found</span>
        </ErrorAlert>
      ) : (
        <VideoList>
          {videos.map((video) => (
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
        </VideoList>
      )}
    </HomeWrapper>
  );
}

export default HomePage;
