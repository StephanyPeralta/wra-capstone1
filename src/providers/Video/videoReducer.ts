import { VideoProps, VideoState } from '../../utils/types';

interface VideoActionPayload {
  searchMode: boolean;
  searchTerm: string;
  videoProps: VideoProps | null;
}

export enum VIDEO_ACTIONS {
  SET_SEARCH_MODE = 'SET_SEARCH_MODE',
  SET_SEARCH_TERM = 'SET_SEARCH_TERM',
  SET_VIDEO_PROPS = 'SET_VIDEO_PROPS'
};

export type ACTIONTYPE =
  | { type: VIDEO_ACTIONS.SET_SEARCH_MODE; payload: Pick<VideoActionPayload, 'searchMode'>}
  | { type: VIDEO_ACTIONS.SET_SEARCH_TERM; payload: Pick<VideoActionPayload, 'searchTerm' | 'searchMode'> }
  | { type: VIDEO_ACTIONS.SET_VIDEO_PROPS; payload: Pick<VideoActionPayload, 'videoProps' | 'searchMode'> };

export default function videoReducer(state: VideoState, action: ACTIONTYPE ): VideoState {
  switch (action.type) {
    case VIDEO_ACTIONS.SET_SEARCH_MODE:
      return {
        ...state,
        searchMode: action.payload.searchMode,
      };
    case VIDEO_ACTIONS.SET_SEARCH_TERM:
      return {
        ...state,
        searchMode: action.payload.searchMode,
        searchTerm: action.payload.searchTerm,
      };
    case VIDEO_ACTIONS.SET_VIDEO_PROPS:
      return {
        ...state,
        searchMode: action.payload.searchMode,
        videoProps: action.payload.videoProps,
      };
    default:
      throw new Error('This action is invalid');
  }
}
