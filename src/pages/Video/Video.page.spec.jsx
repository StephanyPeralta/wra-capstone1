import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoPage from './Video.page';
import VideoProvider from '../../providers/Video';
import { useYoutube } from '../../utils/hooks/useYoutube';
import videosMock from '../../mocks/youtube-videos-mock.json';

jest.mock('../../utils/hooks/useYoutube', () => ({
  useYotube: jest.fn(),
}));

describe('Video page', () => {
  it('renders Video elements', () => {
    const videos = videosMock;
    const isLoading = false;
    const error = false;
    useYoutube.mockReturnValue({ videos, isLoading, error });
    render(
      <VideoProvider>
        <VideoPage />
      </VideoProvider>
    );
    expect(screen.getByTestId('video-player')).toBeInTheDocument();
  });
});
