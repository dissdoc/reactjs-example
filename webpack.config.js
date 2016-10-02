 'use strict';

 var debug = process.env.NODE_ENV !== 'production',
     webpack = require('webpack');

 module.exports = {
 	context: __dirname + '/src',
 	entry: './js/main.js',
 	
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
	 		}
 		]
 	},
 	
 	output: {
 		path: __dirname + '/src/',
 		filename: 'app.min.js'
 	},

 	plugins: debug ? [
 		new webpack.OldWatchingPlugin()
 	] : [
 		new webpack.optimize.DedupePlugin(),
 		new webpack.optimize.OccurenceOrderPlugin(),
 		new webpack.optimize.UglifyJsPlugin({
 			mangle: false,
 			sourcemap: false
 		})
 	],

 	devServer: {
 		port: 3000
 	}
 };