import React, { createContext, useReducer, useContext } from 'react';

import selectorReducer from './selectorReducer';

const initialState = {
  theme: 'light',
};

const SelectorContext = createContext(null);

function useSelector() {
  const context = useContext(SelectorContext);
  if (!context) {
    throw new Error(`Can't use "useSelector" without a "SelectorProvider"`);
  }
  return context;
}

function SelectorProvider({ children }) {
  const [state, dispatch] = useReducer(selectorReducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return <SelectorContext.Provider value={value}>{children}</SelectorContext.Provider>;
}

export { useSelector };
export default SelectorProvider;
