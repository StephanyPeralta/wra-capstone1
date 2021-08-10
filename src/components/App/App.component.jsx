import React from 'react';

import VideoProvider from '../../providers/Video';
import GlobalProvider from '../../providers/Global';
import Router from '../Router';

function App() {
  return (
    <VideoProvider>
      <GlobalProvider>
        <Router />
      </GlobalProvider>
    </VideoProvider>
  );
}

export default App;
