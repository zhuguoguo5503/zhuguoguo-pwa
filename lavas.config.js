/**
 * @file lavas config
 * @author Tricker(tricker.pan@gmail.com)
 */

'use strict';

const path = require('path');
const BUILD_PATH = path.resolve(__dirname, 'dist');
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    build: {
        ssr: false,
        path: BUILD_PATH,
        publicPath: '/',
        ssrCopy: isDev ? [] : [
            {
                src: 'server.prod.js'
            },
            {
                src: 'package.json'
            }
        ],
        extend: function(config, context) {
            if (context.type === 'base') {
                config.module.rules[1].exclude = /node_modules(?![\\/]_vue-awesome@\d+\.\d+\.\d+@vue-awesome[\\/])/;
                config.module.rules.push({
                    resource: path.join(__dirname, 'core/app.js'), // 应用loader的文件
                    loader: 'svg-loader',
                    enforce: 'pre' // 声明svg-loader最先执行
                });
                config.resolveLoader = {
                    alias: {
                        'svg-loader': path.join(__dirname, 'build/svg-loader')
                    }
                };
            }
        },
        nodeExternalsWhitelist: [
            /vue-awesome/
        ],
    },
    router: {
        mode: 'history',
        base: '/',
        pageTransition: {
            type: 'fade',
            transitionClass: 'fade'
        }
    },
    icon: {
        prefix: 'svg-',
        svgDir: path.join(__dirname, 'assets/svg'),
        icons: [
            'envelope',
            'home',
            'map-marker',
            'user',
            'globe',
            'cloud',
            'qrcode',
            'search',
            'comment',
            'bullhorn',
            'star',
            'star-half',
            'tree',
            'list-alt',
            'angle-right'
        ]
    },
    serviceWorker: {
        swSrc: path.join(__dirname, 'core/service-worker.js'),
        swDest: path.join(BUILD_PATH, 'service-worker.js'),
        // swPath: '/custom_path/', // specify custom serveice worker file's path, default is publicPath
        globDirectory: BUILD_PATH,
        globPatterns: [
            '**/*.{html,js,css,eot,svg,ttf,woff}'
        ],
        globIgnores: [
            'sw-register.js',
            '**/*.map'
        ],
        appshellUrl: '/appshell',
        dontCacheBustUrlsMatching: /\.\w{8}\./
    }
};
