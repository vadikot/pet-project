import React, {FC, PropsWithChildren} from "react";
import {classNames} from "shared/lib/classNames";
import classes from "./Header.module.scss";
import {Navbar} from "features/Navbar";
import {ThemeSwitcher} from "features/ThemeSwither";

interface HeaderProps {
    className?: string;
}

const Header: FC<PropsWithChildren<HeaderProps>> = (props) => {
    const {className} = props;

    return (
        <div className={classNames(classes.Header, {}, [className, classes.container])}>
            <ThemeSwitcher/>
            <Navbar/>
        </div>
    );
};

export default Header;