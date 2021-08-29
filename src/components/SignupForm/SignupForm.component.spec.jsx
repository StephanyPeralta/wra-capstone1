import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

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
  });

  it('renders SignupForm elements', () => {
    useAuth.mockReturnValue(authMock);

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
    useAuth.mockReturnValue(authMock);

    render(<SignupForm onClose={onCloseMock} />);

    const inputEmail = screen.getByPlaceholderText('Email');
    const inputPassword = screen.getByPlaceholderText('Password');
    const signupButton = screen.getByRole('button', { name: 'Sign Up' });

    fireEvent.change(inputEmail, { target: { value: 'test@test.com' } });
    fireEvent.change(inputPassword, { target: { value: 'password' } });

    fireEvent.click(signupButton);

    expect(authMock.signup).toHaveBeenCalledWith('test@test.com', 'password');
  });
});
