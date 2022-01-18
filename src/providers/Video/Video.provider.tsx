import React, { createContext, useReducer, useContext } from 'react';

import videoReducer from './videoReducer';
import { VIDEO_ACTIONS } from './videoReducer';
import { VideoProps, VideoState } from '../../utils/types';

interface IVideoContext {
  searchMode: true | false;
  searchTerm: string;
  videoProps: VideoProps | null;
  inSearchMode: () => void;
  saveSearchTerm: (term: string) => void;
  getVideoProps: ({ img, title, description, videoId, publishDate, pathVideo }: VideoProps) => void;
}

interface VideoProviderProps {
  children: React.ReactNode;
}

const initialState: VideoState = {
  searchMode: true,
  searchTerm: 'wizeline',
  videoProps: null,
};

const VideoContext = createContext<IVideoContext>({
  searchMode: true,
  searchTerm: 'wizeline',
  videoProps: null,
  inSearchMode: () => {},
  saveSearchTerm: (term: string) => {},
  getVideoProps: ({ img, title, description, videoId, publishDate, pathVideo }: VideoProps) => {},
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

  const inSearchMode = () => {
    dispatch({ type: VIDEO_ACTIONS.SET_SEARCH_MODE, payload: { searchMode: true } });
  };

  const saveSearchTerm = (term: string) => {
    dispatch({ type: VIDEO_ACTIONS.SET_SEARCH_TERM, payload: { searchMode: true, searchTerm: term } });
  };

  const getVideoProps = ({ img, title, description, videoId, publishDate, pathVideo }: VideoProps) => {
    dispatch({ type: VIDEO_ACTIONS.SET_VIDEO_PROPS, payload: { searchMode: false, videoProps: { img, title, description, videoId, publishDate, pathVideo } } });
  };

  const value = {
    searchMode: state.searchMode,
    searchTerm: state.searchTerm,
    videoProps: state.videoProps,
    inSearchMode,
    saveSearchTerm,
    getVideoProps
  };

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
}

export { useVideo };
export default VideoProvider;
