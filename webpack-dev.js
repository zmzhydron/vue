var path = require("path")
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
  entry: {
    lol: path.resolve(__dirname,"./client/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dev/src"),
    filename: "[name].js",
    publicPath: "/fuckoff/"
  },
  // devtool: 'eval-source-map',
  externals: {
    'jquery' : 'jQuery',
    'jquery' : '$'
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dev"),
    port: 5678,
    inline: true,
    hot: true,
    host: "10.0.2.203"
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    //拷贝打包目录下的文件、文件夹到指定的输出
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "./client/t.js"), 
        // to: path.join(__dirname, "./dev/src/t.js")
      },
      {
        from: path.join(__dirname, "./node_modules/_jquery@3.2.1@jquery/dist/jquery.min.js"),
        to: path.join(__dirname, "./dev/src/jquery.min.js")
      }
    ]),
    new webpack.ProvidePlugin({
      // $: "jquery",
      // jQuery: "jquery"
    }),

    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('./manifest.json'),
    // })
    // new webpack.optimize.UglifyJsPlugin() //部署才用，作用是最小化文件，开发情况下会增加打包时间
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/,
        loader: "url-loader?limit=1&nameimgs/[hash:5].[name].[ext]"
      }
    ]
  },
  resolve: {
    extensions: [".vue",'.js','.coffee']
  }
}