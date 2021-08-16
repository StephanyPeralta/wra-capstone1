import React from 'react';

import { useSelector } from '../../providers/Selector';
import { Toggle, InputTheme, SliderTheme } from './ThemeToggle.styled';

function ThemeToggle() {
  const { dispatch } = useSelector();

  const handleThemeMode = (e) => {
    const isLight = e.target.checked;
    dispatch({ type: 'SET_THEME', payload: { theme: isLight ? 'dark' : 'light' } });
  };

  return (
    <>
      <Toggle title="theme-mode">
        <InputTheme type="checkbox" onChange={handleThemeMode} />
        <SliderTheme />
      </Toggle>
    </>
  );
}

export default ThemeToggle;
