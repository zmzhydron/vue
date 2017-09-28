var path = require("path")
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: {
    lol: path.resolve(__dirname,"./client/index.js")
  },
  output: {
    path: path.resolve(__dirname, "./dev"),
    filename: "[name].js",
    publicPath: "/src/"
  },
  // context: path.resolve(__dirname, "./client"),
  devtool: 'eval-source-map',
  externals: {
    'jquery' : 'window.jQuery',
    'jquery' : 'window.$',
    'Vue': "Vue",
  },
  devServer: {
    contentBase: path.join(__dirname, "./client"),
    port: 8899,
    inline: true,
    noInfo: false,
    hot: true,
    stats: { colors: true },
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: 'index.htm' },
    ],
    },
    // open: true,
    // openPage: "app.htm",
    // host: "10.0.2.203"
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    //拷贝打包目录下的文件、文件夹到指定的输出
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "./node_modules/jquery/dist/jquery.min.js"),
      },
      {
        from: path.join(__dirname, "./node_modules/vue/dist/vue.js"),
      }
    ]),
    new webpack.ProvidePlugin({
      // $: "jquery",
      // jQuery: "jquery",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
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
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader",
      },
      {
        test: /\.css?$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
      },
      {
        test: /(\.html|\.htm)$/,
        loaders: ['file-loader?name=[path][name].[ext]', 'template-html-loader?raw=true&engine=lodash&isDev=true']
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.(jpg|png|gif)$/,
        exclude: /node_modules/,
        loader: "url-loader",
        options: {
          limit: 1,
          name: "./Images/[name]-[hash:4].[ext]"
        }
      }
    ]
  },
  resolve: {
    modules: [
      'client',
      'node_modules'
    ],
    extensions: [".vue",'.js','.coffee'],
    alias: {
      // "vue$": path.join(__dirname, "./node_modules/vue/dist/vue.js")
    }
  }
}