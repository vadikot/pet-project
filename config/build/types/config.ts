export enum modeTypes {
    development = 'development',
    production = 'production',
}

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: modeTypes;
    port: number;
}

export interface BuildOptions {
    mode: modeTypes;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}
