import React, { createContext, useReducer, useContext } from 'react';

import selectorReducer from './selectorReducer';

const initialState = {
  theme: 'light',
  favorites: [],
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
