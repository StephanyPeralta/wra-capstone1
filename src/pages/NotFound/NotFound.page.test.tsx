import React from 'react';
import { useHistory } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import NotFound from './NotFound.page';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(() => ({ push: mockHistoryPush })),
}));

describe('NotFound page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(<NotFound />);
  });

  it('renders NotFound elements', () => {
    expect(screen.getByAltText('page not found')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go Back Home' })).toBeInTheDocument();
  });

  it('redirects to HomePage after clicking ErrorButton', () => {
    (useHistory as jest.Mock).mockReturnValue({ push: mockHistoryPush });

    const errorButton = screen.getByRole('button', { name: 'Go Back Home' });
    fireEvent.click(errorButton);

    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
