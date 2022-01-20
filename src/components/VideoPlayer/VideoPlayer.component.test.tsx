import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoPlayer from './VideoPlayer.component';
import { useAuth } from '../../providers/Auth';
import { usePreferences } from '../../providers/Preferences';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../providers/Preferences', () => ({
  usePreferences: jest.fn(),
}));

const authMock = { isAuthenticated: false };

const preferencesMock = {
  addFavVideo: jest.fn(),
  removeFavVideo: jest.fn(),
  isFavorite: jest.fn(),
};

const videoMock = {
  img: 'testimg.jpg',
  title: 'Test Title',
  description: 'Test Description',
  videoId: 'abc123',
  publishDate: '2014-09-27T01:39:18Z',
  pathVideo: '/test/videoId',
};

describe('VideoPlayer component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders VideoPlayer elements', () => {
    (useAuth as jest.Mock).mockReturnValue(authMock);
    (usePreferences as jest.Mock).mockReturnValue(preferencesMock);

    render(<VideoPlayer {...videoMock} />);

    const iframe = screen.getByTitle('Video Player');

    expect(iframe).toBeInTheDocument();
    expect(screen.getByText(videoMock.title)).toBeInTheDocument();
    expect(screen.getByText(videoMock.description)).toBeInTheDocument();
  });

  it("renders 'Add to Favorites' Button if user is logged in", () => {
    (useAuth as jest.Mock).mockReturnValue({ ...authMock, isAuthenticated: true });
    (usePreferences as jest.Mock).mockReturnValue(preferencesMock);

    render(<VideoPlayer {...videoMock} />);

    const addButton = screen.getByRole('button', { name: 'Add to Favorites' });

    expect(addButton).toBeInTheDocument();
  });
});
