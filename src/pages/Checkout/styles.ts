import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;
`

export const GeneralInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`
export const CardHeader = styled.div`
  display: flex;
  align-items: start;
  gap: 0 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      font-weight: normal;
      font-size: 1rem;
    }

    p {
      font-weight: normal;
      font-size: 0.874rem;
      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const AddressCard = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const AddressForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.75rem;
  margin-top: 1rem;
  width: 100%;
`

const W_SIZE = {
  xs: '3.75rem',
  sm: '12.5rem',
  md: '15.75rem',
  lg: '21.75rem',
  xl: '100%',
} as const

interface InputProps {
  width: keyof typeof W_SIZE
}

export const Input = styled.input<InputProps>`
  background-color: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;
  padding: 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-700']};
  width: ${(props) => W_SIZE[props.width]};
`

export const PaymentCard = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const PaymentSelection = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  button {
    all: unset;
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-400']};
    cursor: pointer;
    width: 100%;

    span {
      color: ${(props) => props.theme['gray-700']};
      font-size: 0.75rem;
      text-transform: uppercase;
    }
  }
`

export const CheckoutItemsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['gray-200']};
  width: 100%;
  margin-top: 1rem;
`

export const DetailsAmount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-weight: 400;
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-700']};
      line-height: 1.3;
    }

    h3 {
      font-weight: 700;
      font-size: 1.25rem;
    }
  }

  a {
    all: unset;
    background-color: ${(props) => props.theme['yellow-500']};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 0.5rem;
    border-radius: 6px;
    margin-top: 1rem;
    cursor: pointer;

    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.6;
  }
`
