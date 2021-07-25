import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorSection = styled.section`
  margin: 0 60px;
  @media (max-width: 768px) {
    margin: 0 40px;
  }
  @media (max-width: 479px) {
    margin: 0 20px;
  }
`;

const ErrorWrapper = styled.div`
  text-align: center;
  margin: 30px auto;
  max-width: 500px;
`;

const ErrorTitle = styled.h1`
  font-size: 4rem;
  color: #ae90c8;
  margin: 0;
`;

const ErrorText = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  color: #ae90c8;
  margin: 0;
`;

const ErrorLink = styled(Link)`
  color: red;
  text-decoration: none;
  display: block;
  transition: all 0.5s ease;
  &&:hover {
    opacity: 0.9;
  }
`;

const ErrorImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

export { ErrorSection, ErrorWrapper, ErrorTitle, ErrorText, ErrorLink, ErrorImage };
