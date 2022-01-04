const CommonjsPlug = require('@etcpack/commonjs-plug');
const fs = require('fs');

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
        handler: ['@etcpack/plain-loader', function (source) {

            let imgStatement = null;
            while (imgStatement = /url\((['|"])(\.\/[^'"]*)\1\)/.exec(source)) {

                let bitmap = fs.readFileSync(imgStatement[2]);
                let base64Img = "data:image/png;base64," + Buffer.from(bitmap, 'binary').toString('base64');

                source = source.replace(imgStatement[0], 'url(' + base64Img + ')');
            }

            return source;

        }, '@etcpack/scss-loader']
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
