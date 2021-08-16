import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { useVideo } from '../../providers/Video';
import { useYoutube } from '../../utils/hooks/useYoutube';
import VideoPlayer from '../../components/VideoPlayer';
import VideoList from '../../components/VideoList';
import { LoaderContainer, Loader, ErrorAlert } from './Video.styled';

function VideoPage() {
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
    <>
      <VideoPlayer data-testid="video-player" videoProps={state.videoProps}>
        <VideoList videos={videos} />
      </VideoPlayer>
    </>
  );
}

export default VideoPage;
