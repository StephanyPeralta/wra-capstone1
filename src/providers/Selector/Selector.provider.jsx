import React, { createContext, useReducer, useContext } from 'react';

import selectorReducer from './selectorReducer';
// import { storage } from '../../utils/storage';
// import { USER_STORAGE_KEY } from '../../utils/constants';

const initialState = {
  theme: 'light',
};

const SelectorContext = createContext(null);

function useSelector() {
  const context = useContext(SelectorContext);
  if (!context) {
    throw new Error(`You need a "SelectorProvider"`);
  }
  return context;
}

function SelectorProvider({ children }) {
  const [state, dispatch] = useReducer(selectorReducer, initialState);

  // useEffect(() => {
  //   storage.set(USER_STORAGE_KEY, state);
  // }, [state]);

  const value = {
    state,
    dispatch,
  };

  return <SelectorContext.Provider value={value}>{children}</SelectorContext.Provider>;
}

export { useSelector };
export default SelectorProvider;
