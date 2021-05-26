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

          <div className="slider">
            <div
              className={theme === 'default' ? 'selected circle' : 'circle'}
              onClick={() => toggle('default')}
            />

            <div
              className={theme === 'white' ? 'selected circle' : 'circle'}
              onClick={() => toggle('white')}
            />

            <div
              className={theme === 'purple' ? 'selected circle' : 'circle'}
              onClick={() => toggle('purple')}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;