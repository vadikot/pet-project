import React from "react";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "shared/contexts/Theme";
import Routing from "pages";
import {Header} from "widgets/Hedaer";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Header/>
            <main className="main">
                <Sidebar/>
                <div className="content">
                    <Routing/>
                </div>
            </main>
        </div>
    );
};

export default App;