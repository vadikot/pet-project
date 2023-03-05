import { ThemeContext, ThemeContextProps } from '06_shared/contexts/Theme/lib/ThemeContext';
import { useContext } from 'react';

/**
 * Returns an Object with the current Theme and function to Switch it.
 *
 * @returns {{theme, toggleTheme}}
 *
 * @beta
 */
export const useTheme = (): ThemeContextProps => useContext(ThemeContext);
