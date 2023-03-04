import {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {BuildOptions} from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const {port} = options;

    return {
        static: {
            // directory: paths.build,
        },
        open: {
            app: "Google Chrome",
        },
        // compress: true,
        port,
        historyApiFallback: true,
    };
}