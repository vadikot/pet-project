import React, {FC, PropsWithChildren, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeType} from "../lib/ThemeContext"

interface ThemeProviderProps {
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || ThemeType.light;

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({children}) => {
    const [theme, setTheme] = useState<ThemeType>(defaultTheme);

    const toggleTheme = () => {
        const newTheme = theme === ThemeType.light ? ThemeType.dark : ThemeType.light;

        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    const defaultThemeProps = useMemo(() => ({
        theme,
        toggleTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultThemeProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;