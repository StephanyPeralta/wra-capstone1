import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import HomePage from './Home.page';
import VideoProvider from '../../providers/Video';
import { useYoutube } from '../../utils/hooks/useYoutube';
import videosMock from '../../mocks/youtube-videos-mock.json';

jest.mock('../../utils/hooks/useYoutube');

describe('Home page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Loader icon when isLoading is true', () => {
    const videos = videosMock.items;
    const isLoading = true;
    const error = false;
    useYoutube.mockReturnValue({ videos, isLoading, error });

    render(
      <VideoProvider>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </VideoProvider>
    );

    expect(screen.getByTestId('loader-icon2')).toBeInTheDocument();
  });

  it('renders Video elements after Loading', () => {
    const videos = videosMock.items;
    const isLoading = false;
    const error = false;
    useYoutube.mockReturnValue({ videos, isLoading, error });

    render(
      <VideoProvider>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </VideoProvider>
    );

    expect(screen.getByTestId('video-list')).toBeInTheDocument();
  });

  it('renders Error Alert when error is true', () => {
    const videos = videosMock.items;
    const isLoading = false;
    const error = true;
    useYoutube.mockReturnValue({ videos, isLoading, error });

    render(
      <VideoProvider>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </VideoProvider>
    );

    expect(screen.getByText('Error loading page!')).toBeInTheDocument();
  });
});
