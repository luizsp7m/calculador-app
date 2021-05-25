import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > div.app-name {
    font-size: 3.25rem;
    font-weight: 700;
    text-transform: lowercase;
    color: ${props => props.theme.name === 'default' ? '#fafafa' : props.theme.colors.primaryTextColor};
    transition: color .25s;
  }

  > div.right-content {
    display: flex;
    align-items: flex-end;
    gap: 1rem;

    > div.title {
      color: ${props => props.theme.name === 'default' ? '#fafafa' : props.theme.colors.primaryTextColor};
      transition: color .25s;
      text-transform: uppercase;
      letter-spacing: .1rem;
      font-size: 1.25rem;
      margin: .40rem 2rem;
    }

    > div.switch {
      > div.numbers {
        display: flex;
        justify-content: center;
        padding: .25rem;

        > span {
          color: ${props => props.theme.name === 'default' ? '#fafafa' : props.theme.colors.primaryTextColor};
          transition: color .25s;
          margin: 0 .65rem;
          font-size: 1rem;
        }
      }

      > div.checkbox-group {
        background: ${props => props.theme.colors.keypad};
        transition: background .25s;
        border-radius: 5rem;
        display: flex;
        justify-content: center;
        padding: .5rem;

        > input[type='radio'] {
          margin: 0 .25rem;
          height: 1.75rem;
          width: 1.75rem;
          border: none;
          cursor: pointer;
        }
      }
    }
  }
`;
