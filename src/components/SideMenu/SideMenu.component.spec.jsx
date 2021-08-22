import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import SideMenu from './SideMenu.component';
import { useVideo } from '../../providers/Video';

jest.mock('../../providers/Video', () => ({
  useVideo: jest.fn(() => ({ state: jest.fn(), dispatch: jest.fn() })),
}));

const dispatch = jest.fn();

const state = {
  searchStatus: false,
  searchTerm: 'wizeline',
  videoProps: {},
};

const sideMenuActionMock = jest.fn();
const handleToggleMenuMock = jest.fn();

describe('SideMenu component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders SideMenu elements', () => {
    useVideo.mockReturnValue({ state, dispatch });

    render(
      <MemoryRouter>
        <SideMenu
          sideMenuAction={sideMenuActionMock}
          handleToggleMenu={handleToggleMenuMock}
        />
      </MemoryRouter>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByLabelText('navbar-list')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Favorites')).toBeTruthy();
    expect(screen.getByText('Log Out')).toBeTruthy();
  });

  it('updates searcStatus to true when clicked HomeLink', () => {
    useVideo.mockReturnValue({ state, dispatch });

    render(
      <MemoryRouter>
        <SideMenu
          sideMenuAction={sideMenuActionMock}
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
});
