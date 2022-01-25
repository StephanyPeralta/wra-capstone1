import { SearchStatusState } from '../../utils/types';

interface SearchStatusActionPayload {
  searchMode: boolean;
  searchTerm: string;
}

export enum SEARCHSTATUS_ACTIONS {
  SET_SEARCH_MODE = 'SET_SEARCH_MODE',
  SET_SEARCH_TERM = 'SET_SEARCH_TERM',
};

export type ACTIONTYPE =
  | { type: SEARCHSTATUS_ACTIONS.SET_SEARCH_MODE; payload: Pick<SearchStatusActionPayload, 'searchMode'>}
  | { type: SEARCHSTATUS_ACTIONS.SET_SEARCH_TERM; payload: Pick<SearchStatusActionPayload, 'searchTerm' | 'searchMode'> }

export default function videoReducer(state: SearchStatusState, action: ACTIONTYPE ): SearchStatusState {
  switch (action.type) {
    case SEARCHSTATUS_ACTIONS.SET_SEARCH_MODE:
      return {
        ...state,
        searchMode: action.payload.searchMode,
      };
    case SEARCHSTATUS_ACTIONS.SET_SEARCH_TERM:
      return {
        ...state,
        searchMode: action.payload.searchMode,
        searchTerm: action.payload.searchTerm,
      };
    default:
      throw new Error('This action is invalid');
  }
}
