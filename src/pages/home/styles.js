import styled from "styled-components";



export const MainContent = styled.main`
    
    width: 100%;
    height: 93vh;

    display:  flex;

`

export const Column = styled.div`
    height: 100%;
    
    display: flex;
    justify-content: center;
    &:first-child{
        align-items: center;
     }

    &:last-child{
        width: 100%;
        justify-content: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
    }
`