import React, {ButtonHTMLAttributes, FC, PropsWithChildren} from "react";
import {classNames} from "shared/lib/classNames";
import classes from "./AppButton.module.scss";

export enum AppButtonThemes {
    default = 'default',
    clear = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    buttonTheme?: AppButtonThemes,
}

const AppButton: FC<PropsWithChildren<AppButtonProps>> = (props) => {
    const {className, children, buttonTheme = AppButtonThemes.clear, ...other} = props;

    return (
        <button
            {...other}
            className={classNames(classes.AppButton, {}, [className, classes[buttonTheme]])}
        >
            {children}
        </button>
    );
};

export default AppButton;