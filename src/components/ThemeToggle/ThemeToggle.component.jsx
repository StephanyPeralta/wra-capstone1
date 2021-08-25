import React from 'react';

import { useSelector } from '../../providers/Selector';
import { Toggle, InputTheme, SliderTheme } from './ThemeToggle.styled';

function ThemeToggle() {
  const { changeThemeMode } = useSelector();

  const handleThemeMode = (e) => {
    changeThemeMode(e);
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
