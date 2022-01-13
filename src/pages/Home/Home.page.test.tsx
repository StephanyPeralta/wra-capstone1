import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import HomePage from './Home.page';
import VideoProvider from '../../providers/Video';
import AuthProvider from '../../providers/Auth';
import { useYoutube } from '../../hooks/useYoutube';

jest.mock('../../hooks/useYoutube');

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
  });

  it('renders Loader icon when isLoading is true', () => {
    const isLoading = true;
    const error = false;
    (useYoutube as jest.Mock).mockReturnValue({ videos, isLoading, error });

    render(
      <AuthProvider>
        <VideoProvider>
          <MemoryRouter>
            <HomePage />
          </MemoryRouter>
        </VideoProvider>
      </AuthProvider>
    );

    expect(screen.getByTestId('loader-icon2')).toBeInTheDocument();
  });

  it('renders Video elements after Loading', () => {
    const isLoading = false;
    const error = false;
    (useYoutube as jest.Mock).mockReturnValue({ videos, isLoading, error });

    render(
      <AuthProvider>
        <VideoProvider>
          <MemoryRouter>
            <HomePage />
          </MemoryRouter>
        </VideoProvider>
      </AuthProvider>
    );

    expect(screen.getByTestId('video-list')).toBeInTheDocument();
  });

  it('renders Error Alert when error is true', () => {
    const isLoading = false;
    const error = true;
    (useYoutube as jest.Mock).mockReturnValue({ videos, isLoading, error });

    render(
      <AuthProvider>
        <VideoProvider>
          <MemoryRouter>
            <HomePage />
          </MemoryRouter>
        </VideoProvider>
      </AuthProvider>
    );

    expect(screen.getByText('Error loading page!')).toBeInTheDocument();
  });
});
