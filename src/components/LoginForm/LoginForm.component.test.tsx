import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';

import LoginForm from './LoginForm.component';
import { useAuth } from '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

const authMock = { login: jest.fn() };

const onCloseMock = jest.fn();

describe('LoginForm component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useAuth as jest.Mock).mockReturnValue(authMock);
  });

  it('renders LoginForm elements', () => {
    render(<LoginForm onClose={onCloseMock} />);

    const loginTitle = screen.getByRole('heading', { name: 'Log In' });
    const inputEmail = screen.getByPlaceholderText('Email');
    const inputPassword = screen.getByPlaceholderText('Password');
    const cancelButton = screen.getByTestId('close-btn');
    const loginButton = screen.getByRole('button', { name: 'Log In' });

    expect(loginTitle).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('handles submit function with provided data', async () => {
    render(<LoginForm onClose={onCloseMock} />);

    const inputEmail = await screen.getByPlaceholderText('Email');
    const inputPassword = await screen.getByPlaceholderText('Password');
    const loginButton = await screen.getByRole('button', { name: 'Log In' });

    fireEvent.change(inputEmail, { target: { value: 'test@test.com' } });
    fireEvent.change(inputPassword, { target: { value: 'password' } });

   fireEvent.click(loginButton);

    expect(authMock.login).toHaveBeenCalledWith('test@test.com', 'password');
  });
});
