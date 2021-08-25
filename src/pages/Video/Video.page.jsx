import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiAlertCircle } from 'react-icons/fi';

import { useVideo } from '../../providers/Video';
import { useYoutube } from '../../utils/hooks/useYoutube';
import { useSelector } from '../../providers/Selector';
import VideoPlayer from '../../components/VideoPlayer';
import VideoList from '../../components/VideoList';
import VideoListFav from '../../components/VideoListFav';
import { LoaderContainer, Loader, ErrorAlert } from './Video.styled';

function VideoPage() {
  const { state } = useVideo();
  const { videos, isLoading, error } = useYoutube(state.searchTerm);
  const { favorites } = useSelector();
  const { location } = useHistory();

  const VideoListMain = location.pathname.includes('favorites')
    ? VideoListFav
    : VideoList;

  const videoList = location.pathname.includes('favorites') ? favorites : videos;

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
      <VideoPlayer videoProps={state.videoProps}>
        <VideoListMain videos={videoList} />
      </VideoPlayer>
    </>
  );
}

export default VideoPage;
