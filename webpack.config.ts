import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            filename: "[name].[contenthash].html",
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ],
};

export default config;