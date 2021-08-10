import React, { createContext, useReducer, useContext, useEffect } from 'react';

import globalReducer from './globalReducer';
import { storage } from '../../utils/storage';
import { GLOBAL_STORAGE_KEY } from '../../utils/constants';

const initialState = {
  theme: 'light',
};

const GlobalContext = createContext(null);

function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`You need a "GlobalProvider"`);
  }
  return context;
}

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    storage.set(GLOBAL_STORAGE_KEY, state);
  }, [state]);

  const value = {
    state,
    dispatch,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}

export { useGlobal };
export default GlobalProvider;
