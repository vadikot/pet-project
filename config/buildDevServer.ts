import {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {BuildOptions} from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const {paths, port} = options;

    return {
        static: {
            directory: paths.build,
        },
        open: true,
        // compress: true,
        port,
    };
}