import React, { FC, PropsWithChildren } from 'react';
import { classNames } from '06_shared/lib/classNames';
import classes from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

const Loader: FC<PropsWithChildren<LoaderProps>> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(classes.Loader, {}, [className])}>
            <div className={classes['lds-spinner']}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};

export default Loader;
