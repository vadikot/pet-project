import React from "react";


// const AboutPageLazy = React.lazy(() => import('./AboutPage'));

const AboutPageLazy = React.lazy(() => new Promise(resolve => {
    //     @ts-ignore
    setTimeout(() => resolve(import('./ui/AboutPage')), 1500);
}));

export {AboutPageLazy as AboutPage};


