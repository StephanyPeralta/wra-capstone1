import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import VideoPage from './Video.page';
import { useAuth } from '../../providers/Auth';
import { useVideo } from '../../providers/Video';
import { useSelector } from '../../providers/Selector';
import { useYoutube } from '../../hooks/useYoutube';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../providers/Selector', () => ({
  useSelector: jest.fn(),
}));
jest.mock('../../providers/Video', () => ({
  useVideo: jest.fn(() => ({ state: jest.fn(), dispatch: jest.fn() })),
}));
jest.mock('../../hooks/useYoutube');

const authMock = { currentUser: false };

const videos = [
  {
    key: 1,
    img: 'testimg.jpg',
    title: 'Test Title',
    description: 'Test Description',
    videoId: 'abc123',
    publishDate: '2014-09-27T01:39:18Z',
    pathVideo: '/test/videoId',
  },
  {
    key: 2,
    img: 'testimg.jpg',
    title: 'Test Title',
    description: 'Test Description',
    videoId: 'abc456',
    publishDate: '2014-09-27T01:39:18Z',
    pathVideo: '/test/videoId',
  },
];

const state = {
  searchStatus: true,
  searchTerm: 'wizeline',
  videoProps: {},
};

const dispatch = jest.fn();

const selectorMock = {
  favorites: [],
};

describe('Video page', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useAuth as jest.Mock).mockReturnValue(authMock);
    (useVideo as jest.Mock).mockReturnValue({ state, dispatch });
    (useSelector as jest.Mock).mockReturnValue(selectorMock);
  });

  it('renders Loader icon when isLoading is true', () => {
    const isLoading = true;
    const error = false;
    (useYoutube as jest.Mock).mockReturnValue({ videos, isLoading, error });

    render(
      <MemoryRouter>
        <VideoPage />
      </MemoryRouter>
    );

    expect(screen.getByTestId('loader-icon1')).toBeInTheDocument();
  });

  it('renders Video elements after Loading', () => {
    const isLoading = false;
    const error = false;
    (useYoutube as jest.Mock).mockReturnValue({ videos, isLoading, error });

    render(
      <MemoryRouter>
        <VideoPage />
      </MemoryRouter>
    );

    expect(screen.getByTitle('Video Player')).toBeInTheDocument();
    expect(screen.getByTestId('video-title')).toBeInTheDocument();
    expect(screen.getByTestId('video-description')).toBeInTheDocument();
    expect(screen.getByTestId('related-videos')).toBeInTheDocument();
  });

  it('renders Error Alert when error is true', () => {
    const isLoading = false;
    const error = true;
    (useYoutube as jest.Mock).mockReturnValue({ videos, isLoading, error });

    render(
      <MemoryRouter>
        <VideoPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Error loading page!')).toBeInTheDocument();
  });
});
