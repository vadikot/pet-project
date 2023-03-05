import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths, modeTypes } from './config/build/types/config';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
};

module.exports = (env: BuildEnv) => {
    const PORT = env.port || 3000;
    const mode = env.mode || modeTypes.development;

    const isDev = mode === modeTypes.development;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};
