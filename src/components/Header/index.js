import React, { useContext } from 'react';
import { Container } from './styles';
import { ThemeContext } from '../../context/ThemeStore';

function Header() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <Container>
      <div className="app-name">Calc</div>

      <div className="right-content">
        <div className="title">Theme</div>

        <div className="switch">
          <div className="numbers">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>

          <div className="checkbox-group">
            <input
              type="radio"
              name="theme"
              onClick={() => toggle('default')}
              checked={theme === 'default'}
            />

            <input
              type="radio"
              name="theme"
              onClick={() => toggle('white')}
              checked={theme === 'white'}
            />

            <input
              type="radio"
              name="theme"
              onClick={() => toggle('purple')}
              checked={theme === 'purple'}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;