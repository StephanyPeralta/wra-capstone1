import React from 'react';
import { render } from '@testing-library/react';

import App from './App.component';

describe('App component', () => {
  it('renders App without crashing', () => {
    render(<App />);
  });
});
