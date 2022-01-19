import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeToggle from './ThemeToggle.component';
import { useSelector } from '../../providers/Selector';

jest.mock('../../providers/Selector', () => ({
  useSelector: jest.fn(),
}));

const selectorMock = {
  changeThemeMode: jest.fn(),
  theme: 'light',
};

describe('ThemeToggle component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useSelector as jest.Mock).mockReturnValue(selectorMock);
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
    expect(selectorMock.changeThemeMode).toHaveBeenCalledTimes(1);
  });
});
