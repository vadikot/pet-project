import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {AboutPage} from "pages/AboutPage";


const Routing = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="about" element={<AboutPage/>}/>

                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </Suspense>
    );
};

export default Routing;