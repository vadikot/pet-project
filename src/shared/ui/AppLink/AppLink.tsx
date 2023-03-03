import React, {FC, PropsWithChildren} from "react";
import {classNames} from "shared/lib/classNames";
import classes from "./AppLink.module.scss";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    default = "default",
    border = "border",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    linkTheme?: AppLinkTheme;
}

const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
    const {to, className, children, linkTheme = AppLinkTheme.default, ...otherProps} = props;

    return (
        <Link
            {...otherProps}
            to={to}
            className={classNames(classes.AppLink, {}, [className, classes[linkTheme]])}
        >
            {children}
        </Link>
    );
};

export default AppLink;