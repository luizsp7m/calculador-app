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
      display: flex;
      flex-direction: column;
      gap: .25rem;

      > div.numbers {
        color: ${props => props.theme.name === 'default' ? '#fafafa' : props.theme.colors.primaryTextColor};
        display: flex;
        justify-content: center; 

        > span {
          margin: 0 .5rem;
        }
      }

      > div.slider {
        display: flex;
        background: rgba(0, 0, 0, .1);
        justify-content: space-between;
        padding: .5rem;
        border-radius: 1rem;

        > div.circle {
          height: 1.3rem;
          width: 1.3rem;
          border-radius: 50%;
          background: none;
          margin: 0 .2rem;
          cursor: pointer;
          border: 1px solid ${props => props.theme.name === 'white' ? 'rgba(0, 0, 0, .1)' : 'rgba(255, 255, 255, .05)'};
        }

        > div.selected {
          background: ${props => props.theme.colors.secondaryKey}
        }
      }
    }
  }
`;
