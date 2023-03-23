import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

const ReactRefreshTypeScript = require('react-refresh-typescript');

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const reactRefreshLoader = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve('ts-loader'),
                options: {
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                    transpileOnly: isDev,
                },
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|ttf|woff,)$/i,
        loader: 'file-loader',
        options: {
            name: isDev ? '[path][name].[ext]' : 'assets/[contenthash:8].[ext]',
        },
    };

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
        exclude: /node_modules/,
    };

    const styleFileNameForDev = '[path][name]__[local]--[hash:base64:5]';

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module\.(scss|sass)$/,
                        localIdentName: isDev ? styleFileNameForDev : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    return [
        // without isDev, we have a lot of errors in the production build, because the loader works crookedly
        isDev && reactRefreshLoader,
        svgLoader,
        fileLoader,
        typeScriptLoader,
        styleLoader,
    ].filter(Boolean);
}
