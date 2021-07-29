import React, { useState } from 'react';
// import WbSunnyIcon from '@material-ui/icons/WbSunny';
// import NightsStayIcon from '@material-ui/icons/NightsStay';

import { Toggle } from './ThemeToggle.styled';

function ThemeToggle() {
  const [themeIcon, setThemeIcon] = useState('light');

  function changeThemeIcon() {
    if (themeIcon === 'light') {
      setThemeIcon('dark');
    } else {
      setThemeIcon('light');
    }
  }

  const icon = themeIcon === 'light' ? 'Dark' : 'Light';

  return (
    <>
      <Toggle onClick={changeThemeIcon} title="themeButton">
        {icon}
      </Toggle>
    </>
  );
}

export default ThemeToggle;
