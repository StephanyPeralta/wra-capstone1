import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoList from './VideoList.component';
import { useSearchStatus } from '../../providers/SearchStatus';

jest.mock('../../providers/SearchStatus', () => ({
  useSearchStatus: jest.fn(),
}));

const searchProviderMock = {
  searchMode: true,
  inSearchMode: jest.fn(),
};

const childrenMock = <div>Children Mock</div>;

describe('VideoList component', () => {
  it('renders VideoList children', () => {
    (useSearchStatus as jest.Mock).mockReturnValue(searchProviderMock);

    render(<VideoList>{childrenMock}</VideoList>);

    expect(screen.getByText('Children Mock')).toBeInTheDocument();
  });

  it("renders VideoList component with class 'related-list' if the searchMode is false", () => {
    (useSearchStatus as jest.Mock).mockReturnValue({...searchProviderMock, searchMode: false});

    const { container } = render(<VideoList>{childrenMock}</VideoList>);

    expect(container.firstChild).toHaveClass('related-list')
  });
});
