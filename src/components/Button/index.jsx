import { ButtonContainer } from "./styles";

const Button =({name, onClick}) =>{
    return(
        <ButtonContainer onClick={onClick}>{name}</ButtonContainer>
    )
}

export {Button}