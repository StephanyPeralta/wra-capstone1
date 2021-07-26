import React from 'react';
import { render, screen } from '@testing-library/react';

import Layout from './Layout.component';

jest.mock('../Header', () => () => <div>Header Mock</div>);

const testingProps = {
  children: <div>A child element</div>,
};

describe('Layout component', () => {
  it('renders Layout elements', () => {
    render(<Layout {...testingProps} />);

    expect(screen.getByText('Header Mock')).toBeInTheDocument();
    expect(screen.getByText('A child element')).toBeInTheDocument();
  });
});
