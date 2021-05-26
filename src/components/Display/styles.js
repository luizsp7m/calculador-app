import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.screen};
  margin: 2rem 0;
  border-radius: .75rem;
  color: ${props => props.theme.name === 'default' ? '#fafafa' : props.theme.colors.primaryTextColor};
  transition: color .25s;
  font-size: 3rem;
  text-align: right;
  overflow: hidden;
  padding: 3rem 0 3rem 3rem;
  border-right: solid 2.2rem rgba(0, 0, 0, 0);
`;
