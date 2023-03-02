import React, {FC, PropsWithChildren} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import {useTheme} from "shared/contexts/themeContext";
import AppLink from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

const Navbar: FC<PropsWithChildren<NavbarProps>> = ({className}) => {
    const {toggleTheme} = useTheme();

    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <button onClick={toggleTheme}>toggle theme</button>

            <div className={classes.menu}>
                <AppLink to={"/"} className={classes.navbarLink}>Home</AppLink>
                <AppLink to={"/about"} className={classes.navbarLink}>About</AppLink>
            </div>
        </div>
    );
};

export default Navbar;