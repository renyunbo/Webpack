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
  plugins: [new htmlWebpackPlugin({
//	filename:"index-[hash].html",
  	filename:"index.html",
  	template:'index.html',//指定生成关联文件（根目录的index.html)
  	inject:'head',//表示js引用的位置
  	title:'this is a test',
  	data:new Date(),
  	minify:{
  		removeComments:true,//删除注释
  		collapesWhitespace:true//取出空格
  	}
  	
  })]
}
