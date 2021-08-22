import React, { createContext, useReducer, useContext } from 'react';

import videoReducer from './videoReducer';

const initialState = {
  searchStatus: true,
  searchTerm: 'wizeline',
  videoProps: {},
};

const VideoContext = createContext(null);

function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideo" without a "VideoProvider"`);
  }
  return context;
}

function VideoProvider({ children }) {
  const [state, dispatch] = useReducer(videoReducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
}

export { useVideo };
export default VideoProvider;
