import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import VideoCard from './VideoCard.component';
import { useAuth } from '../../providers/Auth';
import { useVideo } from '../../providers/Video';
import { useSelector } from '../../providers/Selector';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../providers/Video', () => ({
  useVideo: jest.fn(),
}));
jest.mock('../../providers/Selector', () => ({
  useSelector: jest.fn(),
}));

const authMock = { isAuthenticated: false };

const videoProviderMock = {
  searchMode: true,
  searchTerm: 'wizeline',
  videoProps: {},
  getVideoProps: jest.fn(),
};

const selectorMock = {
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

    (useSelector as jest.Mock).mockReturnValue(selectorMock);
    (useVideo as jest.Mock).mockReturnValue(videoProviderMock);
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
