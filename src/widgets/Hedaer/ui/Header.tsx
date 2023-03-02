import React, {FC, PropsWithChildren} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import classes from "./Header.module.scss";
import {Navbar} from "features/Navbar";

interface HeaderProps {
    className?: string;
}

const Header: FC<PropsWithChildren<HeaderProps>> = (props) => {
    const {className, children} = props;

    return (
        <div className={classNames(classes.Header, {}, [className, classes.container])}>
            {children}
            <Navbar/>
        </div>
    );
};

export default Header;