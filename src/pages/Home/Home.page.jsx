import React from 'react';

import VideoList from '../../components/VideoList';
import { useVideo } from '../../providers/Video.provider';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import { LoaderContainer, Loader, ErrorAlert, HomeWrapper } from './Home.styled';

function HomePage() {
  const { state } = useVideo();
  const { videos, isLoading, error } = useYoutubeApi(state.searchTerm);

  if (error) {
    return <ErrorAlert severity="error">Error loading page!</ErrorAlert>;
  }
  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader style={{ fontSize: 60 }} />
      </LoaderContainer>
    );
  }

  return (
    <HomeWrapper>
      {videos.items.length === 0 ? (
        <ErrorAlert severity="error">No videos found</ErrorAlert>
      ) : (
        <VideoList videos={videos} />
      )}
    </HomeWrapper>
  );
}

export default HomePage;
