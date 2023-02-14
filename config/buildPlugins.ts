import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {buildOptions} from "./types/config";

export function buildPlugins({paths}: buildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            filename: "[name].[contenthash].html",
            template: paths.html,
        }),
    ]
}