const CommonjsPlug = require('@etcpack/commonjs-plug');

module.exports = {

    // 打包入口
    entry: './src/export.js',

    // 打包出口
    output: 'dist/open-web-word.js',

    // 对导入路径重定向
    redirect: {
        'nefbl': "./src/lib/nefbl.js"
    },

    loader: [{
        test: /\.(css|scss)$/,
        handler: ['@etcpack/plain-loader', '@etcpack/css-loader', '@etcpack/scss-loader']
    }, {
        test: /\.html$/,
        handler: ['@etcpack/plain-loader']
    }, {
        test: /\.(ts|js)$/,
        handler: [function (source) {
            if (/node_modules/.test(this.filepath) && !/sprout-ui/.test(this.filepath)) return source;
            return require('@babel/core').transformFileSync(this.filepath, require('./babel.config')).code;
        }]
    }],
    plug: [
        new CommonjsPlug()
    ]
};
