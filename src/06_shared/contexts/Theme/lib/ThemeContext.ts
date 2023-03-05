import { createContext } from 'react';

export enum ThemeType {
    light = 'light',
    dark = 'dark',
}

export interface ThemeContextProps {
    theme?: ThemeType;
    toggleTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
