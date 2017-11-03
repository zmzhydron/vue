var path = require("path")
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin")
var pkg = require("./package.json")

let {
  devServer: {
    server: proxySev,
    host,
    port
  }
} = pkg;


function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    lol: path.resolve(__dirname, "./client/index.js")
  },
  output: {
    path: path.resolve(__dirname, "./dev"),
    filename: "[name].js",
    publicPath: "/src/"
  },
  // context: path.resolve(__dirname, "./client"),
  devtool: 'eval-source-map',
  externals: {
    'jquery': 'window.jQuery',
    'jquery': 'window.$',
    'vue': "Vue",
  },
  devServer: {
    contentBase: path.join(__dirname, "./client"),
    port: port,
    host: host,
    proxy: {
      "/api": {
        target: proxySev,
        secure: false
      }
    },
    inline: true,
    noInfo: false,
    hot: true,
    stats: {
      colors: true
    },
    historyApiFallback: {
      rewrites: [{
        from: /^\/$/,
        to: 'index.htm'
      }, ],
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //拷贝打包目录下的文件、文件夹到指定的输出
    new CopyWebpackPlugin([{
        from: path.join(__dirname, "./node_modules/jquery/dist/jquery.min.js"),
      },
      {
        from: path.join(__dirname, "./node_modules/vue/dist/vue.js"),
      },
      {
        from: path.join(__dirname, "./client/src/libs/jquery.form.min.js"),
      }
    ]),
    new webpack.ProvidePlugin({
      ajax: "aijiakesi",
    })
  ],
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   // include: [resolve('client')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
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
        use: [{
            loader: "vue-loader",
            options: {},
          },
          {
            loader: "iview-loader",
            options: {
              prefix: false
            }
          }
        ]
      },
      {
        test: /\.css?$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /(\.html|\.htm)$/,
        loaders: ['file-loader?name=[path][name].[ext]', 'template-html-loader?raw=true&engine=lodash&isDev=true']
      },
      {
        test: /\.scss?$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.(jpg|png|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 1,
          name: "./Images/[name]-[hash:4].[ext]"
        }
      },
      {
        test: /\.(eot|ttf|otf|woff)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "./Images/[name]-[hash:4].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: [".vue", '.js', '.coffee'],
    alias: {
      // "vue$": path.join(__dirname, "./node_modules/vue/dist/vue.js")
      aijiakesi$: path.resolve(__dirname, "./client/src/libs/ajax.js"),
      ajaxform$: path.resolve(__dirname, "./client/src/libs/jquery.form.min.js"),
      storeSrc: path.resolve(__dirname, "./client/src/store"),
      vueComp: path.resolve(__dirname, "./client/src/vue"),
    }
  }
}