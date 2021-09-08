import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';

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
    useAuth.mockReturnValue(authMock);
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

  it('handles submit function with provided data', async () => {
    render(<SignupForm onClose={onCloseMock} />);

    const inputEmail = screen.getByPlaceholderText('Email');
    const inputPassword = screen.getByPlaceholderText('Password');
    const signupButton = screen.getByRole('button', { name: 'Sign Up' });

    fireEvent.change(inputEmail, { target: { value: 'test@test.com' } });
    fireEvent.change(inputPassword, { target: { value: 'password' } });

    await act(async () => fireEvent.click(signupButton));

    expect(authMock.signup).toHaveBeenCalledWith('test@test.com', 'password');
  });
});
