import React, { useContext } from 'react';

import { Container } from './styles';

import { CalculatorContext } from '../../context/CalculatorContext';

function Display() {
  const { result } = useContext(CalculatorContext);

  return (
    <Container>
      { result ? result : '|' }
    </Container>
  );
}

export default Display;