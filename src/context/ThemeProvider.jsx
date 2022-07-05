import { useState } from "react"
import React, { useContext } from "react"

import { changeCssVaribles } from "@services/changeCssVaribles";
import { setLocalStorage } from '@utils/localStorage';

export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'
export const THEME_NEITRAL = 'neitral'

const ThemeContext = React.createContext()

export const ThemeProvider = ({ children, ...props }) => {
    let key = 'theme';
    const [theme, setTheme] = useState(null);

    const change = name => {
        setTheme(name);
        setLocalStorage(key, name);

        changeCssVaribles(name);
    }



    return (
        <ThemeContext.Provider
            value={{
                theme,
                change
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext)