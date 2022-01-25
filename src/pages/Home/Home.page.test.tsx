import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import HomePage from './Home.page';
import { useAuth } from '../../providers/Auth';
import { useSearchStatus } from '../../providers/SearchStatus';
import { useYoutubeSearch } from '../../hooks/useYoutubeSearch';

jest.mock('../../hooks/useYoutubeSearch');
jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../providers/SearchStatus', () => ({
  useSearchStatus: jest.fn(),
}));
jest.mock('../../components/VideoCard', () => () => <div>VideoCard Mock</div>);

const authMock = { isAuthenticated: true };

const searchProviderMock = {
  searchTerm: 'wizeline',
};

const videos = [
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

describe('Home page', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useAuth as jest.Mock).mockReturnValue(authMock);
    (useSearchStatus as jest.Mock).mockReturnValue(searchProviderMock);
  });

  it('renders Loader icon when isLoading is true', () => {
    const isLoading = true;
    const error = false;
    (useYoutubeSearch as jest.Mock).mockReturnValue({ videos, isLoading, error });

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByTestId('loader-icon2')).toBeInTheDocument();
  });

  it('renders Video elements after Loading', () => {
    const isLoading = false;
    const error = false;
    (useYoutubeSearch as jest.Mock).mockReturnValue({ videos, isLoading, error });

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const videoList = screen.getAllByText('VideoCard Mock');

    expect(videoList.length).toBe(2);
  });

  it('renders Error Alert when error is true', () => {
    const isLoading = false;
    const error = true;
    (useYoutubeSearch as jest.Mock).mockReturnValue({ videos, isLoading, error });

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText('Error loading page!')).toBeInTheDocument();
  });
});
