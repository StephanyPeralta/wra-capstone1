import React from 'react';
import { render, screen } from '@testing-library/react';

import PrivateRoute from './PrivateRoute.component';
import { useAuth } from '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  Route: ({ render: render }) => render(),
  Redirect: () => <div>Redirect Mock</div>,
}));

const propsMock = {
  children: <div>Children Mock</div>,
};

describe('PrivateRoute Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders children elements if user is logged in', () => {
    (useAuth as jest.Mock).mockReturnValue({ isAuthenticated: true });

    render(<PrivateRoute {...propsMock} />);

    expect(screen.getByText('Children Mock')).toBeTruthy();
  });

  it('renders Redirect element if user is not logged in', () => {
    (useAuth as jest.Mock).mockReturnValue({ isAuthenticated: false });

    render(<PrivateRoute {...propsMock} />);

    expect(screen.getByText('Redirect Mock')).toBeTruthy();
  });
});