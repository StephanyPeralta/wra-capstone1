import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ThemeToggle from './ThemeToggle.component';
import SelectorProvider from '../../providers/Selector';

describe('ThemeToggle component', () => {
  it('renders ThemeToggle elements', () => {
    render(
      <SelectorProvider>
        <ThemeToggle />
      </SelectorProvider>
    );

    const themeToggle = screen.getByTitle('theme-mode');

    expect(themeToggle).toBeTruthy();
  });

  it('clicking ThemeToggle changes theme mode', () => {
    render(
      <SelectorProvider>
        <ThemeToggle />
      </SelectorProvider>
    );

    const inputTheme = screen.getByRole('checkbox');

    fireEvent.click(inputTheme);
    expect(inputTheme).toBeChecked();

    fireEvent.click(inputTheme);
    expect(inputTheme).not.toBeChecked();
  });
});
