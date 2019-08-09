// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/build', // 将输出放到dist文件夹
    // publicPath: 'build',  // 打包的基础路径
    // filename: 'app-[hash].js'
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'demos') ,//内置服务器动态加载页面所在的目录
    host: '127.0.0.1',
    port: 8080,
    inline: true,
    compress: false, 
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  module: {
    rules: [
      // { 
      //   test: /\.css$/, 
      //   use: ExtractTextPlugin.extract({
      //     use: ['css-loader'], // 转换 .css 文件需要使用的 Loader
      //   }),
      // },
      {
        test: /\.ts|.tsx$/,
        use: ['awesome-typescript-loader'],
      }
    ]
  },
  plugins: [
    // new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
            template: __dirname + "/demos/index.html" //new 一个这个插件的实例，并传入相关的参数
        }),
    // new ExtractTextPlugin({
    //   filename: `[name]_[contenthash:8].css` // 从 .js 文件中提取出来的 .css 文件的名称
    // }),
  ],
}
