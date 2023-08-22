import styled from 'styled-components'

export const ItemSingle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding-bottom: 2.1rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  &:not(:first-child) {
    margin-top: 1rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    button {
      all: unset;
      display: flex;
      align-items: center;
      gap: 0 0.3rem;
      padding: 0.5rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme['gray-400']};
      cursor: pointer;

      span {
        color: ${(props) => props.theme['gray-700']};
        font-size: 0.75rem;
        text-transform: uppercase;
      }
    }

    > div {
      display: flex;
      gap: 1rem;
    }
  }

  p {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-700']};
  }
`
