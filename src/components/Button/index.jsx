import { ButtonContainer } from "./styles";

const Button =({name, onClick}) =>{
    return(
        <ButtonContainer onClick={onClick}>{name}</ButtonContainer>
    )
}
Button.defaultProps = {
    name: "button",
};
export {Button}