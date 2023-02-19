import React from 'react';
import "./app.scss";
import {Counter} from "./components/Counter";

export const App = () => {
    return (
        <div className="app">
            Hello world
            <Counter/>
        </div>
    );
};

// export default App;