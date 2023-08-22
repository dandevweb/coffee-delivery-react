import styled from 'styled-components'

export const QuantityComponent = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['gray-400']};
  border-radius: 8px;

  span:first-child::before,
  span:last-child::after {
    content: attr(data-content);
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['purple-500']};
    cursor: pointer;
    padding: 0 0.5rem;
    font-size: 1.25rem;
  }

  span:first-child::before {
    content: '-';
  }

  span:last-child::after {
    content: '+';
  }

  input {
    border: 0;
    border: none;
    max-width: 1rem;
    background-color: transparent;
    text-align: center;
    line-height: normal;
  }
`
