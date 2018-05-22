var path = require("path")
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
  entry: {
    lol: path.resolve(__dirname,"./client/index.js"),
  },
//   main: [
//     'webpack/hot/dev-server',
//     `webpack-dev-server/client?http://${config.host}:${config.port}`,
//     'index.js'
// ]

  output: {
    path: path.resolve(__dirname, "./build/src"),
    filename: "[name].js",
    // publicPath: "http://www.zzhangmingzhimba.com:8081/"
    // publicPath: "http://localhost:8081/"
    // publicPath: "/src/"
  },
  // devtool: 'eval-source-map',
  plugins : [
    //拷贝打包目录下的文件、文件夹到指定的输出
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "./node_modules/_jquery@3.2.1@jquery/dist/jquery.min.js"),
        // to: path.join(__dirname, "./build/src/jquery.min.js")
      },
      {
        from: path.join(__dirname, "./client/app.htm"),
        to: path.join(__dirname, "./build/app.htm")
      },
      {
        from: path.join(__dirname, "./node_modules/vue/dist/vue.js"),
        to: "vue.js"
      }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // new webpack.ProvidePlugin({
    //   // $: "jquery",
    //   // jQuery: "jquery",
    //   // tools: "tools"
    // }),

    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json'),
    }),
    // new webpack.optimize.UglifyJsPlugin() //部署才用，作用是最小化文件，开发情况下会增加打包时间
  ],
  externals: {
    'jquery' : 'jQuery',
    'jquery' : '$',
    'Vue': "Vue"
  },
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
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader",
      },
      {
        test: /\.scss?$/,
        // exclude: /node_modules/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.css?$/,
        // exclude: /node_modules/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpg|png|gif)$/,
        // exclude: /node_modules/,
        loader: "url-loader",
        options: {
          limit: 1,
          name: "./lalala/Images/[name]-[hash:4].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: [".vue",'.js','.coffee'],
    alias: {
      "vue$": path.join(__dirname, "./node_modules/vue/dist/vue.js")
    }
  }
}