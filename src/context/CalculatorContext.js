import React, { createContext, useState, useEffect } from 'react';

const CalculatorContext = createContext();

function CalculatorProvider({ children }) {

  const [result, setResult] = useState('');

  const pressKey = (key) => {
    setResult(result + key);
  }

  const clear = () => {
    setResult('');
  }

  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch(err) {
      setResult('');
    }
  }

  return (
    <CalculatorContext.Provider value={{ pressKey, clear, backspace, result, calculate }}>
      { children}
    </CalculatorContext.Provider>
  );
}

export { CalculatorContext, CalculatorProvider }