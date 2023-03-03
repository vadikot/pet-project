import React, {FC, PropsWithChildren} from "react";
import {classNames} from "shared/lib/classNames";
import classes from "./Navbar.module.scss";
import {AppLink} from "shared/ui/AppLink";

interface NavbarProps {
    className?: string;
}

const Navbar: FC<PropsWithChildren<NavbarProps>> = ({className}) => {
    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <AppLink to={"/"} className={classes.navbarLink}>Home</AppLink>
            <AppLink to={"/about"} className={classes.navbarLink}>About</AppLink>
        </div>
    );
};

export default Navbar;