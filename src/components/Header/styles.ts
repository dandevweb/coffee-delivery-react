import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 104px;
  margin-bottom: 2.5rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0 0.2rem;
  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-900']};
  padding: 0.5rem 1rem;
  border: 0;
`

export const CartButton = styled.button`
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-900']};
  padding: 0.5rem;
  border: 0;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['yellow-100']};
  }
`
