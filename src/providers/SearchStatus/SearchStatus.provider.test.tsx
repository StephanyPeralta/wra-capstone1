import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { act } from 'react-dom/test-utils';

import SearchStatusProvider, { useSearchStatus } from './SearchStatus.provider';

describe('SearchStatus Provider', () => {

    it('changes the Search Mode to true', async () => {
    const subject = renderHook(() => useSearchStatus(), {
        wrapper: ({ children }) => <SearchStatusProvider>{children}</SearchStatusProvider>,
    });

    act(() => subject.result.current.inSearchMode(true));

    expect(subject.result.current.searchMode).toBeTruthy();
    });

    it('changes the searchMode to true and saves the searched term', async () => {
    const subject = renderHook(() => useSearchStatus(), {
        wrapper: ({ children }) => <SearchStatusProvider>{children}</SearchStatusProvider>,
    });

    act(() => subject.result.current.saveSearchTerm('wizeline'));

    expect(subject.result.current.searchMode).toBeTruthy();
    expect(subject.result.current.searchTerm).toBe('wizeline');
    });
});