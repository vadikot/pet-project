import {ThemeContext, ThemeContextProps} from "shared/contexts/Theme/lib/ThemeContext";
import {useContext} from "react";

/**
 * Returns an Object with the current Theme and function to Switch it.
 *
 * @returns {{theme, toggleTheme}}
 *
 * @beta
 */
export const useTheme = (): ThemeContextProps => {
    return useContext(ThemeContext);
}