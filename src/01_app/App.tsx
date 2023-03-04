import React from "react";
import {classNames} from "06_shared/lib/classNames";
import {useTheme} from "06_shared/contexts/Theme";
import Routing from "02_pages";
import {Header} from "03_widgets/Header";
import {Sidebar} from "03_widgets/Sidebar";

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