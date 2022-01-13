import React, { createContext, useReducer, useContext } from 'react';

import videoReducer, { ACTIONTYPE } from './videoReducer';
import { VideoState } from '../../utils/types';

interface IVideoContext {
  state: VideoState;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

interface VideoProviderProps {
  children: React.ReactNode;
}

const initialState: VideoState = {
  searchStatus: true,
  searchTerm: 'wizeline',
  videoProps: null,
};

const VideoContext = createContext<IVideoContext>({
  state: initialState,
  dispatch: () => {},
});

function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideo" without a "VideoProvider"`);
  }
  return context;
}

function VideoProvider({ children }: VideoProviderProps) {
  const [state, dispatch] = useReducer(videoReducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
}

export { useVideo };
export default VideoProvider;
