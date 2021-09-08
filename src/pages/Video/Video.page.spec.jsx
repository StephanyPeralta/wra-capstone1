import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import VideoPage from './Video.page';
import { useAuth } from '../../providers/Auth';
import { useVideo } from '../../providers/Video';
import { useSelector } from '../../providers/Selector';
import { useYoutube } from '../../utils/hooks/useYoutube';
import videosMock from '../../mocks/youtube-videos-mock.json';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../providers/Selector', () => ({
  useSelector: jest.fn(),
}));
jest.mock('../../providers/Video', () => ({
  useVideo: jest.fn(() => ({ state: jest.fn(), dispatch: jest.fn() })),
}));
jest.mock('../../utils/hooks/useYoutube');

const authMock = { currentUser: false };

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

    useAuth.mockReturnValue(authMock);
    useVideo.mockReturnValue({ state, dispatch });
    useSelector.mockReturnValue(selectorMock);
  });

  it('renders Loader icon when isLoading is true', () => {
    const videos = videosMock.items;
    const isLoading = true;
    const error = false;
    useYoutube.mockReturnValue({ videos, isLoading, error });

    render(
      <MemoryRouter>
        <VideoPage />
      </MemoryRouter>
    );

    expect(screen.getByTestId('loader-icon1')).toBeInTheDocument();
  });

  it('renders Video elements after Loading', () => {
    const videos = videosMock.items;
    const isLoading = false;
    const error = false;
    useYoutube.mockReturnValue({ videos, isLoading, error });

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
    const videos = videosMock.items;
    const isLoading = false;
    const error = true;
    useYoutube.mockReturnValue({ videos, isLoading, error });

    render(
      <MemoryRouter>
        <VideoPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Error loading page!')).toBeInTheDocument();
  });
});
