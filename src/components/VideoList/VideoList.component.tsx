import React from 'react';

import { useSearchStatus } from '../../providers/SearchStatus';
import { VideoWrapper } from './VideoList.styled';

interface Props {
  children: React.ReactNode;
};

function VideoList({ children }: Props) {
  const { searchMode } = useSearchStatus();

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
