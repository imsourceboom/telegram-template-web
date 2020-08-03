import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        font-family: 'Spoqa Han Sans', sans-serif;
        font-size: 14px;
        line-height: 1.2;
        word-wrap: break-word;
        /* scroll-behavior: smooth; */
        -ms-overflow-style: none;
        /* Microsoft scrollbar none */
        &,
        & * {
            scrollbar-width: none;
            /* window Firefox scrollbar none */
        }
    }
    ::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari scrollbar none */
    }
    body {
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        color: rgba(29,29,31,1);
        letter-spacing: -0.05em;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button, select {
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        box-sizing: border-box;
    }
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
        display: block;
    }
    div, span, article, section, header, footer, aside, p, ul, li, fieldset, legend, label, a, nav, form {
        box-sizing: border-box;
    }
    ol, ul, li {
        list-style: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    img {
        max-width: 100%;
        height: auto;
        border: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: bold;
        line-height: 1.5;
    }

    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 24px;
    }

    h3 {
        font-size: 19px;
    }

    h5 {
        font-size: 13px;
    }

    h6 {
        font-size: 11px;
    }
    p {
        line-height: 1.6;
    }
    input,
    select,
    button,
    textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-family: 'Spoqa Han Sans', sans-serif;
        font-size: 14px;
    }
    button {
        background: transparent;
        cursor: pointer;
    }
    select {
        -webkit-border-radius: 0px;
        -moz-border-radius: 0px;
        border-radius: 0px;

        &::-ms-expand {
            display: none;
        }
    }
    input,
    textarea {
        border: 1px solid rgba(29, 29, 31, 0.2);
        outline:none;

        &::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: rgba(112, 112, 112, 0.4);
            opacity: 1;
            font-size: 0.95em;
            /* Firefox */
        }

        &:-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: rgba(112, 112, 112, 0.4);
            font-size: 0.95em;
        }

        &::-ms-input-placeholder {
            /* Microsoft Edge */
            color: rgba(112, 112, 112, 0.4);
            font-size: 0.95em;
        }
    }
`;
