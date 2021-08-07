import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './Header.component';

jest.mock('../Search', () => () => <div>Search Mock</div>);
jest.mock('../ThemeToggle', () => () => <div>ThemeToggle Mock</div>);
jest.mock('../LoginButton', () => () => <div>LoginButton Mock</div>);

describe('Header component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Header without crashing', () => {
    render(<Header />);
  });
  it('renders Header elements', () => {
    render(<Header />);

    expect(screen.getByText('YouCool')).toBeInTheDocument();
    expect(screen.getByText('Search Mock')).toBeInTheDocument();
    expect(screen.getByText('ThemeToggle Mock')).toBeInTheDocument();
    expect(screen.getByText('LoginButton Mock')).toBeInTheDocument();
  });
});
