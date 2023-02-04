import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import light from "../styles/light";

export const MyThemeContext = createContext();

export const MyThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState(light);
    return (
        <MyThemeContext.Provider value={{ theme }}>
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