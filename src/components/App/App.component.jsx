import React from 'react';

import SelectorProvider from '../../providers/Selector';
import VideoProvider from '../../providers/Video';
import Router from '../Router';

function App() {
  return (
    <VideoProvider>
      <SelectorProvider>
        <Router />
      </SelectorProvider>
    </VideoProvider>
  );
}

export default App;
