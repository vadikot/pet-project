import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "shared/contexts/themeContext";
import Routing from "pages";
import {Header} from "widgets/Hedaer";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Header/>
            <Routing/>
        </div>
    );
};

export default App;