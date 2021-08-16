import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import VideoList from '../../components/VideoList';
import { useVideo } from '../../providers/Video';
import { useYoutube } from '../../utils/hooks/useYoutube';
import { LoaderContainer, Loader, ErrorAlert, HomeWrapper } from './Home.styled';

function HomePage() {
  const { state } = useVideo();
  const { videos, isLoading, error } = useYoutube(state.searchTerm);

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
      <LoaderContainer>
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
        <VideoList videos={videos} />
      )}
    </HomeWrapper>
  );
}

export default HomePage;
