import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Header from './Header.component';
import { useVideo } from '../../providers/Video';

jest.mock('../../providers/Video', () => ({
  useVideo: jest.fn(() => ({ state: jest.fn(), dispatch: jest.fn() })),
}));
jest.mock('../Search', () => () => <div>Search Mock</div>);
jest.mock('../ThemeToggle', () => () => <div>ThemeToggle Mock</div>);
jest.mock('../ProfileButton', () => () => <div>ProfileButton Mock</div>);

const mockHandler = jest.fn();

const dispatch = jest.fn();

const state = {
  searchStatus: false,
  searchTerm: 'wizeline',
  videoProps: {},
};

describe('Header component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Header elements', () => {
    (useVideo as jest.Mock).mockReturnValue({ state, dispatch });

    render(
      <MemoryRouter>
        <Header handleToggleMenu={mockHandler} />
      </MemoryRouter>
    );

    expect(screen.getByText('YouWize')).toBeInTheDocument();
    expect(screen.getByText('Search Mock')).toBeInTheDocument();
    expect(screen.getByText('ThemeToggle Mock')).toBeInTheDocument();
    expect(screen.getByText('ProfileButton Mock')).toBeInTheDocument();
  });

  it('calls onClick prop when clicked MenuButton', () => {
    (useVideo as jest.Mock).mockReturnValue({ state, dispatch });

    render(
      <MemoryRouter>
        <Header handleToggleMenu={mockHandler} />
      </MemoryRouter>
    );

    const menuButton = screen.getByRole('button', { hidden: true });
    fireEvent.click(menuButton);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  it('updates searcStatus to true when clicked LogoTitle', () => {
    (useVideo as jest.Mock).mockReturnValue({ state, dispatch });

    render(
      <MemoryRouter>
        <Header handleToggleMenu={mockHandler} />
      </MemoryRouter>
    );

    const logoTitle = screen.getByText('YouWize');
    fireEvent.click(logoTitle);

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
