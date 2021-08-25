import { SET_THEME, ADD_FAV_VIDEO } from './actionType';

export default function selectorReducer(state, action) {
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
    default:
      throw new Error('This action is invalid');
  }
}
