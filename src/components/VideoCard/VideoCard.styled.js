import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.card};
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  width: 315px;
  height: 332px;
  margin: 0 10px 40px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.3s ease-in-out;
  .card-thumbnail {
    border-radius: 10px 10px 0 0;
    background-color: gray;
    display: block;
    height: 140px;
    width: 100%;
    object-fit: cover;
  }
  .card-content {
    color: ${(props) => props.theme.color};
    padding: 10px;
  }
  .card-title {
    margin: 0;
  }
  .card-date {
    margin: 2px 0;
    font-size: 12px;
    font-weight: 700;
    color: #a3a3a3;
  }
  .card-description {
    font-size: 14px;
    margin: 0;
    line-height: 155%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    background-color: ${(props) => props.theme.hover};
    opacity: 0.9;
  }
`;

const CardWrapperRV = styled(CardWrapper)`
  border-radius: 0;
  box-shadow: none;
  width: 100%;
  height: 110px;
  margin: 0 0 15px;
  .card-link {
    display: flex;
  }
  .card-thumbnail {
    border-radius: 0;
    height: 110px;
    max-width: 40%;
    object-fit: cover;
  }
  .card-content {
    color: ${(props) => props.theme.color};
    padding: 10px;
    max-width: 60%;
  }
  .card-title {
    font-size: 16px;
    margin: 0;
  }
  .card-date {
    margin: 2px 0;
    font-size: 12px;
    font-weight: 700;
    color: #a3a3a3;
  }
`;

export { CardWrapper, CardWrapperRV };
