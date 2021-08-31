import {
  SET_THEME,
  ADD_FAV_VIDEO,
  REMOVE_FAV_VIDEO,
  SET_INITIAL_STATE,
} from './actionType';

export default function selectorReducer(state, { type, payload } = {}) {
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload.theme,
      };
    case ADD_FAV_VIDEO:
      return {
        ...state,
        favorites: [...state.favorites, payload.video],
      };
    case REMOVE_FAV_VIDEO:
      return {
        ...state,
        favorites: state.favorites.filter((video) => video.videoId !== payload.videoId),
      };
    case SET_INITIAL_STATE:
      return {
        theme: payload.theme || 'light',
        favorites: payload.favorites ? [...payload.favorites] : [],
      };
    default:
      throw new Error('This action is invalid');
  }
}
