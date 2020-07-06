const { resolve } = require('path');
const defaultSettings = require('./settings').default;
const env = process.env.NODE_ENV;

export default {
    buildDir: `.nuxt-${env}`,
    router: {
        base: `/next${env == 'prod' ? '' : `-${env}`}`,
        scrollBehavior: function(to, from, savedPosition) {
            return { x: 0, y: 0 };
        }
    },
    env: {
        NODE_ENV: env
    },
    server: {
        port: defaultSettings.port
    },
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: defaultSettings.title,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: defaultSettings.ico
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        'normalize.css/normalize.css',
        'element-ui/lib/theme-chalk/index.css',
        '@/styles/index.scss'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/elementUi',
        { src: '~plugins/particles', ssr: false },
        '~/plugins/globalComponents'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            config.module.rules = config.module.rules.map(elm => {
                if (elm.test && /svg/.test(elm.test.toString())) {
                    elm.test = /\.(png|jpe?g|gif|webp)$/i;
                }
                return elm;
            });

            config.module.rules.push({
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [resolve(__dirname, './icons')],
                options: {
                    symbolId: 'icon-[name]'
                }
            });

            config.resolve.alias['@'] = resolve(__dirname, './');
        }
    }
};
