import React, { FC, PropsWithChildren, useState } from 'react';
import { classNames } from '06_shared/lib/classNames';
import { ThemeSwitcher } from '04_features/ThemeSwither';
import { Button, ButtonThemes } from '06_shared/ui/Button';
import { LanguageSwitcher } from '04_features/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar: FC<PropsWithChildren<SidebarProps>> = (props) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const { className } = props;

    const { t } = useTranslation();

    const sidebarToggleHandler = () => {
        setIsCollapsed((prevState) => !prevState);
    };

    return (
        <div className={classNames(classes.Sidebar, { [classes.collapsed]: isCollapsed }, [className])}>
            <Button onClick={sidebarToggleHandler} buttonTheme={ButtonThemes.default}>{t('Collapse')}</Button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
