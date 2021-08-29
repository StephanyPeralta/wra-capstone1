import styled from 'styled-components';

const FavContainer = styled.div`
  padding: 60px 60px 20px;
  @media (max-width: 768px) {
    padding: 60px 40px 20px;
  }
  @media (max-width: 576px) {
    padding: 40px 20px 0;
  }
`;

const InfoAlert = styled.div`
  display: flex;
  color: #006064;
  align-items: center;
  background-color: #b2ebf2;
  border-radius: 10px;
  min-height: 50px;
  margin: 15px auto;
  padding: 6px 16px;
  width: 100%;
`;

export { FavContainer, InfoAlert };
