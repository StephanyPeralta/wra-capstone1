import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import SideMenu from './SideMenu.component';

afterEach(() => {
  cleanup();
});

describe('SideMenu component', () => {
  it('renders SideMenu without crashing', () => {
    render(<SideMenu />);
  });
  it('renders SideMenu elements', () => {
    render(<SideMenu />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByLabelText('navbar-list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).not.toBe(0);
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Favorites')).toBeTruthy();
    expect(screen.getByText('Log Out')).toBeTruthy();
  });
});
