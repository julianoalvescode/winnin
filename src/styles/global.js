import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', Helvetica, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        background-color: ${(props) => props.theme.colors.background}
    }


    button, a {
        font-family: 'Roboto', Helvetica, Helvetica, sans-serif;
    }


`;
