const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

// 引入骨架屏插件
// const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
    // //打包入口
    // entry: ['./src/js/main.js', './src/js/a.js'], //由于合并为一个文件下 需要找到口文件main.js
    // //打包后的文件
    // output: {
    //     //不加__dirname 会报错

    //     //path:__dirname +'./dist/js',
    //     //filename:'bundle.js'
    //     //以上2行window下报错 

    //     path: __dirname,
    //     filename: './dist/js/bundle.js'

    // },
    chainWebpack: config => {
        // 修改文件引入自定义路径
        config.resolve.alias
            .set('@', resolve('src'))
        // .set('style', resolve('src/assets/style'))
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                // 修改它的选项...
                options.i18n = '@kazupon/vue-i18n-loader'
                return options
            })

    },
    devServer: {
        port: 8080, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: "http://127.0.0.1:8080/", // 你要访问的本地地址或者是网址地址
                ws: true, // 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端
                pathRewrite: {
                    "^/api": "/api"
                    //这里理解成用/api代替target里面的地址，后面组件中我们掉接口时直接用api代替，
                }
            },
        },
        // 配置多个代理
        // '/api'等于'http://127.0.0.1:8080/api'
    },
    // 第三方插件配置
    pluginOptions: {},
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.scss` 这个文件
                data: `@import "@/common.scss";`
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // 配置webpack
    // configureWebpack: (config) => {
    //     // console.log(config);
    //     config.plugins.push(new SkeletonWebpackPlugin({
    //         webpackConfig: {
    //             entry: {
    //                 app: path.join(__dirname, './src/skeleton.js'),
    //             },
    //         },
    //         minimize: true,
    //         quiet: true,
    //     }))

    // },
}