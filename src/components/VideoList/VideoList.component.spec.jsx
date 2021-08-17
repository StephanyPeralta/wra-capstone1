import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoList from './VideoList.component';
import VideoProvider from '../../providers/Video';
import videosMock from '../../mocks/youtube-videos-mock.json';

jest.mock('../VideoCard', () => () => <div>VideoCard Mock</div>);

const videos = videosMock.items;

describe('VideoList component', () => {
  it('renders VideoList elements', () => {
    render(
      <VideoProvider>
        <VideoList videos={videos} />
      </VideoProvider>
    );
    expect(screen.getAllByText('VideoCard Mock').length).toEqual(24);
  });
});
