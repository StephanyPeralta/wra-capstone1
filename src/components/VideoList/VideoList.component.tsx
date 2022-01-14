import React from 'react';

import { useVideo } from '../../providers/Video';
import { VideoWrapper } from './VideoList.styled';

interface Props {
  children: React.ReactNode;
};

function VideoList({ children }: Props) {
  const { searchMode } = useVideo();

  return (
    <VideoWrapper
      data-testid="video-list"
      className={!searchMode ? 'related-list' : ''}
    >
      {children}
    </VideoWrapper>
  );
}

export default VideoList;
