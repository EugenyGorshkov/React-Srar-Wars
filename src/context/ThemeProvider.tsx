import { useState } from "react"
import React, { useContext } from "react"

import { changeCssVaribles } from "services";
import { setLocalStorage } from 'utils';

export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'
export const THEME_NEITRAL = 'neitral'

interface ThemeContext {
    theme: string,
    change: Function,
}

const ThemeContext = React.createContext<ThemeContext | null>(null)

export const ThemeProvider:React.FC = ({ children, ...props }) => {
    let key = 'theme';
    const [theme, setTheme] = useState<string>('');

    const change = (name: string) => {
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