import styled from 'styled-components'

export const SuccessContainer = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme['yellow-900']};
  }

  p {
    font-size: 1.25rem;
  }
`

export const SuccessContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;
`

export const OrderInfo = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid ${({ theme }) => theme['purple-500']};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 32.875rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      font-size: 1rem;
      line-height: 1.3;
    }
  }
`
