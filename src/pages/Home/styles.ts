import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const IntroSection = styled.section`
  padding-bottom: 5.875rem;
  display: grid;
  grid-template-columns: 36rem 1fr;
  gap: 2rem;
  align-items: flex-start;

  h3 {
    padding: 1rem 0;
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.3rem;
  }

  ul {
    padding: 3rem 0;
    display: grid;
    grid-template-columns: 18rem 1fr;
    align-items: flex-end;
    gap: 1.25rem;
    color: ${(props) => props.theme['gray-700']};
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      p {
        white-space: nowrap;
      }
    }

    li span {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${(props) => props.theme.white};
      }
    }
  }

  img {
    width: 100%;
  }

  //create responsive layout
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ICON_BG_COLOR = {
  orange: 'yellow-900',
  gray: 'gray-700',
  yellow: 'yellow-500',
  purple: 'purple-500',
} as const

interface IconContainerProps {
  bgColor: keyof typeof ICON_BG_COLOR
}

export const IconContainer = styled.span<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme[ICON_BG_COLOR[props.bgColor]]};
  border-radius: 50%;
`
