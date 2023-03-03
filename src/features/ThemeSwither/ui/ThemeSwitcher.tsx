import React, {FC, PropsWithChildren} from "react";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import {ThemeType, useTheme} from "shared/contexts/Theme";
import {AppButton} from "shared/ui/AppButton";

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<PropsWithChildren<ThemeSwitcherProps>> = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <AppButton onClick={toggleTheme}
        >
            {
                (theme === ThemeType.light) ? <LightIcon/> : <DarkIcon/>
            }
        </AppButton>
    );
};

export default ThemeSwitcher;