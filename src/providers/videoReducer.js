import {
  SET_SEARCH_STATUS,
  SET_SEARCH_TERM,
  SET_VIDEO_PROPS,
  SET_CURRENT_VIDEO,
} from './actionType';

export default function videoReducer(state, action) {
  switch (action.type) {
    case SET_SEARCH_STATUS:
      return {
        ...state,
        searchStatus: action.payload.status,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchStatus: action.payload.status,
        searchTerm: action.payload.searchTerm,
      };
    case SET_VIDEO_PROPS:
      return {
        ...state,
        searchStatus: action.payload.status,
        videoProps: action.payload.videoProps,
      };
    case SET_CURRENT_VIDEO:
      return {
        ...state,
        video: action.payload.video,
      };
    default:
      throw new Error('This action is invalid');
  }
}
