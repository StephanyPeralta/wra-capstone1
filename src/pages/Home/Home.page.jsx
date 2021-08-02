import React, { useContext } from 'react';

import VideoList from '../../components/VideoList';
import { VideoContext } from '../../providers/Video.provider';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import { LoaderContainer, Loader, ErrorAlert } from './Home.styled';

function HomePage() {
  const { state } = useContext(VideoContext);
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
    <>
      <VideoList videos={videos} />
    </>
  );
}

export default HomePage;
