export enum modeTypes {
    development = "development",
    production = "production",
}

export interface buildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface buildOptions {
    mode: modeTypes;
    paths: buildPaths;
    isDev: boolean;
}