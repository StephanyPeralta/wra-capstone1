import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import SideMenu from './SideMenu.component';
import { useVideo } from '../../providers/Video';
import { useAuth } from '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../providers/Video', () => ({
  useVideo: jest.fn(() => ({ state: jest.fn(), dispatch: jest.fn() })),
}));

const authMock = { currentUser: false };

const dispatch = jest.fn();

const state = {
  searchStatus: false,
  searchTerm: 'wizeline',
  videoProps: {},
};

const handleToggleMenuMock = jest.fn();

describe('SideMenu component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useVideo as jest.Mock).mockReturnValue({ state, dispatch });
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

  it('updates searcStatus to true when clicked HomeLink', () => {
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

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'SET_SEARCH_STATUS',
        payload: {
          searchStatus: true,
        },
      })
    );
  });

  it('renders Home and Favorites link if a user is authenticated', () => {
    (useAuth as jest.Mock).mockReturnValue({ ...authMock, currentUser: true });

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
