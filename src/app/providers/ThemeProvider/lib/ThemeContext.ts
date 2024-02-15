import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light_theme',
    DARK = 'dark_theme'
}

export interface ThemeContexProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContexProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
