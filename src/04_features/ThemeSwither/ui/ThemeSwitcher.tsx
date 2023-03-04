import React, {FC, PropsWithChildren} from "react";
import LightIcon from "06_shared/assets/icons/theme-light.svg"
import DarkIcon from "06_shared/assets/icons/theme-dark.svg"
import {ThemeType, useTheme} from "06_shared/contexts/Theme";
import {Button} from "06_shared/ui/Button";

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<PropsWithChildren<ThemeSwitcherProps>> = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button onClick={toggleTheme}
        >
            {
                (theme === ThemeType.light) ? <DarkIcon/> : <LightIcon/>
            }
        </Button>
    );
};

export default ThemeSwitcher;