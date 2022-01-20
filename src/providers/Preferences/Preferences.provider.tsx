import React, { createContext, useReducer, useContext, useEffect } from 'react';

import preferencesReducer from './preferencesReducer';
import { PREFERENCES_ACTIONS } from './preferencesReducer';
import { storage } from '../../utils/storage';
import { Video, PreferencesState } from '../../utils/types';

interface IPreferencesContext {
  theme: 'light' | 'dark';
  favorites: Video[];
  changeThemeMode: (isLight: boolean) => void;
  addFavVideo: (video: Video) => void;
  isFavorite: (video: Video) => Video | undefined;
  removeFavVideo: (videoId: string) => void;
}

interface PreferencesProviderProps {
  children: React.ReactNode;
}

const initialState: PreferencesState = {
  theme: storage.get('theme_storage_key') ?? 'light',
  favorites: storage.get('favorites_storage_key') ?? [],
};

const PreferencesContext = createContext<IPreferencesContext>({
  theme: 'light',
  favorites: [],
  changeThemeMode: (isLight: boolean) => {},
  addFavVideo: (video: Video) => {},
  isFavorite: (video: Video) => undefined,
  removeFavVideo: (videoId: string) => {},
});

function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error(`Can't use "usePreferences" without a "PreferencesProvider"`);
  }
  return context;
}

function PreferencesProvider({ children }: PreferencesProviderProps) {
  const [state, dispatch] = useReducer(preferencesReducer, initialState);

  useEffect(() => {
    storage.set('theme_storage_key', state.theme);
    storage.set('favorites_storage_key', state.favorites);
  }, [state]);

  const changeThemeMode = (isLight: boolean) => {
    dispatch({ type: PREFERENCES_ACTIONS.SET_THEME, payload: { theme: isLight ? 'dark' : 'light' } });
  };

  const addFavVideo = (video: Video) => {
    dispatch({ type: PREFERENCES_ACTIONS.ADD_FAV_VIDEO, payload: { video } });
  };

  function isFavorite(video: Video) {
    return state.favorites.find((favorite) => favorite.videoId === video.videoId);
  }

  const removeFavVideo = (videoId: string) => {
    dispatch({ type: PREFERENCES_ACTIONS.REMOVE_FAV_VIDEO, payload: { videoId } });
  };

  const value = {
    favorites: state.favorites,
    theme: state.theme,
    changeThemeMode,
    addFavVideo,
    isFavorite,
    removeFavVideo,
  };

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export { usePreferences };
export default PreferencesProvider;
