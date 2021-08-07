import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoCard from './VideoCard.component';

const mockVideoCard = {
  title: 'Video Title',
  description: 'Video Description',
  img: 'videoImg.jpg',
  videoId: 16,
};

describe('VideoCard component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders VideoCard properties', () => {
    render(<VideoCard {...mockVideoCard} />);

    expect(screen.getByText(mockVideoCard.title)).toBeInTheDocument();
    expect(screen.getByText(mockVideoCard.description)).toBeInTheDocument();
    expect(screen.getByText(mockVideoCard.img)).toBeInTheDocument();
    expect(screen.getByText(mockVideoCard.id)).toBeInTheDocument();
  });
});
