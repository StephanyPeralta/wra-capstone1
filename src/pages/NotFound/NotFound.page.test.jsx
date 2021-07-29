import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import NotFound from './NotFound.page';

afterEach(() => {
  cleanup();
});

describe('NotFound page', () => {
  it('renders NotFound page without crashing', () => {
    render(<NotFound />);
  });
  it('renders NotFound elements', () => {
    render(<NotFound />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found :(')).toBeInTheDocument();
  });
});
