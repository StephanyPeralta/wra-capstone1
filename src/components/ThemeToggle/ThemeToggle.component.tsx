import React from 'react';

import { usePreferences } from '../../providers/Preferences';
import { Toggle, InputTheme, SliderTheme } from './ThemeToggle.styled';

function ThemeToggle() {
  const { changeThemeMode, theme } = usePreferences();

  const handleThemeMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isLight = e.target.checked;
    changeThemeMode(isLight);
  };

  return (
    <>
      <Toggle title="theme-mode">
        <InputTheme
          type="checkbox"
          onChange={handleThemeMode}
          checked={theme !== 'light'}
        />
        <SliderTheme />
      </Toggle>
    </>
  );
}

export default ThemeToggle;
