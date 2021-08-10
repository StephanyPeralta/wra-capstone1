import React from 'react';

import { useVideo } from '../../providers/Video';
import useYoutube from '../../utils/hooks/useYoutube';
import VideoPlayer from '../../components/VideoPlayer';
import VideoList from '../../components/VideoList';
import { LoaderContainer, Loader, ErrorAlert } from './Video.styled';

function VideoPage() {
  const { state } = useVideo();
  const { videos, isLoading, error } = useYoutube(state.searchTerm);

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
      <VideoPlayer videoProps={state.videoProps}>
        <VideoList videos={videos} />
      </VideoPlayer>
    </>
  );
}

export default VideoPage;
