import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import LoginButton from './LoginButton.component';

describe('LoginButton component', () => {
  it('renders LoginButton element', () => {
    render(<LoginButton />);

    const loginIconButton = screen.getByRole('button');
    expect(loginIconButton).toBeInTheDocument();
  });

  it('renders Login Button after clicking the Avatar icon', () => {
    render(<LoginButton />);

    const loginIconButton = screen.getByRole('button');
    fireEvent.click(loginIconButton);

    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });
});
