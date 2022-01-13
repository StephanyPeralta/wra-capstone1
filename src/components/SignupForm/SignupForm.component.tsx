import React, { useState, useRef, useEffect } from 'react';
import { CgCloseO } from 'react-icons/cg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useAuth } from '../../providers/Auth';
import { CloseModalProps } from '../../utils/types';
import {
  Form,
  ButtonWrapper,
  Button,
  FormButton,
  FormTitle,
  ErrorAlert,
} from './SignupForm.styled';

function SignupForm({ onClose }: CloseModalProps) {
  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      onClose();
      toast.success('You Have Successfully Signed up!');
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  }

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <>
      <ButtonWrapper>
        <Button
          data-testid="close-btn"
          className="modal-button"
          type="button"
          onClick={onClose}
        >
          <CgCloseO />
        </Button>
      </ButtonWrapper>

      <FormTitle>Sign Up</FormTitle>

      {error && <ErrorAlert>{error}</ErrorAlert>}

      <Form onSubmit={handleSignup}>
        <label className="form-label" htmlFor="email">
          Email
          <input
            className="form-input"
            type="email"
            id="email"
            placeholder="Email"
            ref={emailRef}
            required
          />
        </label>

        <label className="form-label" htmlFor="password">
          Password
          <input
            className="form-input"
            type="password"
            id="password"
            placeholder="Password"
            ref={passwordRef}
            minLength={6}
            required
          />
        </label>

        <ButtonWrapper className="btn-margin">
          <FormButton type="submit" disabled={loading}>
            Sign Up
          </FormButton>
        </ButtonWrapper>
      </Form>
    </>
  );
}

export default SignupForm;
