import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import SideMenu from './SideMenu.component';
import { useSearchStatus } from '../../providers/SearchStatus';
import { useAuth } from '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../providers/SearchStatus', () => ({
  useSearchStatus: jest.fn(),
}));

const authMock = { isAuthenticated: false };

const searchProviderMock = {
  searchMode: false,
  inSearchMode: jest.fn(),
};

const handleToggleMenuMock = jest.fn();

describe('SideMenu component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useSearchStatus as jest.Mock).mockReturnValue(searchProviderMock);
  });

  it('renders SideMenu elements', () => {
    (useAuth as jest.Mock).mockReturnValue(authMock);

    render(
      <MemoryRouter>
        <SideMenu
          sideMenuAction= {true}
          handleToggleMenu={handleToggleMenuMock}
        />
      </MemoryRouter>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByLabelText('navbar-list')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeTruthy();
  });

  it('calls inSearchMode function when clicked HomeLink', () => {
    (useAuth as jest.Mock).mockReturnValue(authMock);

    render(
      <MemoryRouter>
        <SideMenu
          sideMenuAction={true}
          handleToggleMenu={handleToggleMenuMock}
        />
      </MemoryRouter>
    );

    const homeLink = screen.getByTestId('home-link');
    fireEvent.click(homeLink);

    expect(searchProviderMock.inSearchMode).toHaveBeenCalledTimes(1)
  });

  it('renders Home and Favorites link if a user is authenticated', () => {
    (useAuth as jest.Mock).mockReturnValue({ ...authMock, isAuthenticated: true });

    render(
      <MemoryRouter>
        <SideMenu
          sideMenuAction={true}
          handleToggleMenu={handleToggleMenuMock}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Favorites')).toBeTruthy();
  });
});
