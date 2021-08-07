import styled from 'styled-components';

const CardWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  width: 315px;
  height: 320px;
  margin: 0 10px 40px;
  cursor: pointer;
  transition: all 1s ease;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    opacity: 0.9;
  }
`;

const CardThumbnail = styled.img`
  border-radius: 10px 10px 0 0;
  background-color: gray;
  display: block;
  height: 140px;
  width: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h4`
  margin: 0 0 5px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  margin: 0;
  font-weight: 400;
`;

export { CardWrapper, CardThumbnail, CardContent, CardTitle, CardDescription };
