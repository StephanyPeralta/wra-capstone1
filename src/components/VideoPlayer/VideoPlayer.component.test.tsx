import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoPlayer from './VideoPlayer.component';
import { useAuth } from '../../providers/Auth';
import { useSelector } from '../../providers/Selector';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../providers/Selector', () => ({
  useSelector: jest.fn(),
}));

const authMock = { currentUser: false };

const selectorMock = {
  addFavVideo: jest.fn(),
  removeFavVideo: jest.fn(),
  isFavorite: jest.fn(),
};

const videoPropsMock = {
  img: 'testimg.jpg',
  title: 'Test Title',
  description: 'Test Description',
  videoId: 'abc123',
  publishDate: '2014-09-27T01:39:18Z',
  pathVideo: '/test/videoId',
};

const childrenMock = <div>A child element</div>;

describe('VideoPlayer component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders VideoPlayer elements', () => {
    (useAuth as jest.Mock).mockReturnValue(authMock);
    (useSelector as jest.Mock).mockReturnValue(selectorMock);

    render(<VideoPlayer videoProps={videoPropsMock}>{childrenMock}</VideoPlayer>);

    const iframe = screen.getByTitle('Video Player');

    expect(iframe).toBeInTheDocument();
    expect(screen.getByText(videoPropsMock.title)).toBeInTheDocument();
    expect(screen.getByText(videoPropsMock.description)).toBeInTheDocument();
    expect(screen.getByText('A child element')).toBeInTheDocument();
  });

  it('renders Add to Favorites Button if user is logged in', () => {
    (useAuth as jest.Mock).mockReturnValue({ ...authMock, currentUser: true });
    (useSelector as jest.Mock).mockReturnValue(selectorMock);

    render(<VideoPlayer videoProps={videoPropsMock}>{childrenMock}</VideoPlayer>);

    const addButton = screen.getByRole('button', { name: 'Add to Favorites' });

    expect(addButton).toBeInTheDocument();
  });
});
