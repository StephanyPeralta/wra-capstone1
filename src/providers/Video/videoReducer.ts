import { SET_SEARCH_STATUS, SET_SEARCH_TERM, SET_VIDEO_PROPS } from './actionType';
import { VideoProps, VideoState } from '../../utils/types';

interface VideoActionPayload {
  searchStatus: boolean;
  searchTerm: string;
  videoProps: VideoProps | null;
}

export type ACTIONTYPE =
  | { type: "SET_SEARCH_STATUS"; payload: Pick<VideoActionPayload, 'searchStatus'>}
  | { type: "SET_SEARCH_TERM"; payload: Pick<VideoActionPayload, 'searchTerm' | 'searchStatus'> }
  | { type: "SET_VIDEO_PROPS"; payload: Pick<VideoActionPayload, 'videoProps' | 'searchStatus'> };

export default function videoReducer(state: VideoState, action: ACTIONTYPE ): VideoState {
  switch (action.type) {
    case SET_SEARCH_STATUS:
      return {
        ...state,
        searchStatus: action.payload.searchStatus,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchStatus: action.payload.searchStatus,
        searchTerm: action.payload.searchTerm,
      };
    case SET_VIDEO_PROPS:
      return {
        ...state,
        searchStatus: action.payload.searchStatus,
        videoProps: action.payload.videoProps,
      };
    default:
      throw new Error('This action is invalid');
  }
}
