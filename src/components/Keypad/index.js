import React, { useContext } from 'react';

import { Container } from './styles';

import { CalculatorContext } from '../../context/CalculatorContext';

function Keypad() {
  const { pressKey, clear, backspace, calculate } = useContext(CalculatorContext);

  return (
    <Container>
      <div className="key" onClick={() => pressKey('7')}>7</div>
      <div className="key" onClick={() => pressKey('8')}>8</div>
      <div className="key" onClick={() => pressKey('9')}>9</div>
      <div className="key" onClick={() => backspace()}>DEL</div>

      <div className="key" onClick={() => pressKey('4')}>4</div>
      <div className="key" onClick={() => pressKey('5')}>5</div>
      <div className="key" onClick={() => pressKey('6')}>6</div>
      <div className="key" onClick={() => pressKey('+')}>+</div>

      <div className="key" onClick={() => pressKey('1')}>1</div>
      <div className="key" onClick={() => pressKey('2')}>2</div>
      <div className="key" onClick={() => pressKey('3')}>3</div>
      <div className="key" onClick={() => pressKey('-')}>-</div>

      <div className="key" onClick={() => pressKey('.')}>.</div>
      <div className="key" onClick={() => pressKey('0')}>0</div>
      <div className="key" onClick={() => pressKey('/')}>/</div>
      <div className="key" onClick={() => pressKey('*')}>x</div>

      <div className="key" onClick={() => clear()}>RESET</div>
      <div className="key" onClick={() => calculate()}>=</div>
    </Container>
  );
}

export default Keypad;