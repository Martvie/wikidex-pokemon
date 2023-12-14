import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    body{
        font-size: 62.5%;

        height: 100vh;

        background: ${(props) => props.theme.background};
        background-color: ${(props) => props.theme.backgroundColor};
        background-repeat: no-repeat;
        background-size: cover;
    }

`