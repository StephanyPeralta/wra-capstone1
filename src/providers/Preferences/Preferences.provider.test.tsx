import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { act } from 'react-dom/test-utils';

import PreferencesProvider, { usePreferences } from './Preferences.provider';

const video = {
  key: 1,
  img: 'testimg.jpg',
  title: 'Test Title',
  description: 'Test Description',
  videoId: 'abc123',
  publishDate: '2014-09-27T01:39:18Z',
  pathVideo: '/test/videoId',
};

describe('Preferences Provider', () => {

    it('adds and removes favorite videos', async () => {
    const subject = renderHook(() => usePreferences(), {
        wrapper: ({ children }) => <PreferencesProvider>{children}</PreferencesProvider>,
    });

    expect(subject.result.current.favorites).toEqual([]);

    act(() => subject.result.current.addFavVideo(video));

    expect(subject.result.current.favorites).toEqual([video]);

    act(() => subject.result.current.removeFavVideo(video.videoId));

    expect(subject.result.current.favorites).toEqual([]);
    });

    it('changes theme mode to light or dark', async () => {
    const subject = renderHook(() => usePreferences(), {
        wrapper: ({ children }) => <PreferencesProvider>{children}</PreferencesProvider>,
    });

    act(() => subject.result.current.changeThemeMode(true));

    expect(subject.result.current.theme).toEqual('dark');

    act(() => subject.result.current.changeThemeMode(false));

    expect(subject.result.current.theme).toEqual('light');
    });

});