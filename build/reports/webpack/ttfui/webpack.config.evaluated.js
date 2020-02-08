{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'kotlin-source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/home/magnus/documents/uni/ttfui/build/js/packages/ttfui/kotlin/ttfui.js'
    ]
  },
  output: {
    path: '/home/magnus/documents/uni/ttfui/build/distributions',
    filename: [Function: filename]
  },
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    port: 8080,
    contentBase: [
      '/home/magnus/documents/uni/ttfui/build/processedResources/Js/main'
    ]
  }
}