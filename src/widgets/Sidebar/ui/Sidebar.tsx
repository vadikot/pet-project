import React, {FC, PropsWithChildren, useState} from "react";
import {classNames} from "shared/lib/classNames";
import classes from "./Sidebar.module.scss";
import {ThemeSwitcher} from "features/ThemeSwither";
import {Button, ButtonThemes} from "shared/ui/Button";
import {LanguageSwitcher} from "features/LanguageSwitcher";

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
            <Button onClick={sidebarToggleHandler} buttonTheme={ButtonThemes.default}>Collapse</Button>
            <div className={classes.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    );
};

export default Sidebar;