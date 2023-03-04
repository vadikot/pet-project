import React, {ButtonHTMLAttributes, FC, PropsWithChildren} from "react";
import {classNames} from "06_shared/lib/classNames";
import classes from "./Button.module.scss";

export enum ButtonThemes {
    default = 'default',
    clear = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    buttonTheme?: ButtonThemes,
}

const Button: FC<PropsWithChildren<AppButtonProps>> = (props) => {
    const {className, children, buttonTheme = ButtonThemes.clear, ...other} = props;

    return (
        <button
            {...other}
            className={classNames(classes.AppButton, {}, [className, classes[buttonTheme]])}
        >
            {children}
        </button>
    );
};

export default Button;