import styled from "styled-components";



export const MainContent = styled.main`
    
    width: 100%;
    height: 93vh;

    display:  flex;

    @media (max-width: 680px) {
    flex-direction: column;
  }

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
        align-content: center;
        flex-wrap: wrap;
        
        @media (max-width: 680px) {
            justify-content: center;
        }
}
`