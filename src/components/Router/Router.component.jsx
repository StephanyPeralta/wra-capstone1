import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../../pages/Home';
import Video from '../../pages/Video';
import NotFound from '../../pages/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/video/:videoId">
            <Video />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
