import styled from 'styled-components'

export const ContainerProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 6px 32px;
  background-color: ${(props) => props.theme['gray-200']};
  width: 100%;
  max-width: 16rem;

  header {
    display: flex;
    justify-content: center;
    margin-top: -2rem;

    img {
      border-radius: 50%;
    }

    p {
      margin-top: 0.25rem;
      background-color: ${(props) => props.theme['yellow-100']};
      padding: 0.25rem;
      border-radius: 100px;
      font-size: 0.625rem;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      color: ${(props) => props.theme['yellow-900']};
    }
  }
`

export const MainProductCard = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
  }

  p {
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme['gray-600']};
    line-height: 1.3;
  }
`

export const FooterProductCard = styled.footer`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  span {
    font-size: 14px;
    color: ${(props) => props.theme['gray-600']};
    display: inline-flex;
    align-items: center;
    padding: 0 6px;
    gap: 0.25rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  div {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme['gray-400']};
    border-radius: 8px;
    gap: 0.8rem;

    span:first-child::before,
    span:last-child::after {
      content: attr(data-content);
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme['purple-500']};
      cursor: pointer;
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
  }

  button {
    background-color: ${(props) => props.theme['purple-900']};
    color: ${(props) => props.theme.white};
    padding: 0.5rem;
    border-radius: 6px;
    font-weight: 700;
    transition: filter 0.2s;
    border: none;
    cursor: pointer;
  }
`
