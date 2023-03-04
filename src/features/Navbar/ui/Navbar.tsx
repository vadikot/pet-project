import React, {FC, PropsWithChildren} from "react";
import {classNames} from "shared/lib/classNames";
import classes from "./Navbar.module.scss";
import {AppLink} from "shared/ui/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

const Navbar: FC<PropsWithChildren<NavbarProps>> = ({className}) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <AppLink to={"/"} className={classes.navbarLink}>{t('Home')}</AppLink>
            <AppLink to={"/about"} className={classes.navbarLink}>{t('About')}</AppLink>
        </div>
    );
};

export default Navbar;