import { VideoProps, SelectorState } from '../../utils/types';

interface SelectorActionPayload {
  theme: 'light' | 'dark';
  video: VideoProps;
  videoId: string | null;
}

export enum SELECTOR_ACTIONS {
  SET_THEME = 'SET_THEME',
  ADD_FAV_VIDEO = 'ADD_FAV_VIDEO',
  REMOVE_FAV_VIDEO = 'REMOVE_FAV_VIDEO'
};

type ACTIONTYPE =
  | { type: SELECTOR_ACTIONS.SET_THEME; payload: Pick<SelectorActionPayload, 'theme'>}
  | { type: SELECTOR_ACTIONS.ADD_FAV_VIDEO; payload: Pick<SelectorActionPayload, 'video'> }
  | { type: SELECTOR_ACTIONS.REMOVE_FAV_VIDEO; payload: Pick<SelectorActionPayload, 'videoId'> };

export default function selectorReducer(state: SelectorState, action: ACTIONTYPE): SelectorState {
  switch (action.type) {
    case SELECTOR_ACTIONS.SET_THEME:
      return {
        ...state,
        theme: action.payload.theme,
      };
    case SELECTOR_ACTIONS.ADD_FAV_VIDEO:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.video],
      };
    case SELECTOR_ACTIONS.REMOVE_FAV_VIDEO:
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
