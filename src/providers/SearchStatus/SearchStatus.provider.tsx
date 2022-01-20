import React, { createContext, useReducer, useContext } from 'react';

import searchStatusReducer from './searchStatusReducer';
import { SEARCHSTATUS_ACTIONS } from './searchStatusReducer';
import { SearchStatusState } from '../../utils/types';

interface ISearchStatusContext {
  searchMode: true | false;
  searchTerm: string;
  inSearchMode: (searching: boolean) => void;
  saveSearchTerm: (term: string) => void;
}

interface SearchProviderProps {
  children: React.ReactNode;
}

const initialState: SearchStatusState = {
  searchMode: true,
  searchTerm: 'wizeline',
};

const SearchStatusContext = createContext<ISearchStatusContext>({
  searchMode: true,
  searchTerm: 'wizeline',
  inSearchMode: () => {},
  saveSearchTerm: (term: string) => {},
});

function useSearchStatus() {
  const context = useContext(SearchStatusContext);
  if (!context) {
    throw new Error(`Can't use "useSearchStatus" without a "SearchStatusProvider"`);
  }
  return context;
}

function SearchStatusProvider({ children }: SearchProviderProps) {
  const [state, dispatch] = useReducer(searchStatusReducer, initialState);

  const inSearchMode = (searching: boolean) => {
    dispatch({ type: SEARCHSTATUS_ACTIONS.SET_SEARCH_MODE, payload: { searchMode: searching } });
  };

  const saveSearchTerm = (term: string) => {
    dispatch({ type: SEARCHSTATUS_ACTIONS.SET_SEARCH_TERM, payload: { searchMode: true, searchTerm: term } });
  };

  const value = {
    searchMode: state.searchMode,
    searchTerm: state.searchTerm,
    inSearchMode,
    saveSearchTerm
  };

  return <SearchStatusContext.Provider value={value}>{children}</SearchStatusContext.Provider>;
}

export { useSearchStatus };
export default SearchStatusProvider;
