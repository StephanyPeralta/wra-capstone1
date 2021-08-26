import React from 'react';
import { render, screen } from '@testing-library/react';

import Layout from './Layout.component';
import SelectorProvider from '../../providers/Selector';
import AuthProvider from '../../providers/Auth';

jest.mock('../Header', () => () => <div>Header Mock</div>);
jest.mock('../SideMenu', () => () => <div>SideMenu Mock</div>);

const childrenMock = <div>A child element</div>;

describe('Layout component', () => {
  it('renders Layout elements', () => {
    render(
      <AuthProvider>
        <SelectorProvider>
          <Layout>{childrenMock}</Layout>
        </SelectorProvider>
      </AuthProvider>
    );

    expect(screen.getByText('Header Mock')).toBeInTheDocument();
    expect(screen.getByText('SideMenu Mock')).toBeInTheDocument();
    expect(screen.getByText('A child element')).toBeInTheDocument();
  });
});
