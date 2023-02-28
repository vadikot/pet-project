import React, {Suspense} from 'react';
import {Route, RouteProps, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {AboutPage} from "pages/AboutPage";
import {appRoutes, RoutesPaths} from "shared/routes/routes";

export const RoutingConfig: Record<appRoutes, RouteProps> = {
    [appRoutes.main]: {
        path: RoutesPaths.main,
        element: <MainPage/>,
    },
    [appRoutes.about]: {
        path: RoutesPaths.about,
        element: <AboutPage/>,
    },
    [appRoutes.notFound]: {
        path: RoutesPaths.notFound,
        element: <NotFoundPage/>,
    },
}

const Routing = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    Object.values(RoutingConfig).map(route => (
                        <Route key={route.path} path={route.path} element={route.element}/>
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default Routing;