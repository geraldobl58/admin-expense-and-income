import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        font-family: 'Montserrat', sans-serif;     
    }

    button: {
        cursor: pointer;
    }
`;