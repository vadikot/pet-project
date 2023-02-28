import React from "react";

const NotFoundPageLazy = React.lazy(() => import('./ui/NotFoundPage'));

export {NotFoundPageLazy as NotFoundPage};