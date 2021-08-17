import React from 'react';

import { Form, Button, FormTitle } from './LoginForm.styled';

function LoginForm({ onClose }) {
  return (
    <>
      <FormTitle>Login</FormTitle>
      <Form>
        <label className="form-label" htmlFor="username">
          Username
          <input
            className="form-input"
            type="text"
            id="username"
            placeholder="Username"
          />
        </label>

        <label className="form-label" htmlFor="password">
          Password
          <input
            className="form-input"
            type="password"
            id="password"
            placeholder="Password"
          />
        </label>

        <div className="button-wrapper">
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Login</Button>
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
