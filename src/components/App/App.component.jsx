import React from 'react';

import VideoProvider from '../../providers/Video';
import SelectorProvider from '../../providers/Selector';
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
