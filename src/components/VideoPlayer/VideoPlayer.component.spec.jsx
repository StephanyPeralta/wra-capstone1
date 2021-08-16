import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoPlayer from './VideoPlayer.component';

const videoPropsMock = {
  img: 'testimg.jpg',
  title: 'Test Title',
  description: 'Test Description',
  videoId: 'abc123',
  publishDate: '2014-09-27T01:39:18Z',
};

const childrenMock = {
  children: <div>A child element</div>,
};

describe('VideoPlayer component', () => {
  it('renders VideoPlayer elements', () => {
    render(<VideoPlayer {...childrenMock} {...videoPropsMock} />);

    const iframe = screen.getByTitle('Video Player');

    expect(iframe).toBeInTheDocument();
    expect(screen.getByText(videoPropsMock.title)).toBeInTheDocument();
    expect(screen.getByText(videoPropsMock.description)).toBeInTheDocument();
    expect(screen.getByText('A child element')).toBeInTheDocument();
  });
});

// How to fix this error: Cannot read property 'videoId' of undefined
