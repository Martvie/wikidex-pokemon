import { useContext, useState } from "react";
import { MyThemeContext } from "../../contexts/themeContext";
import {HeaderContainer, Input} from "./styles";
import { Button } from "../Button";
import ReactSwitch from "react-switch";

const Header = ({onClick, value, onChange}) => {
    const {handleChangeTheme} = useContext(MyThemeContext)
    const [switcherValidate, setSwitcherValidate] = useState(true)
    const ToggleTheme = () =>{
        switcherValidate? setSwitcherValidate(false): setSwitcherValidate(true)
        handleChangeTheme()
    }



    return(
        <HeaderContainer>
            <Input value={value} onChange={onChange}/>
            <Button onClick={onClick} name={"Pesquisar"}/>
            <ReactSwitch
            checked={switcherValidate}
                onChange={ToggleTheme}
                offColor={"#808080"}
                onColor={"#a6a6a6"}
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                handleDiameter={25}
            />
        </HeaderContainer>
    )
}

export {Header}