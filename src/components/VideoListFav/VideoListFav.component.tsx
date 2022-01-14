import React from 'react';

import { useVideo } from '../../providers/Video';
import { VideoWrapper } from './VideoListFav.styled';

interface Props {
  children: React.ReactNode;
};

function VideoListFav({ children }: Props) {
  const { searchMode } = useVideo();

  return (
    <VideoWrapper className={!searchMode ? 'related-list' : ''}>
      {children}
    </VideoWrapper>
  );
}

export default VideoListFav;
