import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeStore } from './context/ThemeStore'
import Theme from './styles/Theme';
import { CalculatorProvider } from './context/CalculatorContext';

import Home from './views/Home';

ReactDOM.render(
  <React.StrictMode>
    <ThemeStore>
      <Theme>
        <CalculatorProvider>
          <Home />
        </CalculatorProvider>
      </Theme>
    </ThemeStore>
  </React.StrictMode>,
  document.getElementById('root')
);
