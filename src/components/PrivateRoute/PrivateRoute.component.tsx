import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

interface Props extends RouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children, ...rest }: Props) {
  const { isAuthenticated } = useAuth();

  return (
    <Route {...rest} render={() => (isAuthenticated ? children : <Redirect to="/" />)} />
  );
}

export default PrivateRoute;
