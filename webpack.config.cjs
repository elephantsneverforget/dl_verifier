const path = require("path");

module.exports = {
    entry: "./src/index.js",
    optimization: {
      minimize: false
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        globalObject: 'this',
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
        }],
    },
};
