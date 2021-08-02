import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import VideoProvider from '../../providers/Video.provider';

function App() {
  return (
    <BrowserRouter>
      <VideoProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/video">
              <h1>Videos Page</h1>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </VideoProvider>
    </BrowserRouter>
  );
}

export default App;
