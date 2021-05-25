import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  background: ${props => props.theme.colors.backgroundColor};
  transition: background .25s;
`;

export const Wrapper = styled.div`
  width: 95%;
  max-width: 425px;
`;