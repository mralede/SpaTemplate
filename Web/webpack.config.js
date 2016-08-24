
/* global __dirname */
var path = require('path');
var pkg = require('./package.json');  //loads npm config file
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

const rootDir = path.resolve();
const srcDir = path.resolve(__dirname, 'source');
const outDir = path.resolve(__dirname, 'dist');

var common = {
	node: {
		__dirname: true
	},

	context: srcDir,
	entry: {
		app: './index.js',
		vendor: Object.keys(pkg.dependencies) //get npm vendors deps from config
	},
	output: {
		path: outDir,
		filename: '[name]-[hash:6].js'
	},

	devtool: 'source-map',

	plugins: [
		//new webpack.ProvidePlugin({
		//	$: "jquery",
		//	jQuery: "jquery"
		//}),

		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-[hash:6].js'),
		new VendorChunkPlugin('vendor'),

		new ExtractTextPlugin("styles-[hash:6].css"),

		new HtmlWebpackPlugin({
			hash: true,
			filename: 'index.html',
			template: path.join(srcDir, '/index.html'),
		}),
	],

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel', // 'babel-loader' is also a legal name to reference
				query: {
					presets: ['es2015', 'react']
				}
			},
			//{ test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },

			{test: /\.css$/,	loader: ExtractTextPlugin.extract("style", "css")},
			{test: /\.sass$/, loader: ExtractTextPlugin.extract("style", "css!sass")},

			{ test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|woff2|\.ttf$|\.eot$/, loader: "url" },

			{test: /\.html$/, loader: 'html'	},

			{test: /config.json/, loader: 'file?name=config-[hash:6].json'}
		]
	},

	devServer: {
		contentBase: outDir,
		historyApiFallback: true,
		stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
	}
};


var config;
switch (process.env.npm_lifecycle_event) {
	case 'build':
		config = merge(common, {
			plugins: [
				new CleanWebpackPlugin([outDir]),

				new webpack.optimize.UglifyJsPlugin({ mangle: false, compress: { warnings: false } }),
			]
		});
		break;
	default:
		config = merge(common, {});
}

module.exports = config;
