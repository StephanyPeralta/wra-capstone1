import React from 'react';
import { render } from '@testing-library/react';

import App from './App.component';
import PreferencesProvider from '../../providers/Preferences';
import AuthProvider from '../../providers/Auth';
import SearchStatusProvider from '../../providers/SearchStatus';

describe('App component', () => {
  it('renders App without crashing', async () => {
      render(
        <AuthProvider>
          <SearchStatusProvider>
            <PreferencesProvider>
              <App />
            </PreferencesProvider>
          </SearchStatusProvider>
        </AuthProvider>
      )
    });
});
