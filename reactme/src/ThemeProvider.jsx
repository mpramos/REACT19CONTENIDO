import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({children}) =>{
    const [darkMode, setDarkMode] = useState(false);
    const toogleTheme = () => setDarkMode(!darkMode);
    return (
        <ThemeContext.Provider value={{ darkMode, toogleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}