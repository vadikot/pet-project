import React, {FC, PropsWithChildren} from "react";
import {classNames} from "shared/lib/classNames";
import classes from "./Header.module.scss";
import {Navbar} from "features/Navbar";

interface HeaderProps {
    className?: string;
}

const Header: FC<PropsWithChildren<HeaderProps>> = (props) => {
    const {className} = props;

    return (
        <header className={classNames(classes.Header, {}, [className, classes.container])}>
            <span className={classes.logo}>Logo</span>
            <Navbar/>
        </header>
    );
};

export default Header;