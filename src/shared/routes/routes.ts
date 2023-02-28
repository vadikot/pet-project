export enum appRoutes {
    main = 'main',
    about = 'about',
    notFound = 'notFound',
}

export const RoutesPaths: Record<appRoutes, string> = {
    [appRoutes.main]: '/',
    [appRoutes.about]: 'about',
    [appRoutes.notFound]: '*',
};