import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import VideoCard from './VideoCard.component';
import { useAuth } from '../../providers/Auth';
import { useSearchStatus } from '../../providers/SearchStatus';
import { usePreferences } from '../../providers/Preferences';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../providers/SearchStatus', () => ({
  useSearchStatus: jest.fn(),
}));
jest.mock('../../providers/Preferences', () => ({
  usePreferences: jest.fn(),
}));

const authMock = { isAuthenticated: false };

const searchProviderMock = {
  searchMode: true,
  searchTerm: 'wizeline',
};

const preferencesMock = {
  favorites: [],
  addFavVideo: jest.fn(),
  isFavorite: jest.fn(),
  removeFavVideo: jest.fn(),
};

const videoCardMock = {
  img: 'testimg.jpg',
  title: 'Test Title',
  description: 'Test Description',
  videoId: 'abc123',
  publishDate: '2014-09-27T01:39:18Z',
  pathVideo: '/video/abc123',
};

describe('VideoCard component', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (usePreferences as jest.Mock).mockReturnValue(preferencesMock);
    (useSearchStatus as jest.Mock).mockReturnValue(searchProviderMock);
  });

  it('renders VideoCard properties', () => {
    (useAuth as jest.Mock).mockReturnValue(authMock);

    render(
      <MemoryRouter>
        <VideoCard {...videoCardMock} />
      </MemoryRouter>
    );

    expect(screen.getByAltText(videoCardMock.title)).toBeInTheDocument();
    expect(screen.getByText(videoCardMock.title)).toBeInTheDocument();
    expect(screen.getByText(videoCardMock.description)).toBeInTheDocument();
  });

  it("renders 'Add to Favorites' button if the user is logged in", () => {
    (useAuth as jest.Mock).mockReturnValue({ ...authMock, isAuthenticated: true });

    render(
      <MemoryRouter>
        <VideoCard {...videoCardMock} />
      </MemoryRouter>
    );

    const addFavButton = screen.getByTestId('button-add');

    expect(addFavButton).toBeInTheDocument();
  });
});
