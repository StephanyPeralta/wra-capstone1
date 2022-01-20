import React from 'react';
import { render, screen, act } from '@testing-library/react';

import Layout from './Layout.component';
import PreferencesProvider from '../../providers/Preferences';
import AuthProvider from '../../providers/Auth';

jest.mock('../Header', () => () => <div>Header Mock</div>);
jest.mock('../SideMenu', () => () => <div>SideMenu Mock</div>);

const childrenMock = <div>A child element</div>;

describe('Layout component', () => {
  xit('renders Layout elements', async () => {

      render(
        <AuthProvider>
          <PreferencesProvider>
            <Layout>{childrenMock}</Layout>
          </PreferencesProvider>
        </AuthProvider>
      )
      
    expect(screen.getByText('Header Mock')).toBeInTheDocument();
    expect(screen.getByText('SideMenu Mock')).toBeInTheDocument();
    expect(screen.getByText('A child element')).toBeInTheDocument();
  });
});
