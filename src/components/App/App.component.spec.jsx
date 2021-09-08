import React from 'react';
import { render, act } from '@testing-library/react';

import App from './App.component';
import SelectorProvider from '../../providers/Selector';
import AuthProvider from '../../providers/Auth';
import VideoProvider from '../../providers/Video';

describe('App component', () => {
  it('renders App without crashing', async () => {
    await act(async () =>
      render(
        <AuthProvider>
          <VideoProvider>
            <SelectorProvider>
              <App />
            </SelectorProvider>
          </VideoProvider>
        </AuthProvider>
      )
    );
  });
});
