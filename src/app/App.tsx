import React from "react";
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "shared/contexts/themeContext";
import Routing from "pages";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to="/">home Page</Link><br/>
            <Link to="/about">about Page</Link>

            <Routing/>
        </div>
    );
};

export default App;