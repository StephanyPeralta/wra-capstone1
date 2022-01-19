import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SignupForm from './SignupForm.component';
import { useAuth } from '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

const authMock = { signup: jest.fn() };

const onCloseMock = jest.fn();

describe('SignupForm component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useAuth as jest.Mock).mockReturnValue(authMock);
  });

  it('renders SignupForm elements', () => {
    render(<SignupForm onClose={onCloseMock} />);

    const cancelButton = screen.getByTestId('close-btn');
    const signupButton = screen.getByRole('button', { name: 'Sign Up' });

    expect(screen.getByRole('heading', { name: 'Sign Up' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
  });

  it('handles submit function with provided data', () => {
    render(<SignupForm onClose={onCloseMock} />);

    const inputEmail = screen.getByPlaceholderText('Email');
    const inputPassword = screen.getByPlaceholderText('Password');
    const signupButton = screen.getByRole('button', { name: 'Sign Up' });

    userEvent.type(inputEmail, 'test@test.com')
    userEvent.type(inputPassword, 'password')

    userEvent.click(signupButton);

    expect(authMock.signup).toHaveBeenCalledWith('test@test.com', 'password');
  });
});
