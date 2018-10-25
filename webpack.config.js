// webpack.config.js

module.exports = {
  // Establish entry points for JS and CSS
  // The entry object tells webpack which files to convert into minified/uglified JS and CSS
  entry: ["./src/index.js", "./src/index.css"],
  // Establish output paths for your Webpack build
  // The output object establishes the paths where webpack will store its final build.
  output: {
    path: __dirname + "/build", // path is the absolute path, i.e. the full name of the directory where our build is stored. __dirname is a built in node.js variable that maps to the current directory.
    publicPath: "/", // publicPath is the public URL that the build will connect to. / tells webpack that this build will be the path to our app’s root URL.
    filename: "bundle.js" // filename is the name of the file where the build will be stored.
  },
  // Establish rules for the modules in your app
  // The module object is where we define rules for how webpack should handle various modules, such as JS and CSS.
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "script-loader" }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  }
};
