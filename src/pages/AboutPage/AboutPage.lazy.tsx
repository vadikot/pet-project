import React from "react";

// export const AboutPageLazy = React.lazy(() => import('./AboutPage'));

export const AboutPageLazy = React.lazy(() => new Promise(resolve => {
    //     @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));