import React from 'react';
import PersonIcon from '@material-ui/icons/Person';

import { LoginIconWrapper } from './LoginButton.styled';

function LoginButton() {
  return (
    <LoginIconWrapper>
      <PersonIcon />
    </LoginIconWrapper>
  );
}

export default LoginButton;
