import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.keypad};
  transition: background .25s;
  padding: 2rem;
  border-radius: .75rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas: 
  "num7 num8 num9 del"
  "num4 num5 num6 som"
  "num1 num2 num3 men"
  "dote zero divi mul"
  "reset reset res res";

  > div.key {
    height: 5rem;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.thirdKey};
    color: ${props => props.theme.colors.primaryTextColor};
    transition: all .25s;
    font-size: 2rem;
    box-shadow: 0px 5px 5px rgb(0 0 0 / 20%);
    cursor: pointer;
  }

  > div.key:nth-child(4) {
    background: ${props => props.theme.colors.primaryKey};
    color: ${props => props.theme.colors.whiteColor};
  }

  > div.key:nth-child(17) {
    background: ${props => props.theme.colors.primaryKey};
    color: ${props => props.theme.colors.whiteColor};
    grid-area: reset;
  }

  > div.key:nth-child(18) {
    background: ${props => props.theme.colors.secondaryKey};
    color: ${props => props.theme.colors.whiteColor};
    grid-area: res;
  }
`;