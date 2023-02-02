import {HeaderContainer, Input, Button} from "./styles";

const Header = ({onClick, value, onChange}) => {
    return(
        <HeaderContainer>
            <Input value={value} onChange={onChange}/>
            <Button onClick={onClick}> Pesquisar</Button>
        </HeaderContainer>
    )
}

export {Header}