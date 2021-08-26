import React, { useState, useRef } from 'react';
import { CgCloseO } from 'react-icons/cg';

import { useAuth } from '../../providers/Auth';
import {
  Form,
  ButtonWrapper,
  Button,
  FormButton,
  FormTitle,
  ErrorAlert,
} from './LoginForm.styled';

function LoginForm({ onClose }) {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      onClose();
    } catch {
      setError('Incorrect email or password');
    }

    setLoading(false);
  }

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

      <FormTitle>Log In</FormTitle>

      {error && <ErrorAlert>{error}</ErrorAlert>}

      <Form data-testid="login-form" onSubmit={handleLogin}>
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
            minLength="6"
            required
          />
        </label>

        <ButtonWrapper className="btn-margin">
          <FormButton type="submit" disabled={loading}>
            Log In
          </FormButton>
        </ButtonWrapper>
      </Form>
    </>
  );
}

export default LoginForm;
