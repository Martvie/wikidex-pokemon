import { useContext } from "react";
import { MyThemeContext } from "../../contexts/themeContext";
import {HeaderContainer, Input} from "./styles";
import { Button } from "../Button";

const Header = ({onClick, value, onChange}) => {
    const {theme} = useContext(MyThemeContext)

    return(
        <HeaderContainer>
            <Input value={value} onChange={onChange}/>
            <Button onClick={onClick} name={"Pesquisar"}/>
        </HeaderContainer>
    )
}

export {Header}