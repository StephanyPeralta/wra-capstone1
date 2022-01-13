import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import NotFound from '../../pages/NotFound';
import FavoritesPage from '../../pages/Favorites';
import PrivateRoute from '../PrivateRoute';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <PrivateRoute exact path="/favorites">
            <FavoritesPage />
          </PrivateRoute>
          <PrivateRoute exact path="/favorites/:videoId">
            <VideoPage />
          </PrivateRoute>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/video/:videoId">
            <VideoPage />
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
