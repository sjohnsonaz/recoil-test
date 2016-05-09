//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
module.exports = {
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader!clean-css-loader!postcss-loader"
        }, {
            test: /\.less$/,
            loader: "style-loader!css-loader!clean-css-loader!postcss-loader!less-loader"
        }]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js']
    },
    output: {
        filename: "[name].js"
    },
    devtool: 'source-map',
    //plugins: [new ExtractTextPlugin("[name].css")],
    postcss: [autoprefixer({
        browsers: ['last 2 versions']
    })]
};
