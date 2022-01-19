import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import HomePage from './Home.page';
import { useAuth } from '../../providers/Auth';
import { useVideo } from '../../providers/Video';
import { useYoutube } from '../../hooks/useYoutube';

jest.mock('../../hooks/useYoutube');
jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../providers/Video', () => ({
  useVideo: jest.fn(),
}));
jest.mock('../../components/VideoCard', () => () => <div>VideoCard Mock</div>)

const authMock = { isAuthenticated: true };

const videoProviderMock = {
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
    (useVideo as jest.Mock).mockReturnValue(videoProviderMock);
  });

  it('renders Loader icon when isLoading is true', () => {
    const isLoading = true;
    const error = false;
    (useYoutube as jest.Mock).mockReturnValue({ videos, isLoading, error });

    render(<MemoryRouter><HomePage /></MemoryRouter>);

    expect(screen.getByTestId('loader-icon2')).toBeInTheDocument();
  });

  it('renders Video elements after Loading', () => {
    const isLoading = false;
    const error = false;
    (useYoutube as jest.Mock).mockReturnValue({ videos, isLoading, error });

    render(<MemoryRouter><HomePage /></MemoryRouter>);

    const videoList = screen.getAllByText('VideoCard Mock');

    expect(videoList.length).toBe(2);
  });

  it('renders Error Alert when error is true', () => {
    const isLoading = false;
    const error = true;
    (useYoutube as jest.Mock).mockReturnValue({ videos, isLoading, error });

    render(<MemoryRouter><HomePage /></MemoryRouter>);

    expect(screen.getByText('Error loading page!')).toBeInTheDocument();
  });
});
