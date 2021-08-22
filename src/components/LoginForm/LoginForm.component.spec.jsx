import React from 'react';
import { render, screen } from '@testing-library/react';

import LoginForm from './LoginForm.component';

describe('LoginForm component', () => {
  it('renders LoginForm elements', () => {
    render(<LoginForm />);

    const inputUsername = screen.getByPlaceholderText('Username');
    const inputPassword = screen.getByPlaceholderText('Password');
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    const loginButton = screen.getByRole('button', { name: 'Login' });

    expect(inputUsername).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
});
