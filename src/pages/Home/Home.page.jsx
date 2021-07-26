import React from 'react';

import VideoList from '../../components/VideoList';
import { SectionWrapper, SectionTitle } from './Home.styled';

function HomePage() {
  return (
    <SectionWrapper>
      <SectionTitle>Welcome!</SectionTitle>
      <VideoList />
    </SectionWrapper>
  );
}

export default HomePage;
