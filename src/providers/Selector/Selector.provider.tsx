import React, { createContext, useReducer, useContext, useEffect } from 'react';

import selectorReducer from './selectorReducer';
import { SELECTOR_ACTIONS } from './selectorReducer';
import { storage } from '../../utils/storage';
import { VideoProps, SelectorState } from '../../utils/types';

interface ISelectorContext {
  theme: 'light' | 'dark';
  favorites: VideoProps[];
  changeThemeMode: (isLight: boolean) => void;
  addFavVideo: (video: VideoProps) => void;
  isFavorite: (video: VideoProps) => VideoProps | undefined;
  removeFavVideo: (videoId: string) => void;
}

interface SelectorProviderProps {
  children: React.ReactNode;
}

const initialState: SelectorState = {
  theme: storage.get('theme_storage_key') ?? 'light',
  favorites: storage.get('favorites_storage_key') ?? [],
};

const SelectorContext = createContext<ISelectorContext>({
  theme: 'light',
  favorites: [],
  changeThemeMode: (isLight: boolean) => {},
  addFavVideo: (video: VideoProps) => {},
  isFavorite: (video: VideoProps) => undefined,
  removeFavVideo: (videoId: string) => {},
});

function useSelector() {
  const context = useContext(SelectorContext);
  if (!context) {
    throw new Error(`Can't use "useSelector" without a "SelectorProvider"`);
  }
  return context;
}

function SelectorProvider({ children }: SelectorProviderProps) {
  const [state, dispatch] = useReducer(selectorReducer, initialState);

  useEffect(() => {
    storage.set('theme_storage_key', state.theme);
    storage.set('favorites_storage_key', state.favorites);
  }, [state]);

  const changeThemeMode = (isLight: boolean) => {
    dispatch({ type: SELECTOR_ACTIONS.SET_THEME, payload: { theme: isLight ? 'dark' : 'light' } });
  };

  const addFavVideo = (video: VideoProps) => {
    dispatch({ type: SELECTOR_ACTIONS.ADD_FAV_VIDEO, payload: { video } });
  };

  function isFavorite(video: VideoProps) {
    return state.favorites.find((favorite) => favorite.videoId === video.videoId);
  }

  const removeFavVideo = (videoId: string) => {
    dispatch({ type: SELECTOR_ACTIONS.REMOVE_FAV_VIDEO, payload: { videoId } });
  };

  const value = {
    favorites: state.favorites,
    theme: state.theme,
    changeThemeMode,
    addFavVideo,
    isFavorite,
    removeFavVideo,
  };

  return <SelectorContext.Provider value={value}>{children}</SelectorContext.Provider>;
}

export { useSelector };
export default SelectorProvider;
