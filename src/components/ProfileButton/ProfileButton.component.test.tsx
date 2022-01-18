import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ProfileButton from './ProfileButton.component';
import { useAuth } from '../../providers/Auth';
import { useVideo } from '../../providers/Video';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(() => ({ push: mockHistoryPush })),
}));
jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../providers/Video', () => ({
  useVideo: jest.fn(),
}));

const authMock = { isAuthenticated: false, logout: jest.fn() };

const videoProviderMock = {
  searchMode: false,
  inSearchMode: jest.fn(),
};

describe('ProfileButton component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    (useVideo as jest.Mock).mockReturnValue(videoProviderMock);
  });

  it('renders ProfileButton element', () => {
    (useAuth as jest.Mock).mockReturnValue(authMock);

    render(<ProfileButton />);

    const profileIconButton = screen.getByRole('button');
    expect(profileIconButton).toBeInTheDocument();
  });

  it('renders Sign Up and Log In buttons after clicking the Avatar', () => {
    (useAuth as jest.Mock).mockReturnValue(authMock);

    render(<ProfileButton />);

    const profileIconButton = screen.getByRole('button');
    fireEvent.click(profileIconButton);

    const signupButton = screen.getByRole('button', { name: 'Sign Up' });
    const loginButton = screen.getByRole('button', { name: 'Log In' });

    expect(signupButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('renders Log Out Button after clicking the Avatar if user is logged in', () => {
    (useAuth as jest.Mock).mockReturnValue({ ...authMock, isAuthenticated: true });

    render(<ProfileButton />);

    const profileIconButton = screen.getByRole('button');
    fireEvent.click(profileIconButton);

    const logoutButton = screen.getByRole('button', { name: 'Log Out' });

    expect(logoutButton).toBeInTheDocument();
  });

  it('triggers logout action after clicking Log Out button', () => {
    (useAuth as jest.Mock).mockReturnValue({ ...authMock, isAuthenticated: true });

    render(<ProfileButton />);

    const profileIconButton = screen.getByRole('button');
    fireEvent.click(profileIconButton);

    const logoutButton = screen.getByRole('button', { name: 'Log Out' });

    fireEvent.click(logoutButton);

    expect(authMock.logout).toHaveBeenCalledTimes(1);
  });
});
