import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;

        --color-grey-0: #f8f9fa;
        --color-grey-1: #868e96;
        --color-grey-2: #343b41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;

        --radius-1: 4px;

        --font-title-1: 18px;
        --font-title-2: 16px;

        --font-text-1: 14px;
        --font-text-2: 12px;
        --font-text-3: 10px;

        --font-weigth-1: 700;
        --font-weigth-2: 600;
        --font-weigth-3: 500;
        --font-weigth-4: 400;
    }

    html,
    body,
    header,
    ul,
    li,
    img,
    p,
    h1,
    h2,
    h3,
    nav,
    div,
    a,
    section,
    form,
    input,
    select,
    button,
    option,
    label {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        outline: none;
        border: none;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    body {
        background-color: #000000;
    }

`