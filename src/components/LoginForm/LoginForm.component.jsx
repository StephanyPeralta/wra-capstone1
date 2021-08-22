import React from 'react';

import { Form, Button, FormTitle } from './LoginForm.styled';

function LoginForm({ onClose }) {
  return (
    <>
      <FormTitle>Log In</FormTitle>
      <Form>
        <label className="form-label" htmlFor="email">
          Email
          <input
            className="form-input"
            type="email"
            id="email"
            placeholder="Email"
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
            required
          />
        </label>

        <div className="button-wrapper">
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Log In</Button>
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
