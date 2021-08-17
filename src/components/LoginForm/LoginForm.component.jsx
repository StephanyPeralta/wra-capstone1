import React from 'react';

import { Form, Button } from './LoginForm.styled';

function LoginForm() {
  return (
    <>
      <h1>Login</h1>
      <Form className="form">
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
          <Button type="button">Cancel</Button>
          <Button type="submit">Login</Button>
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
