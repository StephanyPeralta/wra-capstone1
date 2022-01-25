import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeToggle from './ThemeToggle.component';
import { usePreferences } from '../../providers/Preferences';

jest.mock('../../providers/Preferences', () => ({
  usePreferences: jest.fn(),
}));

const preferencesMock = {
  changeThemeMode: jest.fn(),
  theme: 'light',
};

describe('ThemeToggle component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (usePreferences as jest.Mock).mockReturnValue(preferencesMock);
  });

  it('renders ThemeToggle elements', () => {
    render(<ThemeToggle />);

    const themeToggle = screen.getByTitle('theme-mode');

    expect(themeToggle).toBeTruthy();
  });

  it('clicking ThemeToggle changes theme mode', () => {
    render(<ThemeToggle />);

    const inputTheme = screen.getByRole('checkbox');

    userEvent.click(inputTheme);
;
    expect(preferencesMock.changeThemeMode).toHaveBeenCalledTimes(1);
  });
});
