import styled from "styled-components";

export const CardContainer = styled.div`
    height: 5.5rem;
    width: 100%;
    max-width: 22rem;
    margin: 0.2rem;

    display: flex;
    border-radius: 2rem;
    overflow: hidden;

    background-color:  ${({ background }) => background === "bug" ? "#BDDD6E" :
                        background === "dark" ? "#5F4632" :  
                        background === "dragon" ? "#8A55FD" :  
                        background === "electric" ? "#FFFA24" :  
                        background === "fairy" ? "#FFA0C2" :  
                        background === "fighting" ? "#E81319" :  
                        background === "fire" ? "#F67F0B" :  
                        background === "flying" ? "#5EB9B2" :   
                        background === "ghost" ? "#8E55A4" :   
                        background === "grass" ? "#3E9709" :   
                        background === "ground" ? "#E1D158" :   
                        background === "ice" ? "#1995A1" :   
                        background === "normal" ? "#CCC9AA" :   
                        background === "poison" ? "#A819D7" :   
                        background=== "psychic" ? "#EC0E63" : 
                        background === "steel" ? "#7B8E8A" : 
                        background === "rock" ? "#776A3E" : 
                        background === "water" ? "#0A7ABC" : "#FFFFFF" 
};
`

export const PokeInfo = styled.div`

    height: 100%;
    width: 32%;

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Image = styled.img`
    height: 70%;
    width: 70%;
`

export const OptionsContainer = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Option = styled.a`
    color: black;
    font-size: 0.8rem;

    cursor:pointer;
`

export const StatsContainer = styled.div`
    width: 68%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Line = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0.1rem;
    color: #202E16;
`

export const StatsHp = styled.div`
    width: 85%;
    height: 0.5rem;
    margin: 0.1rem;

    border-radius: 0.5rem;

    background-color: #FFFFFFFF;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({hp}) => hp * 100 / 255}%;
        height: 0.5rem;
        border-radius: 0.5rem;
        background-color: #38C63E;
    }

`

export const StatsAtk = styled.div`
    width: 85%;
    height: 0.5rem;
    margin: 0.1rem;

    border-radius: 0.5rem;

    background-color: #FFFFFFFF;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({atk}) => atk * 100 / 190}%;
        height: 0.5rem;
        border-radius: 0.5rem;
        background-color: #FF0B1E;
    }

`

export const StatsDef = styled.div`
    width: 85%;
    height: 0.5rem;
    margin: 0.1rem;

    border-radius: 0.5rem;

    background-color: #FFFFFFFF;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({def}) => def * 100 / 250}%;
        height: 0.5rem;
        border-radius: 0.5rem;
        background-color: #4095D0;
    }

`