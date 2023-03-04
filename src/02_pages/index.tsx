import React, {Suspense} from 'react';
import {Route, RouteProps, Routes} from "react-router-dom";
import {MainPage} from "02_pages/MainPage";
import {NotFoundPage} from "02_pages/NotFoundPage";
import {AboutPage} from "02_pages/AboutPage";
import {appRoutes, RoutesPaths} from "06_shared/config/routes";
import {useTranslation} from "react-i18next";

export const RoutingConfig: Record<appRoutes, RouteProps> = {
    [appRoutes.main]: {
        path: RoutesPaths[appRoutes.main],
        element: <MainPage/>,
    },
    [appRoutes.about]: {
        path: RoutesPaths[appRoutes.about],
        element: <AboutPage/>,
    },
    [appRoutes.notFound]: {
        path: RoutesPaths[appRoutes.notFound],
        element: <NotFoundPage/>,
    },
}

const Routing = () => {
    const {t} = useTranslation();

    return (
        <Suspense fallback={<div>{t('loading')}</div>}>
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