var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: "./www/app/boot.js",
	output: {
		path: __dirname,
		filename: "./www/dist/bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.json$/, loader: "json" }
		]
	}
};