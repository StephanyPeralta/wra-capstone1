import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoListFav from './VideoListFav.component';
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

describe('VideoListFav component', () => {
  it('renders VideoListFav elements', () => {
    render(
      <VideoProvider>
        <VideoListFav videos={videosMock} />
      </VideoProvider>
    );
    expect(screen.getAllByText('VideoCard Mock').length).toEqual(2);
  });
});
