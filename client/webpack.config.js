import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  entry: { index: path.resolve(dirname, 'src', 'index.tsx') },

  output: {
    path: path.resolve(dirname, '/build'),
    filename: 'index.js'
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(dirname, 'src', 'index.html')
    }),
    new NodePolyfillPlugin()
  ],

  resolve: {
    alias: {
      '@': path.resolve(dirname, 'src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: {
            loader: 'file-loader',
            options: {name: 'img/[name].[ext]'}
        }
      }
    ]
  }
};

export default config;