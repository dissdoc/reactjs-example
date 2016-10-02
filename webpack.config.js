 'use strict';

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rimraf = require('rimraf');

 var debug = process.env.NODE_ENV !== 'production',
     webpack = require('webpack');

 module.exports = {
 	context: __dirname + '/src',
 	entry: {
 		main: './js/main',
 		styles: './styles'
 	},
 	
 	module: {
 		loaders: [
	 		{
	 			test: /\.js?$/,
	 			exclude: /(node_modules|bower_components)/,
	 			loader: 'babel',
	 			query: {
	 				presets: ['react', 'es2015', 'stage-0'],
	 				plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
	 			}	
	 		},
	 		{
		      test:   /\.styl$/,
		      loader: ExtractTextPlugin.extract('css!stylus?resolve url')
		    }
 		]
 	},
 	
 	output: {
 		path: __dirname + '/public',
 		publicPath: '/',
 		filename: 'app.min.js'
 	},

 	resolve: {
 		extensions: ['', '.js', '.styl']
 	},

 	plugins: debug ? [
 		new webpack.OldWatchingPlugin(),
 		new ExtractTextPlugin('styles.css', {allChunks: true}),
 		new HtmlWebpackPlugin({
 			template: 'index.html',
 			filename: './index.html'
 		})
 	] : [
 		new HtmlWebpackPlugin({
 			template: 'index.html',
 			filename: './index.html'
 		}),
 		new ExtractTextPlugin('styles.css', {allChunks: true}),
 		new webpack.optimize.DedupePlugin(),
 		new webpack.optimize.OccurenceOrderPlugin(),
 		new webpack.optimize.UglifyJsPlugin({
 			mangle: false,
 			sourcemap: false
 		}),
 		{
	      apply: (compiler) => {
	        rimraf.sync(compiler.options.output.path);
	      }
	    }
 	],

 	devServer: {
 		port: 3000
 	}
 };