import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import SideMenu from './SideMenu.component';
import VideoProvider from '../../providers/Video';

describe('SideMenu component', () => {
  it('renders SideMenu elements', () => {
    render(
      <VideoProvider>
        <MemoryRouter>
          <SideMenu />
        </MemoryRouter>
      </VideoProvider>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByLabelText('navbar-list')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Favorites')).toBeTruthy();
    expect(screen.getByText('Log Out')).toBeTruthy();
  });
});
