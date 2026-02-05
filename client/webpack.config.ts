import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { type Configuration as DevServerConfiguration } from 'webpack-dev-server';

type Mode = 'development' | 'production';

interface EnvVariables {
  mode: Mode;
  port: number;
}

const dirname = path.resolve();

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development';

  const config: webpack.Configuration & {devServer?: DevServerConfiguration} = {
    mode: env.mode ?? 'development',
    entry: path.resolve(dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
      // publicPath: '/'
    },

    plugins: [
      // new webpack.DefinePlugin({
      //     'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
      // }),
      new HtmlWebpackPlugin({
        template: path.resolve(dirname, 'public', 'index.html'),
        // inject: 'body'
      }),
      isDev && new webpack.ProgressPlugin(),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024,
            },
          },
          generator: {
            filename: 'assets/images/[name][ext]',
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                esModule: false,
                modules: {
                  auto: true,
                  localIdentName: isDev
                    ? '[path][name]__[local]--[hash:base64:5]'
                    : '[hash:base64:8]',
                  exportLocalsConvention: 'camelCase',
                },
              },
            },
            'sass-loader',
          ],
        },
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
    devtool: isDev && 'inline-source-map',
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
          historyApiFallback: true,
        }
      : undefined,
  };

  return config;
};
