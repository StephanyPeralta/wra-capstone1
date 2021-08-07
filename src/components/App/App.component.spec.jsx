import React from 'react';
import { render, cleanup } from '@testing-library/react';

import App from './App.component';

afterEach(() => {
  cleanup();
});

describe('App component', () => {
  it('renders App without crashing', () => {
    render(<App />);
  });
});
