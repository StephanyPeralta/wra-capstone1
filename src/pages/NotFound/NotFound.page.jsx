import React from 'react';

import {
  ErrorSection,
  ErrorWrapper,
  ErrorTitle,
  ErrorText,
  ErrorLink,
  ErrorImage,
} from './NotFound.styled';

function NotFoundPage() {
  return (
    <ErrorSection>
      <ErrorWrapper>
        <ErrorTitle>404</ErrorTitle>
        <ErrorText>Page Not Found :(</ErrorText>
        <ErrorLink href="/">
          <ErrorImage src="404.gif" alt="page not found" />
        </ErrorLink>
      </ErrorWrapper>
    </ErrorSection>
  );
}

export default NotFoundPage;
