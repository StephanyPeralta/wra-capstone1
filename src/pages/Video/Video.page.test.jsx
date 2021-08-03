import React from 'react';
import { render, screen } from '@testing-library/react';

import Video from './Video.page';

jest.mock('../../components/VideoPlayer', () => () => <div>VideoPlayer Mock</div>);

describe('Video page', () => {
  it('renders Video elements', () => {
    render(<Video />);
    expect(screen.getByText('VideoPlayer Mock')).toBeInTheDocument();
  });
});
