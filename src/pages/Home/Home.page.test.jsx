import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import Home from './Home.page';

afterEach(() => {
  cleanup();
});

jest.mock('../../components/VideoList', () => () => <div>VideoList Mock</div>);

describe('Home page', () => {
  it('renders Home page without crashing', () => {
    render(<Home />);
  });
  it('renders Home elements', () => {
    render(<Home />);
    expect(screen.getByText('VideoList Mock')).toBeInTheDocument();
  });
});
