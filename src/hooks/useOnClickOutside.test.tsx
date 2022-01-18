import React, { createRef } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render, screen } from '@testing-library/react';

import useOnClickOutside from './useOnClickOutside';

describe('useOnClickOutside', () => {
  it('does not calls handler when click is within element', () => {
    const handler = jest.fn();
    const ref = createRef<HTMLDivElement>();
    render(<div ref={ref} data-testid="element-testid"></div>);

    renderHook(() => useOnClickOutside(ref, handler));
    fireEvent.click(screen.getByTestId('element-testid'));

    expect(handler).not.toHaveBeenCalled();
  });
});
