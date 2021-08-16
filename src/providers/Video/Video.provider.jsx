import React, { createContext, useReducer, useContext } from 'react';

import videoReducer from './videoReducer';
// import { storage } from '../../utils/storage';
// import { VIDEO_STORAGE_KEY } from '../../utils/constants';

const initialState = {
  searchStatus: true,
  searchTerm: 'wizeline',
  videoProps: {},
};

const VideoContext = createContext(null);

function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`You need a "VideoProvider"`);
  }
  return context;
}

function VideoProvider({ children }) {
  const [state, dispatch] = useReducer(videoReducer, initialState);

  // useEffect(() => {
  //   storage.set(VIDEO_STORAGE_KEY, state);
  // }, [state]);

  const value = {
    state,
    dispatch,
  };

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
}

export { useVideo };
export default VideoProvider;
