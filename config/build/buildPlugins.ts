import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            // filename: "[name].[contenthash].html",
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        isDev && new webpack.HotModuleReplacementPlugin(),
        isDev && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean);
}
