import React from 'react';

import PreferencesProvider from '../../providers/Preferences';
import SearchStatusProvider from '../../providers/SearchStatus';
import AuthProvider from '../../providers/Auth';
import Router from '../Router';

function App() {
  return (
    <AuthProvider>
      <SearchStatusProvider>
        <PreferencesProvider>
          <Router />
        </PreferencesProvider>
      </SearchStatusProvider>
    </AuthProvider>
  );
}

export default App;
