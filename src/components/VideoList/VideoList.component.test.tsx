import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoList from './VideoList.component';
import VideoProvider from '../../providers/Video';

jest.mock('../VideoCard', () => () => <div>VideoCard Mock</div>);

const videosMock = [
  {
    img: 'testimg.jpg',
    title: 'Test Title',
    description: 'Test Description',
    videoId: 'abc123',
    publishDate: '2014-09-27T01:39:18Z',
    pathVideo: '/test/videoId',
  },
  {
    img: 'testimg.jpg',
    title: 'Test Title',
    description: 'Test Description',
    videoId: 'abc456',
    publishDate: '2014-09-27T01:39:18Z',
    pathVideo: '/test/videoId',
  },
];

describe('VideoList component', () => {
  it('renders VideoList elements', () => {
    render(
      <VideoProvider>
        <VideoList videos={videosMock} />
      </VideoProvider>
    );
    expect(screen.getAllByText('VideoCard Mock').length).toEqual(2);
  });
});
