import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.screen};
  padding: 3rem;
  margin: 2rem 0;
  border-radius: .75rem;
  color: ${props => props.theme.name === 'default' ? '#fafafa' : props.theme.colors.primaryTextColor};
  transition: color .25s;
  font-size: 3rem;
  text-align: right;
  overflow: hidden;
`;
