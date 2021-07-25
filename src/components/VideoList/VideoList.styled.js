import styled from 'styled-components';

const VideoWrapper = styled.div`
  margin: 0 60px;
  transition: all 1s ease;
  @media (max-width: 768px) {
    margin: 0 40px;
  }
  @media (max-width: 479px) {
    margin: 0 20px;
  }
`;

const VideoFlex = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-gap: 40px 10px;
  justify-content: center; */
  @media (min-width: 1968px) {
    width: 1850px;
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

export { VideoWrapper, VideoFlex, SectionTitle };
