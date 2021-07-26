import styled from 'styled-components';

const SectionWrapper = styled.section`
  margin: 0 60px;
  transition: all 1s ease;
  @media (max-width: 768px) {
    margin: 0 40px;
  }
  @media (max-width: 479px) {
    margin: 0 20px;
  }
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 300;
  margin: 30px 0;
  @media (max-width: 479px) {
    font-size: 2.5rem;
    margin: 20px 0;
  }
`;

export { SectionWrapper, SectionTitle };
