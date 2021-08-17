import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after,
    html,
    body {
        margin: 0;
        padding: 0;
    }

    body {
        font-size: 16px;
        font-family: 'Poppins', sans-seriff;
    }
`;