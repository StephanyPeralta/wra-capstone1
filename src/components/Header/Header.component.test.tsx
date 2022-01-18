import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Header from './Header.component';
import { useVideo } from '../../providers/Video';

jest.mock('../../providers/Video', () => ({
  useVideo: jest.fn(),
}));
jest.mock('../Search', () => () => <div>Search Mock</div>);
jest.mock('../ThemeToggle', () => () => <div>ThemeToggle Mock</div>);
jest.mock('../ProfileButton', () => () => <div>ProfileButton Mock</div>);

const mockHandler = jest.fn();

const videoProviderMock = {
  searchMode: false,
  inSearchMode: jest.fn(),
};

describe('Header component', () => {
  beforeEach(() => {
    (useVideo as jest.Mock).mockReturnValue(videoProviderMock);

    render(
      <MemoryRouter>
        <Header handleToggleMenu={mockHandler} />
      </MemoryRouter>
    );

  });

  it('renders Header elements', () => {

    expect(screen.getByText('YouWize')).toBeInTheDocument();
    expect(screen.getByText('Search Mock')).toBeInTheDocument();
    expect(screen.getByText('ThemeToggle Mock')).toBeInTheDocument();
    expect(screen.getByText('ProfileButton Mock')).toBeInTheDocument();
  });

  it('calls onClick prop when clicked MenuButton', () => {
    const menuButton = screen.getByRole('button', { hidden: true });

    fireEvent.click(menuButton);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  it('calls inSearchMode function when clicked LogoTitle', () => {
    const logoTitle = screen.getByText('YouWize');
    
    fireEvent.click(logoTitle);

    expect(videoProviderMock.inSearchMode).toHaveBeenCalledTimes(1);
  });
});
