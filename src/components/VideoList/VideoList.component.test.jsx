import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoList from './VideoList.component';

jest.mock('../VideoCard', () => () => <div>VideoCard Mock</div>);

describe('VideoList component', () => {
  it('renders VideoList elements', () => {
    render(<VideoList />);

    expect(screen.getAllByText('VideoCard Mock')).toBeTruthy();
  });
});
