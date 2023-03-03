import React, {FC, PropsWithChildren, useState} from "react";
import {classNames} from "shared/lib/classNames";
import classes from "./Sidebar.module.scss";
import {ThemeSwitcher} from "features/ThemeSwither";
import {AppButton, AppButtonThemes} from "shared/ui/AppButton";

interface SidebarProps {
    className?: string;
}

const Sidebar: FC<PropsWithChildren<SidebarProps>> = (props) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const {className} = props;

    const sidebarToggleHandler = () => {
        setIsCollapsed(prevState => !prevState);
    };

    return (
        <div className={classNames(classes.Sidebar, {[classes.collapsed]: isCollapsed}, [className])}>
            <AppButton onClick={sidebarToggleHandler} buttonTheme={AppButtonThemes.default}>Collapse</AppButton>
            <ThemeSwitcher/>
            {/*<LanguageSwithcer/>*/}
        </div>
    );
};

export default Sidebar;