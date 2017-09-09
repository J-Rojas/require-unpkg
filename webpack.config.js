var path = require('path')
var webpack = require('webpack')
var prod = (process.env.NODE_ENV === 'production')

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		filename: prod ? 'require.min.js' : 'require.js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				test: /\.js/,
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.js']
	},
	devtool: 'source-map',
	plugins: prod ? [
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
			sourceMap: true
		})
	] : []
}