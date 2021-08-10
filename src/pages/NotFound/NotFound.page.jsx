import React from 'react';
import { useHistory } from 'react-router-dom';

import { ErrorWrapper, ErrorImage, ErrorButton } from './NotFound.styled';

function NotFoundPage() {
  const { push } = useHistory();

  return (
    <ErrorWrapper>
      <div className="error-container">
        <ErrorImage src="error404.svg" alt="page not found" />
        <ErrorButton onClick={() => push('/')}>Go Back Home</ErrorButton>
      </div>
    </ErrorWrapper>
  );
}

export default NotFoundPage;
