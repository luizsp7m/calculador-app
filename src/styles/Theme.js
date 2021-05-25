import React, { useContext } from "react";

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../context/ThemeStore';

const themes = {
  default: {
    name: 'default',
    colors: {
      backgroundColor: 'hsl(222, 26%, 31%)',
      keypad: 'hsl(223, 31%, 20%)',
      screen: 'hsl(224, 36%, 15%)',
      primaryKey: 'hsl(225, 21%, 49%)',
      secondaryKey: 'hsl(6, 63%, 50%)',
      thirdKey: 'hsl(30, 25%, 89%)',
      primaryTextColor: 'hsl(221, 14%, 31%)',
      whiteColor: '#fafafa',
    }
  },

  white: {
    name: 'white',
    colors: {
      backgroundColor: 'hsl(0, 0%, 90%)',
      keypad: 'hsl(0, 5%, 81%)',
      screen: 'hsl(0, 0%, 93%)',
      primaryKey: 'hsl(185, 42%, 37%)',
      secondaryKey: 'hsl(25, 98%, 40%)',
      thirdKey: 'hsl(45, 7%, 89%)',
      primaryTextColor: 'hsl(60, 10%, 19%)',
      whiteColor: '#fafafa',
    }
  },

  purple: {
    name: 'purple',
    colors: {
      backgroundColor: 'hsl(268, 75%, 9%)',
      keypad: 'hsl(268, 71%, 12%)',
      screen: 'hsl(268, 71%, 12%)',
      primaryKey: 'hsl(281, 89%, 26%)',
      secondaryKey: 'hsl(176, 100%, 44%)',
      thirdKey: 'hsl(268, 47%, 21%)',
      primaryTextColor: 'hsl(52, 100%, 62%)',
      whiteColor: '#fafafa',
    }
  },
}

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body, input, button {
    font-family: 'Spartan', sans-serif;
  }

  html, body, #root {
    /* max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%; */
  }
`

function Theme({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      { children}
    </ThemeProvider>
  );
}

export default Theme;