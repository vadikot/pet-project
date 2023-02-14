import webpack from "webpack";
import path from "path";
import {buildWebpackConfig} from "./config/buildWebpackConfig";
import {buildPaths, modeTypes} from "./config/types/config";

const paths: buildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

let mode = modeTypes.development;
let isDev = mode === modeTypes.development;

const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
})

export default config;