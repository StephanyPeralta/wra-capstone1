import React, { createContext, useReducer, useContext, useEffect } from 'react';

import selectorReducer from './selectorReducer';
import { storage } from '../../utils/storage';

const initialState = {
  theme: storage.get('theme_storage_key') ? storage.get('theme_storage_key') : 'light',
  favorites: storage.get('favorites_storage_key')
    ? storage.get('favorites_storage_key')
    : [],
};

const SelectorContext = createContext(null);

function useSelector() {
  const context = useContext(SelectorContext);
  if (!context) {
    throw new Error(`Can't use "useSelector" without a "SelectorProvider"`);
  }
  return context;
}

function SelectorProvider({ children }) {
  const [state, dispatch] = useReducer(selectorReducer, initialState);

  useEffect(() => {
    storage.set('theme_storage_key', state.theme);
    storage.set('favorites_storage_key', state.favorites);
  }, [state]);

  const changeThemeMode = (e) => {
    const isLight = e.target.checked;
    dispatch({ type: 'SET_THEME', payload: { theme: isLight ? 'dark' : 'light' } });
  };

  const addFavVideo = (video) => {
    dispatch({ type: 'ADD_FAV_VIDEO', payload: { video } });
  };

  function isFavorite(video) {
    return state.favorites.find((favorite) => favorite.videoId === video.videoId);
  }

  const removeFavVideo = (videoId) => {
    dispatch({ type: 'REMOVE_FAV_VIDEO', payload: { videoId } });
  };

  const value = {
    favorites: state.favorites,
    theme: state.theme,
    changeThemeMode,
    addFavVideo,
    removeFavVideo,
    isFavorite,
  };

  return <SelectorContext.Provider value={value}>{children}</SelectorContext.Provider>;
}

export { useSelector };
export default SelectorProvider;
