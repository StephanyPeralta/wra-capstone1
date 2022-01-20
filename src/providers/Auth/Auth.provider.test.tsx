import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

import app from '../../firebase';
import AuthProvider, { useAuth } from './Auth.provider';

const authObjectMock = {
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve(true)),
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve(true)),
  fetchSignInMethodsForEmail: jest.fn(() => Promise.resolve(true)),
  signOut: jest.fn(() => {
    Promise.resolve(true);
  }),
  onAuthStateChanged: jest.fn(),
  currentUser: {
    sendEmailVerification: jest.fn(() => Promise.resolve(true)),
  },
};

const authMock = jest.fn(() => authObjectMock);

// @ts-ignore
//app.auth = authMock;

describe('Auth Provider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  xit('allows sign up providing email and password ', async () => {
    const subject = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <AuthProvider>{children}</AuthProvider>,
    });

    subject.result.current.signup('test@test.com', 'password');

    expect(app.auth().createUserWithEmailAndPassword).toHaveBeenCalled()
  });

  xit('allows login up providing email and password ', async () => {
    const subject = renderHook(() => useAuth(), {
       wrapper: ({ children }) => <AuthProvider>{children}</AuthProvider>,
    });
  
    subject.result.current.login('test@test.com', 'password');
  
    expect(app.auth().signInWithEmailAndPassword).toHaveBeenCalled()
  });

    xit('allows login up providing email and password ', async () => {
      const subject = renderHook(() => useAuth(), {
         wrapper: ({ children }) => <AuthProvider>{children}</AuthProvider>,
      });
    
      subject.result.current.logout();
    
      expect(app.auth().signOut).toHaveBeenCalled()
    });
});