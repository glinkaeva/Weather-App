import { createGlobalStyle } from 'styled-components'
import base from './base'

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        max-width: 100%;
        display: block;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        overflow: hidden;
        font-style: normal;
        font-family: 'Roboto', sans-serif;
        color: ${base.colors.black}
    }
`