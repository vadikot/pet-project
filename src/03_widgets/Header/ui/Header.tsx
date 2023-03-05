import React, { FC, PropsWithChildren } from 'react';
import { classNames } from '06_shared/lib/classNames';
import { Navbar } from '04_features/Navbar';
import classes from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

const Header: FC<PropsWithChildren<HeaderProps>> = (props) => {
    const { className } = props;

    return (
        <header className={classNames(classes.Header, {}, [className, classes.container])}>
            <span className={classes.logo}>Logo</span>
            <Navbar />
        </header>
    );
};

export default Header;
