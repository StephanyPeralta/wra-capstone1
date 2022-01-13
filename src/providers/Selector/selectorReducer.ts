import { VideoProps, SelectorState } from '../../utils/types';
import { SET_THEME, ADD_FAV_VIDEO, REMOVE_FAV_VIDEO } from './actionType';

interface SelectorActionPayload {
  theme: 'light' | 'dark';
  video: VideoProps;
  videoId: string | null;
}

type ACTIONTYPE =
  | { type: "SET_THEME"; payload: Pick<SelectorActionPayload, 'theme'>}
  | { type: "ADD_FAV_VIDEO"; payload: Pick<SelectorActionPayload, 'video'> }
  | { type: "REMOVE_FAV_VIDEO"; payload: Pick<SelectorActionPayload, 'videoId'> };

export default function selectorReducer(state: SelectorState, action: ACTIONTYPE): SelectorState {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload.theme,
      };
    case ADD_FAV_VIDEO:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.video],
      };
    case REMOVE_FAV_VIDEO:
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
