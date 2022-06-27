const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].bundle.js",
        clean: true,
    },
    resolve: {
        extensions: [".js", "jsx"]
    },
    module: {
        rules: []
    },
    plugins: [],
};