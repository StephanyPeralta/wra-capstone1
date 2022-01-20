import React from 'react';
import { useHistory } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Search from './Search.component';
import SearchStatusProvider from '../../providers/SearchStatus';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(() => ({ push: mockHistoryPush })),
}));

describe('Search component', () => {
  beforeEach(() => {
    render(
      <SearchStatusProvider>
        <Search />
      </SearchStatusProvider>
    );
  });

  it('renders SearchInput element', () => {
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('allows to type in SearchInput', () => {
    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'wizeline' } });

    expect((inputElement as HTMLInputElement).value).toBe('wizeline');
  });

  it('redirects to HomePage after press Enter', () => {
    (useHistory as jest.Mock).mockReturnValue({ push: mockHistoryPush });

    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.keyDown(inputElement, { key: 'Enter' });

    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
