import React, { createContext, useReducer } from 'react';

import videoReducer from './videoReducer';

const initialState = {
  searchStatus: true,
  searchTerm: 'wizeline',
  videoProps: {},
};

const VideoContext = createContext(initialState);

function VideoProvider({ children, selectedState }) {
  const currentState = selectedState || initialState;
  const [state, dispatch] = useReducer(videoReducer, currentState);
  return (
    <VideoContext.Provider value={{ state, dispatch }}>{children}</VideoContext.Provider>
  );
}

export { VideoContext };
export default VideoProvider;
