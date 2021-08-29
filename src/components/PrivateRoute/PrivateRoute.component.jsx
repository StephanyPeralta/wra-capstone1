import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

function PrivateRoute({ children, ...rest }) {
  const { currentUser } = useAuth();
  const isAuthenticated = Boolean(currentUser);

  return (
    <Route {...rest} render={() => (isAuthenticated ? children : <Redirect to="/" />)} />
  );
}

export default PrivateRoute;
