import React from 'react';

import Header from '../../components/Header';
import Display from '../../components/Display';
import Keypad from '../../components/Keypad';

import { Container, Wrapper } from './styles';

function Home() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Display />
        <Keypad />
      </Wrapper>
    </Container>
  );
}

export default Home;