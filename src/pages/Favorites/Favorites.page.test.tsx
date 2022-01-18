import React from 'react';
import { render, screen } from '@testing-library/react';

import FavoritesPage from './Favorites.page';
import { useAuth } from '../../providers/Auth';
import { useSelector } from '../../providers/Selector';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../providers/Selector', () => ({
  useSelector: jest.fn(),
}));
jest.mock('../../components/VideoCard', () => () => <div>VideoCard Mock</div>)

const authMock = { isAuthenticated: true };

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
    {
      img: 'testimg.jpg',
      title: 'Test Title',
      description: 'Test Description',
      videoId: 'abc456',
      publishDate: '2014-09-27T01:39:18Z',
      pathVideo: '/test/videoId',
    },
  ],
};


describe('Favorites page', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useAuth as jest.Mock).mockReturnValue(authMock);
  });

  it('renders videoListFav if there are videos to show', () => {
    (useSelector as jest.Mock).mockReturnValue(selectorMock);

    render(<FavoritesPage />);

    const videoListFav = screen.getAllByText('VideoCard Mock');

    expect(videoListFav.length).toBe(2);
  });

  it('renders info alert if there are no videos to show', () => {
    (useSelector as jest.Mock).mockReturnValue({ ...selectorMock, favorites: [] });

    render(<FavoritesPage />);

    expect(screen.getByText('No videos in your list, add some!')).toBeInTheDocument();
  });
});
