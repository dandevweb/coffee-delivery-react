import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Baloo 2', cursive ;
        line-height: 130%;
        color: ${(props) => props.theme['gray-800']};
    }

    h1 {
        color: ${(props) => props.theme['gray-900']};
        font-size: 3rem;
    }

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    p {
        color: ${(props) => props.theme['gray-700']};
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button {
        border-radius: 6px;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }

`
