import { SET_SEARCH_MODE, SET_SEARCH_TERM, SET_VIDEO_PROPS } from './actionType';
import { VideoProps, VideoState } from '../../utils/types';

interface VideoActionPayload {
  searchMode: boolean;
  searchTerm: string;
  videoProps: VideoProps | null;
}

export type ACTIONTYPE =
  | { type: "SET_SEARCH_MODE"; payload: Pick<VideoActionPayload, 'searchMode'>}
  | { type: "SET_SEARCH_TERM"; payload: Pick<VideoActionPayload, 'searchTerm' | 'searchMode'> }
  | { type: "SET_VIDEO_PROPS"; payload: Pick<VideoActionPayload, 'videoProps' | 'searchMode'> };

export default function videoReducer(state: VideoState, action: ACTIONTYPE ): VideoState {
  switch (action.type) {
    case SET_SEARCH_MODE:
      return {
        ...state,
        searchMode: action.payload.searchMode,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchMode: action.payload.searchMode,
        searchTerm: action.payload.searchTerm,
      };
    case SET_VIDEO_PROPS:
      return {
        ...state,
        searchMode: action.payload.searchMode,
        videoProps: action.payload.videoProps,
      };
    default:
      throw new Error('This action is invalid');
  }
}
