import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeStore({ children }) {
  const [theme, setTheme] = useState('default');

  const toggle = (theme) => setTheme(theme);

  return(
    <ThemeContext.Provider value={{ theme, toggle }}>
      { children }
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeStore }