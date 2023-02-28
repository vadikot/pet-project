import React from "react";

// const MainPageLazy = React.lazy(() => import('./MainPage'));

const MainPageLazy = React.lazy(() => new Promise(resolve => {
    //     @ts-ignore
    setTimeout(() => resolve(import('./ui/MainPage')), 1500);
}));

export {MainPageLazy as MainPage};

