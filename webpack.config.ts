import path from "path";
import webpack, { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import dotenv from "dotenv";

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const isDevelopment = process.env.NODE_ENV !== 'production';

const config: Configuration = {
    name: 'Chatting-app',
    mode: isDevelopment ? 'development' : 'production',                 // 웹팩 시작 모드 설정
    devtool: !isDevelopment ? 'hidden-source-map' : 'eval',             // 디버깅을 위한 설정 배포시 'eval'
    resolve: {                                                          // 경로 및 확장자 설정
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        alias: {
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@layouts': path.resolve(__dirname, 'src/layouts'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@typings': path.resolve(__dirname, 'src/typings'),
            '@recoil': path.resolve(__dirname, 'src/recoil'),
        },
    },
    entry: {                                                            // 진입점 설정
        app: './client',
    },
    module: {                                                           // 로더 설정
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: { browsers: ['IE 10'] },
                                debug: isDevelopment,
                            },
                        ],
                        [
                            '@babel/preset-react',
                            {
                                'runtime': 'automatic'
                            }
                        ],
                        '@babel/preset-typescript',
                    ],
                    env: {
                        development: {
                            plugins: [
                                // ['@emotion', { sourceMap: true }],
                                // require.resolve('react-refresh/babel')
                            ],
                        },
                        production: {
                            // plugins: ['@emotion'],
                        },
                    }
                },
                exclude: path.join(__dirname, 'node_modules'),
            },
            {
                test: /\.css?$/,
                use: [
                    { loader: 'style-loader' },
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true,
                      },
                    },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'images/[hash][ext][query]',
                },
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin ({
            async: false,
        }),
        new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed),
        })
    ],
    output: {                                                                                           // 빌드 결과물 위치 지정
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
        clean: true,
    },
    devServer: {
        historyApiFallback: true, // react router
        port: 8082, // 기본 3000
        devMiddleware: { publicPath: '/dist/' },
        // static: { directory: path.join(__dirname, 'src') },
        static: { directory: path.resolve(__dirname) },
        compress: true, // 파일 압축 해제
        proxy: {
            '/api/': {
                target: process.env.REACT_APP_SERVER_URL,
                changeOrigin: true,
            },
        },
    },
};

if (isDevelopment && config.plugins) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    // config.plugins.push(new ReactRefreshWebpackPlugin());
    // config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: true }));
}
if (!isDevelopment && config.plugins) {
    config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
    // config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
}

export default config;