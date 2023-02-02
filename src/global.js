import { createGlobalStyle } from "styled-components";
import background from "./images/background.jpg"

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

        background: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
    }

`