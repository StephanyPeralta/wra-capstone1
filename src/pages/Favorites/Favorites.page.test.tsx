import React from 'react';
import { render, screen } from '@testing-library/react';

import FavoritesPage from './Favorites.page';
import { useSelector } from '../../providers/Selector';
import { VideoProps } from '../../utils/types';

type VideoFavProps = {
  videos: VideoProps[];
};

jest.mock('../../providers/Selector', () => ({
  useSelector: jest.fn(),
}));

jest.mock(
  '../../components/VideoListFav',
  () =>
    ({ videos }: VideoFavProps) =>
      videos.map((video) => <div key={video.videoId}>VideoCardFav Mock</div>)
);

const selectorMock = {
  favorites: [
    {
      img: 'testimg.jpg',
      title: 'Test Title',
      description: 'Test Description',
      videoId: 'abc123',
      publishDate: '2014-09-27T01:39:18Z',
      pathVideo: '/test/videoId',
    },
  ],
};

describe('Favorites page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders videoListFav if there are videos to show', () => {
    (useSelector as jest.Mock).mockReturnValue(selectorMock);

    render(<FavoritesPage />);

    const videoListFav = screen.getAllByText('VideoCardFav Mock');

    expect(videoListFav.length).toBe(1);
  });

  it('renders info alert if there are no videos to show', () => {
    (useSelector as jest.Mock).mockReturnValue({ ...selectorMock, favorites: [] });

    render(<FavoritesPage />);

    expect(screen.getByText('No videos in your list, add some!')).toBeInTheDocument();
  });
});
