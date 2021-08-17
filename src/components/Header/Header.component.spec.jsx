import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Header from './Header.component';

jest.mock('../Search', () => () => <div>Search Mock</div>);
jest.mock('../ThemeToggle', () => () => <div>ThemeToggle Mock</div>);
jest.mock('../LoginButton', () => () => <div>LoginButton Mock</div>);

const mockHandler = jest.fn();

describe('Header component', () => {
  it('renders Header elements', () => {
    render(<Header handleToggleMenu={mockHandler} />);

    expect(screen.getByText('YouCool')).toBeInTheDocument();
    expect(screen.getByText('Search Mock')).toBeInTheDocument();
    expect(screen.getByText('ThemeToggle Mock')).toBeInTheDocument();
    expect(screen.getByText('LoginButton Mock')).toBeInTheDocument();
  });

  it('calls onClick prop when clicked MenuButton', () => {
    render(<Header handleToggleMenu={mockHandler} />);

    const MenuButton = screen.getByRole('button', { hidden: true });
    fireEvent.click(MenuButton);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
