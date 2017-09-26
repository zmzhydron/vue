var path = require("path")
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
  entry: {
    lol: path.resolve(__dirname,"./client/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dev"),
    filename: "[name].js",
    publicPath: "/fuckoff/"
  },
  // devtool: 'eval-source-map',
  externals: {
    'jquery' : 'window.jQuery',
    'jquery' : 'window.$',
  },
  devServer: {
    contentBase: path.join(__dirname, "./dev"),
    port: 8899,
    inline: true,
    hot: true,
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    //拷贝打包目录下的文件、文件夹到指定的输出
    new CopyWebpackPlugin([
      // {
      //   from: path.join(__dirname, "./client/src/rawSrc"), 
      //   to: path.join(__dirname, "./build/src/rawSrc")
      // },
      {
        from: path.join(__dirname, "./node_modules/jquery/dist/jquery.min.js"),
        // to: path.join(__dirname, "./dev/src/jquery.min.js")
      }
    ]),
    new webpack.ProvidePlugin({
      // $: "jquery",
      // jQuery: "jquery",
      // tools: "tools"
    }),

    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('./manifest.json'),
    // })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  
          query: {
              presets: [
                ["env", {
                  "targets": {
                    "browsers": ["last 2 versions", "ie >= 9"]
                  }
                }]
              ]
          }
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