import React from 'react';

import { useSearchStatus } from '../../providers/SearchStatus';
import { VideoWrapper } from './VideoListFav.styled';

interface Props {
  children: React.ReactNode;
};

function VideoListFav({ children }: Props) {
  const { searchMode } = useSearchStatus();

  return (
    <VideoWrapper className={!searchMode ? 'related-list' : ''}>
      {children}
    </VideoWrapper>
  );
}

export default VideoListFav;
