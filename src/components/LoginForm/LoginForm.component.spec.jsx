import React from 'react';
import { render, screen } from '@testing-library/react';

import LoginForm from './LoginForm.component';

describe('LoginForm component', () => {
  it('renders LoginForm elements', () => {
    render(<LoginForm />);

    const inputUsername = screen.getByPlaceholderText('Email');
    const inputPassword = screen.getByPlaceholderText('Password');
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    const loginButton = screen.getByRole('button', { name: 'Log In' });

    expect(inputUsername).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
});
