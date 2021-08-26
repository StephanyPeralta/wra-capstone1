import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ProfileButton from './ProfileButton.component';
import { useAuth } from '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

const authMock = { currentUser: jest.fn(), logout: jest.fn() };

describe('ProfileButton component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders ProfileButton element', () => {
    useAuth.mockReturnValue(authMock);

    render(<ProfileButton />);

    const profileIconButton = screen.getByRole('button');
    expect(profileIconButton).toBeInTheDocument();
  });

  it('renders ProfileButton after clicking the Avatar icon', () => {
    useAuth.mockReturnValue(authMock);

    render(<ProfileButton />);

    const profileIconButton = screen.getByRole('button');
    fireEvent.click(profileIconButton);

    const loginButton = screen.getByRole('button', { name: 'Log In' });
    expect(loginButton).toBeInTheDocument();
  });
});
