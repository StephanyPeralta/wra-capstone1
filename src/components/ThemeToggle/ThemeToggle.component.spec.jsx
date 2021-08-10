import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ThemeToggle from './ThemeToggle.component';

describe('ThemeToggle component', () => {
  it('renders ThemeToggle', () => {
    render(<ThemeToggle />);
    const themeToggle = screen.getByTitle('themeButton');
    expect(themeToggle).toBeTruthy();
  });
  it('clicking ThemeToggle changes text mode', () => {
    render(<ThemeToggle />);
    const themeToggle = screen.getByTitle('theme-mode');
    fireEvent.click(themeToggle);
    expect(themeToggle.innerHTML).toBe('Light');
    fireEvent.click(themeToggle);
    expect(themeToggle.innerHTML).toBe('Dark');
  });
});
