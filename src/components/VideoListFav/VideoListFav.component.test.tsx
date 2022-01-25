import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoListFav from './VideoListFav.component';
import { useSearchStatus } from '../../providers/SearchStatus';

jest.mock('../../providers/SearchStatus', () => ({
  useSearchStatus: jest.fn(),
}));

const searchProviderMock = {
  searchMode: true,
  inSearchMode: jest.fn(),
};

const childrenMock = <div>Children Mock</div>;

describe('VideoListFav component', () => {
  it('renders VideoListFav children', () => {
    (useSearchStatus as jest.Mock).mockReturnValue(searchProviderMock);

    render(<VideoListFav>{childrenMock}</VideoListFav>);

    expect(screen.getByText('Children Mock')).toBeInTheDocument();
  });

  it("renders VideoListFav component with class 'related-list' if the searchMode is false", () => {
    (useSearchStatus as jest.Mock).mockReturnValue({...searchProviderMock, searchMode: false});

    const { container } = render(<VideoListFav>{childrenMock}</VideoListFav>);

    expect(container.firstChild).toHaveClass('related-list')
  });
});
