var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
//entry: __dirname + "/src/js/main.js",
  entry:{
  	main : __dirname + "/src/js/main.js",
  	a : __dirname + "/src/js/a.js",
  	b : __dirname + "/src/js/b.js",
  },
  output: {
    path: __dirname + "/build",
    filename: "js/[name]-[hash].js",
    publicPath:'http://cdn.com' //生成的js前面定义绝对路径
  },
  plugins: [
  	  new htmlWebpackPlugin({
	  	filename:"a.html",
	  	template:'index.html',//指定生成关联文件（根目录的index.html)
	  	title:'this is a',
	  	inject:'body',
	  	chunks:['main','a']
	  }),
	  new htmlWebpackPlugin({
	  	filename:"b.html",
	  	template:'index.html',//指定生成关联文件（根目录的index.html)
	  	title:'this is b',
	  	inject:'body',
	  	chunks:['b']
	  }),
	  new htmlWebpackPlugin({
	  	filename:"c.html",
	  	template:'index.html',//指定生成关联文件（根目录的index.html)
	  	title:'this is c',
	  	inject:'body',
	  	chunks:['main','c']
	  })
  ]
}
