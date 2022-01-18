import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoList from './VideoList.component';
import { useVideo } from '../../providers/Video';

jest.mock('../../providers/Video', () => ({
  useVideo: jest.fn(),
}));

const videoProviderMock = {
  searchMode: true,
  inSearchMode: jest.fn(),
};

const childrenMock = <div>Children Mock</div>;

describe('VideoList component', () => {
  it('renders VideoList children', () => {
    (useVideo as jest.Mock).mockReturnValue(videoProviderMock);

    render(<VideoList>{childrenMock}</VideoList>);

    expect(screen.getByText('Children Mock')).toBeInTheDocument();
  });

  it("renders VideoList component with class 'related-list' if the searchMode is false", () => {
    (useVideo as jest.Mock).mockReturnValue({...videoProviderMock, searchMode: false});

    const { container } = render(<VideoList>{childrenMock}</VideoList>);

    expect(container.firstChild).toHaveClass('related-list')
  });
});
