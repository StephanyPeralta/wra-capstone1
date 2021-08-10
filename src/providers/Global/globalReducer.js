import { SET_THEME } from './actionType';

export default function videoReducer(state, action) {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload.theme,
      };
    default:
      throw new Error('This action is invalid');
  }
}
