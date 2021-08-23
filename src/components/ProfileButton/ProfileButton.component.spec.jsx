import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ProfileButton from './ProfileButton.component';

describe('LoginButton component', () => {
  it('renders LoginButton element', () => {
    render(<ProfileButton />);

    const profileIconButton = screen.getByRole('button');
    expect(profileIconButton).toBeInTheDocument();
  });

  it('renders Login Button after clicking the Avatar icon', () => {
    render(<ProfileButton />);

    const profileIconButton = screen.getByRole('button');
    fireEvent.click(profileIconButton);

    const loginButton = screen.getByRole('button', { name: 'Log In' });
    expect(loginButton).toBeInTheDocument();
  });
});
