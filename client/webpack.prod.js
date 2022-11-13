import commonConfig from './webpack.config.js';
import { merge } from 'webpack-merge';

const config = merge(commonConfig, {
  mode: 'production'
});

export default config;