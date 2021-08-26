import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ThemeToggle from './ThemeToggle.component';
import SelectorProvider from '../../providers/Selector';
import AuthProvider from '../../providers/Auth';

describe('ThemeToggle component', () => {
  it('renders ThemeToggle elements', () => {
    render(
      <AuthProvider>
        <SelectorProvider>
          <ThemeToggle />
        </SelectorProvider>
      </AuthProvider>
    );

    const themeToggle = screen.getByTitle('theme-mode');

    expect(themeToggle).toBeTruthy();
  });

  it('clicking ThemeToggle changes theme mode', () => {
    render(
      <AuthProvider>
        <SelectorProvider>
          <ThemeToggle />
        </SelectorProvider>
      </AuthProvider>
    );

    const inputTheme = screen.getByRole('checkbox');

    fireEvent.click(inputTheme);
    expect(inputTheme).toBeChecked();

    fireEvent.click(inputTheme);
    expect(inputTheme).not.toBeChecked();
  });
});
