import { act, renderHook } from '@testing-library/react-hooks';

import { useYoutubeSearch } from './useYoutubeSearch';

const getControlledPromise = () => {
  let deferred;
  const promise = new Promise((resolve, reject) => {
    deferred = { resolve, reject };
  });
  return { deferred, promise };
};

describe('useYoutube hook', () => {
  it('fetches videos by the searchTerm that is included in the url', async () => {
    global.fetch = jest.fn();
    renderHook(() => useYoutubeSearch('wizeline'));

    const key = process.env.REACT_APP_YT_API_KEY;
    const searchTerm = 'wizeline';

    expect(global.fetch).toBeCalledWith(
      `https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&key=${key}&q=${searchTerm}`
    );
  });

  it('handles loading state correctly', async () => {
    const { deferred, promise } = getControlledPromise();
    global.fetch = jest.fn(() => promise);
    const { result, waitForNextUpdate } = renderHook(useYoutubeSearch);

    expect(result.current.isLoading).toBe(true);
    deferred.resolve();

    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
  });

  it('handles error state correctly', async () => {
    global.fetch = jest.fn(() => {
      return new Promise(() => {
        const FetchError = 'Error loading page';
        throw FetchError;
      });
    });

    const { result, waitForNextUpdate } = renderHook(useYoutubeSearch);
    await waitForNextUpdate();

    expect(result.current.error).toBe(true);
  });
});
