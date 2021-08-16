import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from './Home.page';
import VideoProvider from '../../providers/Video';

jest.mock('../../components/VideoList', () => () => <div>VideoList Mock</div>);

describe('Home page', () => {
  it('renders Home elements', () => {
    render(
      <VideoProvider>
        <HomePage />
      </VideoProvider>
    );
    expect(screen.getByText('VideoList Mock')).toBeInTheDocument();
  });
});
