import { SET_SEARCH_STATUS, SET_SEARCH_TERM, SET_VIDEO_PROPS } from './actionType';

export default function videoReducer(state, action) {
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
