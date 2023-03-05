import React, { FC, PropsWithChildren } from 'react';
import { classNames } from '06_shared/lib/classNames';
import { AppLink } from '06_shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<PropsWithChildren<NavbarProps>> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <AppLink to="/" className={classes.navbarLink}>{t('Home')}</AppLink>
            <AppLink to="/about" className={classes.navbarLink}>{t('About')}</AppLink>
        </div>
    );
};

export default Navbar;
