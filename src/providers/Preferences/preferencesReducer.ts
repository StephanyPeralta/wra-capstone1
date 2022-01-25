import { Video, PreferencesState } from '../../utils/types';

interface PreferencesActionPayload {
  theme: 'light' | 'dark';
  video: Video;
  videoId: string | null;
}

export enum PREFERENCES_ACTIONS {
  SET_THEME = 'SET_THEME',
  ADD_FAV_VIDEO = 'ADD_FAV_VIDEO',
  REMOVE_FAV_VIDEO = 'REMOVE_FAV_VIDEO'
};

type ACTIONTYPE =
  | { type: PREFERENCES_ACTIONS.SET_THEME; payload: Pick<PreferencesActionPayload, 'theme'>}
  | { type: PREFERENCES_ACTIONS.ADD_FAV_VIDEO; payload: Pick<PreferencesActionPayload, 'video'> }
  | { type: PREFERENCES_ACTIONS.REMOVE_FAV_VIDEO; payload: Pick<PreferencesActionPayload, 'videoId'> };

export default function selectorReducer(state: PreferencesState, action: ACTIONTYPE): PreferencesState {
  switch (action.type) {
    case PREFERENCES_ACTIONS.SET_THEME:
      return {
        ...state,
        theme: action.payload.theme,
      };
    case PREFERENCES_ACTIONS.ADD_FAV_VIDEO:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.video],
      };
    case PREFERENCES_ACTIONS.REMOVE_FAV_VIDEO:
      return {
        ...state,
        favorites: state.favorites.filter(
          (video) => video.videoId !== action.payload.videoId
        ),
      };
    default:
      throw new Error('This action is invalid');
  }
}
