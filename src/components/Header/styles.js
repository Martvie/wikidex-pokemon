import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 2.5rem;
    background-color:${(props) => props.theme.header} ;
    border-radius: 0.2rem;

    display: flex;
    align-items: center;
`

export const Input  = styled.input`
    width: 70%;
    height: 1rem;
    padding: 1rem;
    border: 0;
    border-radius: 0.3rem;
`