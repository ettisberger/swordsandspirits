const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

module.exports = merge(commonConfig, {
    plugins: [
        new webpack.DefinePlugin(Object.assign(require('./src/config/config.json')))
    ]
});