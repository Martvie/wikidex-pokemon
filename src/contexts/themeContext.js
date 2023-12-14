import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import light from "../styles/light";
import dark from "../styles/dark";

export const MyThemeContext = createContext();

export const MyThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState(light);

   const handleChangeTheme = () =>{
    theme.title === "light" ? setTheme(dark) : setTheme(light)
   }
    return (
        <MyThemeContext.Provider value={{ theme, handleChangeTheme }}>
            {children}
        </MyThemeContext.Provider>
    )
}

export const Theme = ({children}) => {
    const {theme} = useContext(MyThemeContext)
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}