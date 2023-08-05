// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        layoutTransition: {name: 'layout', mode: 'out-in'}
    },
    css: [
        '~/assets/fonts/icon/style.css',
        '~/assets/css/tailwind.css',
        '~/assets/css/Main.scss',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@element-plus/nuxt',
        '@pinia/nuxt',
        'nuxt-swiper',
        '@nuxtjs/i18n',
    ],
    i18n: {
        vueI18n: './i18n.config.ts' // if you are using custom path, default
    },
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    nitro: {
        devServer: {
            // My files are under src, if yours are in the root you can change this to ./
            watch: ['./']
        }
    }
})
