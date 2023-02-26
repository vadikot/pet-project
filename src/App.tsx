import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {NotFoundPageLazy} from "./pages/NotFoundPage/NotFoundPage.lazy";
import {useTheme} from "./theme/useThemes";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to="/">home Page</Link><br/>
            <Link to="/about">about Page</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageLazy/>}/>
                    <Route path="about" element={<AboutPageLazy/>}/>

                    <Route path="*" element={<NotFoundPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;