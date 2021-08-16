import React from 'react';
import { BsPersonFill } from 'react-icons/bs';

import { LoginIconWrapper } from './LoginButton.styled';

function LoginButton() {
  return (
    <LoginIconWrapper>
      <BsPersonFill size={25} />
    </LoginIconWrapper>
  );
}

export default LoginButton;
