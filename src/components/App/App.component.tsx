import React from 'react';

import SelectorProvider from '../../providers/Selector';
import VideoProvider from '../../providers/Video';
import AuthProvider from '../../providers/Auth';
import Router from '../Router';

function App() {
  return (
    <AuthProvider>
      <VideoProvider>
        <SelectorProvider>
          <Router />
        </SelectorProvider>
      </VideoProvider>
    </AuthProvider>
  );
}

export default App;
