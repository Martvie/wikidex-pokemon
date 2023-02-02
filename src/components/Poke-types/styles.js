import styled, {css} from "styled-components";

export const TypeContainer = styled.div`
    height: 2rem;
    width: 5rem;
    margin: 0.5rem;

    border-radius: 1rem;
    border: 2px solid #000000;

background-color:  ${({ pokeType }) => pokeType === "bug" ? "#91BA2E" :
                        pokeType === "dark" ? "#2D221C" :  
                        pokeType === "dragon" ? "#29036A" :  
                        pokeType === "electric" ? "#969101" :  
                        pokeType === "fairy" ? "#F87EA7" :  
                        pokeType === "fighting" ? "#800B11" :  
                        pokeType === "fire" ? "#FC0C0B" :  
                        pokeType === "flying" ? "#085764" :   
                        pokeType === "ghost" ? "#472B53" :   
                        pokeType === "grass" ? "#204000" :   
                        pokeType === "ground" ? "#BFAC21" :   
                        pokeType === "ice" ? "#103D43" :   
                        pokeType === "normal" ? "#ACA974" :   
                        pokeType === "poison" ? "#611380" :   
                        pokeType === "psychic" ? "#8A0532" : 
                        pokeType === "steel" ? "#454545" : 
                        pokeType === "rock" ? "#474026" : 
                        pokeType === "water" ? "#08517A" : "#FFFFFF" 
};

    font-size: 0.8rem;
    color: #ffffff;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;

    ${({variant}) => variant !== "normal" && css`
    width: 3rem;
    height: 1rem;
    font-size: 0.5rem;
`}
`