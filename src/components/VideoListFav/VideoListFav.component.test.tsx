import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoListFav from './VideoListFav.component';
import { useVideo } from '../../providers/Video';

jest.mock('../../providers/Video', () => ({
  useVideo: jest.fn(),
}));

const videoProviderMock = {
  searchMode: true,
  inSearchMode: jest.fn(),
};

const childrenMock = <div>Children Mock</div>;

describe('VideoListFav component', () => {
  it('renders VideoListFav children', () => {
    (useVideo as jest.Mock).mockReturnValue(videoProviderMock);

    render(<VideoListFav>{childrenMock}</VideoListFav>);

    expect(screen.getByText('Children Mock')).toBeInTheDocument();
  });

  it("renders VideoListFav component with class 'related-list' if the searchMode is false", () => {
    (useVideo as jest.Mock).mockReturnValue({...videoProviderMock, searchMode: false});

    const { container } = render(<VideoListFav>{childrenMock}</VideoListFav>);

    expect(container.firstChild).toHaveClass('related-list')
  });
});
