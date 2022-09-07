import { useState } from "react"
import React, { useContext } from "react"

import { changeCssVaribles } from "services";
import { setLocalStorage } from 'utils';

export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'
export const THEME_NEITRAL = 'neitral'

interface IThemeContext {
    theme: string,
    change: (arg0: string) => void,
}

interface ThemeProviderProps {
    children: React.ReactNode,
}

const ThemeContext = React.createContext<IThemeContext>({
    theme: '',
    change: () => {}
})

export const ThemeProvider:React.FC<ThemeProviderProps> = ({ children, ...props }) => {
    let key = 'theme';
    const [theme, setTheme] = useState<string>('');

    const change = (name: string) => {
        setTheme(name);
        setLocalStorage(key, name);

        changeCssVaribles(name);
    }

    const context: IThemeContext = {
        theme,
        change
    }



    return (
        <ThemeContext.Provider
            value={context}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext)